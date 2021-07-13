using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using Avian.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Data.Repositories
{
    public class StatesGetRepository : GenericRepository<Abstate>, IStatesGetRepository
    {
        public StatesGetRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Abstate> GetStates()
        {
            return Get();
        }
    }
}
