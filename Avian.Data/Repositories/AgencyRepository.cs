using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using Avian.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Data.Repositories
{
    public class AgencyRepository : GenericRepository<Abagency>, IAgencyRepository
    {
        public AgencyRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<Abagency> GetAgencyAll()
        {
            return Get(includes: AgencyAllIncludes());            
        }

        public IEnumerable<Abagency> GetAgencyToken(Guid Id, string Token)
        {
            return Get(a => a.AgencyId == Id && a.Token == Token, includes: AgencyIncludes());
        }

        public IEnumerable<Abagency> GetAgency(Guid Id) {
            return Get(a => a.AgencyId == Id, includes: AgencyIncludes());
        }
        private string[] AgencyIncludes() => new string[] { "Abemail", "Abphone", "AbownerOfficer", "Abcarrier", "AbcontAut", "AbcontAut.Abemail", "AbcontAut.Abphone", "AbagencyProductWritten", "Abdocument", "AbagencyMigrate" };
        private string[] AgencyAllIncludes() => new string[] { "Abemail", "Abphone", "Abdocument" };        
    }
    public class ProductWrittenRepository : GenericRepository<AbagencyProductWritten>, IProductWrittenRepository
    {
        public ProductWrittenRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<AbagencyProductWritten> GetProductWrittenAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }        

        public IEnumerable<AbagencyProductWritten> GetProductWritten(Guid Id)
        {
            return Get(a => a.ProductWrittenId == Id/*, includes: ProductWrittenIncludes()*/);
        }
        public IEnumerable<AbagencyProductWritten> GetProductWrittenAgency(Guid Id)
        {
            return Get(a => a.ProductWrittenAgencyId == Id/*, includes: ProductWrittenIncludes()*/);
        }
    }
    public class CarrierRepository : GenericRepository<Abcarrier>, ICarrierRepository
    {
        public CarrierRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<Abcarrier> GetCarrierAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }

        public IEnumerable<Abcarrier> GetCarrier(Guid Id)
        {
            return Get(a => a.CarrierId == Id/*, includes: ProductWrittenIncludes()*/);
        }
    }
    public class ContAutRepository : GenericRepository<AbcontAut>, IContAutRepository
    {
        public ContAutRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<AbcontAut> GetContAutAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }

        public IEnumerable<AbcontAut> GetContAut(Guid Id)
        {
            return Get(a => a.ContAutId == Id/*, includes: ProductWrittenIncludes()*/);
        }
    }
    public class EmailRepository : GenericRepository<Abemail>, IEmailRepository
    {
        public EmailRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<Abemail> GetEmailAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }

        public IEnumerable<Abemail> GetEmail(Guid Id)
        {
            return Get(a => a.EmailId == Id/*, includes: ProductWrittenIncludes()*/);
        }
    }
    public class PhoneRepository : GenericRepository<Abphone>, IPhoneRepository
    {
        public PhoneRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<Abphone> GetPhoneAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }

        public IEnumerable<Abphone> GetPhone(Guid Id)
        {
            return Get(a => a.PhoneId == Id/*, includes: ProductWrittenIncludes()*/);
        }
    }
    public class OwnerOfficerRepository : GenericRepository<AbownerOfficer>, IOwnerOfficerRepository
    {
        public OwnerOfficerRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<AbownerOfficer> GetOwnerOfficerAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }

        public IEnumerable<AbownerOfficer> GetOwnerOfficer(Guid Id)
        {
            return Get(a => a.OwnerOfficerId == Id/*, includes: ProductWrittenIncludes()*/);
        }
    }

    public class EmailStatusRepository : GenericRepository<AbemailStatus>, IEmailStatusRepository
    {
        public EmailStatusRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<AbemailStatus> GetEmailStatusAll()
        {
            return Get(includes: CatlogsIncludes());
        }

        public IEnumerable<AbemailStatus> GetEmailStatus(Guid? Id)
        {
            return Get(a => a.StatusCatlogsId == Id, includes: CatlogsIncludes());
        }
        private string[] CatlogsIncludes() => new string[] { "StatusCatlogs" };
    }

    public class StatusChangeSetRepository : GenericRepository<AbstatusChangeSet>, IStatusChangeSetRepository
    {
        public StatusChangeSetRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<AbstatusChangeSet> GetStatusChangeSetAll()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }

        public IEnumerable<AbstatusChangeSet> GetStatusChangeSet(Guid AgencyId, Guid EmailStatusId)
        {
            return Get(a => a.AgencyId == AgencyId && a.EmailStatusId == EmailStatusId);
        }
        public IEnumerable<AbstatusChangeSet> GetStatusChangeSetId(Guid AgencyId)
        {
            return Get(a => a.AgencyId == AgencyId);
        }
    }

    public class LogsRepository : GenericRepository<Ablog>, ILogsRepository
    {
        public LogsRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<Ablog> GetLogs()
        {
            return Get(/*includes: ProductWrittenAllIncludes()*/);
        }        
    }

    public class AgencyMigrateRepository : GenericRepository<AbagencyMigrate>, IAgencyMigrateRepository
    {
        public AgencyMigrateRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }

    }

}
