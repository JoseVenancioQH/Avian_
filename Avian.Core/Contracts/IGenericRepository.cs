using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Avian.Core.Contracts
{
    public interface IGenericRepository<T> where T : class
    {
        void Commit();
        Task CommitAsync();
        void Dispose();
        bool Exists(Expression<Func<T, bool>> filter);
        IEnumerable<T> Get(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, int? pageSize = null, int? currentPage = null, params string[] includes);
        Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, int? pageSize = null, int? currentPage = null, params string[] includes);
        T GetById(object id);
        IQueryable<T> GetQuery(Expression<Func<T, bool>> filter = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, int? pageSize = null, int? currentPage = null, params string[] includeProperties);
        void Insert(T entity);
        void Remove(object id);
        void Remove(T entity);
        Task<int> RemoveAsync(T entity);
        void Update(T entity);
    }
}