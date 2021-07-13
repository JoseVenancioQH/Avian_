using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abagency
    {
        public Abagency()
        {
            AbagencyMigrate = new HashSet<AbagencyMigrate>();
            AbagencyProductWritten = new HashSet<AbagencyProductWritten>();
            Abcarrier = new HashSet<Abcarrier>();
            AbcontAut = new HashSet<AbcontAut>();
            Abdocument = new HashSet<Abdocument>();
            Abemail = new HashSet<Abemail>();
            AbownerOfficer = new HashSet<AbownerOfficer>();
            Abphone = new HashSet<Abphone>();
            AbstatusChangeSet = new HashSet<AbstatusChangeSet>();
        }

        public Guid AgencyId { get; set; }
        public int AgencyRequestNumber { get; set; }
        public Guid? AgencyStatus { get; set; }
        public Guid? AgencyType { get; set; }
        public Guid? UserIdCreate { get; set; }
        public Guid? UserIdModify { get; set; }
        public DateTime? DateTimeCreate { get; set; }
        public DateTime? DateTimeModify { get; set; }
        public string AgencyName { get; set; }
        public string AgencyTin { get; set; }
        public string AgencyStreet { get; set; }
        public string AgencyCity { get; set; }
        public Guid? AgencyState { get; set; }
        public string AgencyZip { get; set; }
        public double? AgencyAnnualB { get; set; }
        public double? AgencyAnnualP { get; set; }
        public int? AgencyNumberYear { get; set; }
        public int? AgencyNumberEmployee { get; set; }
        public int? AgencyAverageSize { get; set; }
        public string AgencyAccountBankName { get; set; }
        public string AgencyAccountRoutingNumber { get; set; }
        public string AgencyAccountAccountNumber { get; set; }
        public string AgencyAccountHoldersName { get; set; }
        public string AgencyRemarks { get; set; }
        public int AgencyDocumentId { get; set; }
        public bool? AgencyGeneralDataIsCorrect { get; set; }
        public bool? AgencyOwnerOfficerisCorrect { get; set; }
        public bool? AgencyTrustAccountIsCorrect { get; set; }
        public bool? AgencyAuthorizedContcatIsCorrect { get; set; }
        public string AgencyGeneralDataIsCorrectData { get; set; }
        public string AgencyOwnerOfficerisCorrectData { get; set; }
        public string AgencyTrustAccountIsCorrectData { get; set; }
        public string AgencyAuthorizedContcatIsCorrectData { get; set; }
        public bool? DocumentGenerateStatus { get; set; }
        public string Token { get; set; }
        public Guid? ResendStatus { get; set; }

        public virtual Abstate AgencyStateNavigation { get; set; }
        public virtual Abcatlogs AgencyStatusNavigation { get; set; }
        public virtual Abcatlogs AgencyTypeNavigation { get; set; }
        public virtual Abuser UserIdCreateNavigation { get; set; }
        public virtual Abuser UserIdModifyNavigation { get; set; }
        public virtual ICollection<AbagencyMigrate> AbagencyMigrate { get; set; }
        public virtual ICollection<AbagencyProductWritten> AbagencyProductWritten { get; set; }
        public virtual ICollection<Abcarrier> Abcarrier { get; set; }
        public virtual ICollection<AbcontAut> AbcontAut { get; set; }
        public virtual ICollection<Abdocument> Abdocument { get; set; }
        public virtual ICollection<Abemail> Abemail { get; set; }
        public virtual ICollection<AbownerOfficer> AbownerOfficer { get; set; }
        public virtual ICollection<Abphone> Abphone { get; set; }
        public virtual ICollection<AbstatusChangeSet> AbstatusChangeSet { get; set; }
    }
}
