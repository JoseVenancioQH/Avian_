using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using Avian.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avian.Data.Repositories
{
    public class CatlogsGetRepository : GenericRepository<Abcatlogs>, ICatlogsGetRepository
    {
        public CatlogsGetRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public Abcatlogs GetCatlogsName(string CatlogsName)
        {
            return Get(a=>a.CatlogsName==CatlogsName).FirstOrDefault();
        }

        public IEnumerable<Abcatlogs> GetCatlogs()
        {
            return Get(includes: PermissionsIncludes());
        }
        private string[] PermissionsIncludes() => new string[] { "AbcatlogsProfileCatlogsIdProfileNavigation" };

    }
}
