using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avian.Core.BusinessLogic
{
    public class StatesGetBusiness
    {
        private readonly IStatesGetRepository StatesGetRepository;

        public StatesGetBusiness(IStatesGetRepository StatesGetRepository)
        {
            this.StatesGetRepository = StatesGetRepository;
        }

        public string GetSomeText()
        {
            return "Hello World!!!";
        }

        public IEnumerable<Abstate> StatesGet()
        {
            return StatesGetRepository.GetStates().OrderBy(a => a.StateName);            
        }

        public Abstate StatesGetId(Guid? Id)
        {
            return StatesGetRepository.GetStates().Where(a=>a.StateId==Id).FirstOrDefault();
        }
    }
}
