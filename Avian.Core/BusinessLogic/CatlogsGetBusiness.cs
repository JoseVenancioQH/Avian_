using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avian.Core.BusinessLogic
{
    public class CatlogsGetBusiness
    {
        private readonly ICatlogsGetRepository CatlogsGetRepository;
        private readonly IProductWrittenRepository ProductWrittenRepository;

        public CatlogsGetBusiness(ICatlogsGetRepository CatlogsGetRepository, IProductWrittenRepository ProductWrittenRepository)
        {
            this.CatlogsGetRepository = CatlogsGetRepository;
            this.ProductWrittenRepository = ProductWrittenRepository;
        }

        public string GetSomeText()
        {
            return "Hello World!!!";
        }

        public IEnumerable<Abcatlogs> CatlogsGet()
        {
            return CatlogsGetRepository.GetCatlogs().OrderBy(a => a.CatlogsType);            
        }

        public IEnumerable<AbagencyProductWritten> CatlogsGetProductWritten()
        {
            return ProductWrittenRepository.Get();
        }

        public Guid CatlogsGetName(string CatlogsName)
        {
            return CatlogsGetRepository.GetCatlogsName(CatlogsName).CatlogsId;
        }
    }
}
