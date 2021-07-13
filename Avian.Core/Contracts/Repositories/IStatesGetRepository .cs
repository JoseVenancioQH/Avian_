using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Core.Contracts.Repositories
{
    public interface IStatesGetRepository : IGenericRepository<Abstate>
    {
        IEnumerable<Abstate> GetStates();
    }
}
