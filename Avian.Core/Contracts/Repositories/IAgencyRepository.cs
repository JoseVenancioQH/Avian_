using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Core.Contracts.Repositories
{
    public interface IAgencyRepository : IGenericRepository<Abagency>
    {
        IEnumerable<Abagency> GetAgencyAll();
        IEnumerable<Abagency> GetAgency(Guid Id);
        IEnumerable<Abagency> GetAgencyToken(Guid Id, string Token);
    }
    public interface IAgencyMigrateRepository : IGenericRepository<AbagencyMigrate>
    {

    }
    public interface IEmailStatusRepository : IGenericRepository<AbemailStatus>
    {
        IEnumerable<AbemailStatus> GetEmailStatusAll();
        IEnumerable<AbemailStatus> GetEmailStatus(Guid? Id);
    }

    public interface IStatusChangeSetRepository : IGenericRepository<AbstatusChangeSet>
    {
        IEnumerable<AbstatusChangeSet> GetStatusChangeSetAll();
        IEnumerable<AbstatusChangeSet> GetStatusChangeSet(Guid AgencyId, Guid EmailStatusId);
        IEnumerable<AbstatusChangeSet> GetStatusChangeSetId(Guid AgencyId);
    }

    public interface IProductWrittenRepository : IGenericRepository<AbagencyProductWritten>
    {
        IEnumerable<AbagencyProductWritten> GetProductWrittenAll();
        IEnumerable<AbagencyProductWritten> GetProductWritten(Guid Id);
        IEnumerable<AbagencyProductWritten> GetProductWrittenAgency(Guid Id);
    }
    public interface ICarrierRepository : IGenericRepository<Abcarrier>
    {
        IEnumerable<Abcarrier> GetCarrierAll();
        IEnumerable<Abcarrier> GetCarrier(Guid Id);
    }
    public interface IContAutRepository : IGenericRepository<AbcontAut>
    {
        IEnumerable<AbcontAut> GetContAutAll();
        IEnumerable<AbcontAut> GetContAut(Guid Id);
    }
    public interface IEmailRepository : IGenericRepository<Abemail>
    {
        IEnumerable<Abemail> GetEmailAll();
        IEnumerable<Abemail> GetEmail(Guid Id);
    }
    public interface IPhoneRepository : IGenericRepository<Abphone>
    {
        IEnumerable<Abphone> GetPhoneAll();
        IEnumerable<Abphone> GetPhone(Guid Id);
    }
    public interface IOwnerOfficerRepository : IGenericRepository<AbownerOfficer>
    {
        IEnumerable<AbownerOfficer> GetOwnerOfficerAll();
        IEnumerable<AbownerOfficer> GetOwnerOfficer(Guid Id);
    }

    public interface ILogsRepository : IGenericRepository<Ablog>
    {
        IEnumerable<Ablog> GetLogs();
    }
}
