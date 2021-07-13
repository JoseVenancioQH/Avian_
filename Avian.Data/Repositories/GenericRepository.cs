using Avian.Core.Contracts;
using Avian.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Avian.Data.Repositories
{ 
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly DbContext dbContext;
        protected readonly DbSet<T> databaseSet;
        protected bool disposed;
        protected virtual string[] IncludeProperties { get; set; }

        public GenericRepository(AvianBAPContext dbContext)
        {
            this.dbContext = dbContext;
            databaseSet = this.dbContext.Set<T>();
        }

        #region Remove
        public virtual void Remove(object id) => Remove(GetById(id));

        public virtual void Remove(T entity)
        {
            databaseSet.Remove(entity);
            dbContext.SaveChanges();
        }

        public virtual async Task<int> RemoveAsync(T entity)
        {
            databaseSet.Remove(entity);
            return await dbContext.SaveChangesAsync();
        }
        #endregion

        #region Get
        public bool Exists(Expression<Func<T, bool>> filter) => GetQuery(filter).Any();

        public virtual IEnumerable<T> Get(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, int? pageSize = null, int? currentPage = null, params string[] includes)
        {
            if (IncludeProperties != null && (includes == null || includes.Length == 0)) includes = this.IncludeProperties;
            return GetQuery(filter, orderBy, pageSize, currentPage, includes);
        }

        public virtual async Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, int? pageSize = null, int? currentPage = null, params string[] includes)
        {
            if (IncludeProperties != null && (includes == null || includes.Length == 0)) includes = this.IncludeProperties;
            return await GetQuery(filter, orderBy, pageSize, currentPage, includes).ToListAsync();
        }

        public IQueryable<T> GetQuery(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, int? pageSize = null, int? currentPage = null, params string[] includeProperties)
        {
            IQueryable<T> query = this.databaseSet.AsNoTracking();
            if (filter != null) query = query.Where(filter).AsNoTracking();

            foreach (var includeProperty in includeProperties)
            {
                query = query.Include(includeProperty).AsNoTracking();
            }

            if (orderBy != null) query = orderBy(query).AsNoTracking();
            
            if (pageSize.HasValue && currentPage.HasValue) query = query.Skip(pageSize.Value * currentPage.Value).Take(pageSize.Value);
            
            return query.AsNoTracking();
        }

        public T GetById(object id) => databaseSet.Find(id);
        #endregion

        #region Add/Update

        public virtual void Insert(T entity)
        {
            databaseSet.Add(entity);
            dbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            EntityEntry entry = dbContext.Entry(entity);            
            if (entry.State == EntityState.Detached)
            {                
                var key = GetPrimaryKeys(entity)[0];
                var currentEntry = GetById(key);
                if (currentEntry != null)
                {
                    var attachedEntry = dbContext.Entry(currentEntry);
                    attachedEntry.CurrentValues.SetValues(entity);
                    Commit();
                }
                else
                {   
                    databaseSet.Attach(entity);
                    dbContext.Entry(entity).State = EntityState.Modified;
                    Insert(entity);
                }             
            }
            else if (entry.State == EntityState.Unchanged)
            {
                dbContext.Entry(entity).State = EntityState.Modified;
                Commit();
            }
        }
        #endregion

        #region Save Changes

        public void Commit() => dbContext.SaveChanges();

        public async Task CommitAsync() => await dbContext.SaveChangesAsync();
        #endregion

        #region Commands

        protected async Task Execute(string command) => await dbContext.Database.ExecuteSqlCommandAsync(command);

        protected async Task Execute(string command, params object[] parameters) => await dbContext.Database.ExecuteSqlCommandAsync(command, parameters);

        protected IEnumerable<T> SqlQuery(string query) => databaseSet.FromSql(query);

        #endregion

        #region Key Names
        private object[] GetPrimaryKeys<P>(P entity)
        {
            string[] keyNames = GetKeyNames();
            Type type = typeof(P);
            object[] keys = new object[keyNames.Length];
            for (int i = 0; i < keyNames.Length; i++)
            {
                keys[i] = type.GetProperty(keyNames[i]).GetValue(entity, null);
            }
            return keys;
        }

        private string[] GetKeyNames() => dbContext.Model.FindEntityType(typeof(T)).FindPrimaryKey().Properties.Select(x => x.Name).ToArray();

        private string[] GetProperties() => dbContext.Model.FindEntityType(typeof(T)).GetProperties().Select(x => x.Name).ToArray();
        #endregion

        public void Dispose()
        {
            if (!disposed) dbContext.Dispose();
            disposed = true;
        }
    }
}
