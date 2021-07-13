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
    public class DocumentRepository : GenericRepository<Abdocument>, IDocumentRepository
    {
        public DocumentRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }        

        public IEnumerable<Abdocument> GetDocument() {
            return Get();
        }

        public IEnumerable<Abdocument> GetAllDocument()
        {
            return Get();
        }

        public IEnumerable<Abdocument> GetDocumentId(int Id)
        {
            return Get(a=>a.DocumentId==Id);
        }
        /*private string[] EmployeesIncludes() => new string[] { "EmployeeCompanies.Company" };*/
    }
}
