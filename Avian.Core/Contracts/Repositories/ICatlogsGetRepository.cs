using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Core.Contracts.Repositories
{
    public interface ICatlogsGetRepository : IGenericRepository<Abcatlogs>
    {
        IEnumerable<Abcatlogs> GetCatlogs();
        Abcatlogs GetCatlogsName(string CatlogsName);
    }

}
