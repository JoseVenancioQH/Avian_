using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Core.Contracts.Repositories
{    public interface IDocumentRepository : IGenericRepository<Abdocument>
     {
        IEnumerable<Abdocument> GetAllDocument();
        IEnumerable<Abdocument> GetDocumentId(int Id);
        
    } 
}
