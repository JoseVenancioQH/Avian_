using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using Avian.Core.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using System.Globalization;

namespace Avian.Core.BusinessLogic
{
    
    public class AgencyBusiness
    {
        private readonly IAgencyRepository AgencyRepository;
        private readonly IAgencyMigrateRepository AgencyMigrateRepository;
        private readonly IDocumentRepository DocumentRepository;
        private readonly IEmailRepository EmailRepository;
        private readonly IPhoneRepository PhoneRepository;
        private readonly IProductWrittenRepository ProductWrittenRepository;
        private readonly ICarrierRepository CarrierRepository;
        private readonly IContAutRepository ContAutRepository;
        private readonly IOwnerOfficerRepository OwnerOfficerRepository;
        private readonly IUserRepository UserRepository;
        private readonly IEmailStatusRepository EmailStatusRepository;
        private readonly IStatusChangeSetRepository StatusChangeSetRepository;
        private readonly ILogsRepository LogsRepository;
        public AgencyBusiness(
            IAgencyRepository AgencyRepository,
            IAgencyMigrateRepository AgencyMigrateRepository,
            IDocumentRepository DocumentRepository,
            IEmailRepository EmailRepository,
            IPhoneRepository PhoneRepository,
            IProductWrittenRepository ProductWrittenRepository,
            ICarrierRepository CarrierRepository,
            IContAutRepository ContAutRepository,
            IOwnerOfficerRepository OwnerOfficerRepository,
            IUserRepository UserRepository,
            IEmailStatusRepository EmailStatusRepository,
            IStatusChangeSetRepository StatusChangeSetRepository,
            ILogsRepository LogsRepository
        )
        {
            this.AgencyRepository = AgencyRepository;
            this.AgencyMigrateRepository = AgencyMigrateRepository;
            this.DocumentRepository = DocumentRepository;
            this.EmailRepository = EmailRepository;
            this.PhoneRepository = PhoneRepository;
            this.ProductWrittenRepository = ProductWrittenRepository;
            this.CarrierRepository = CarrierRepository;
            this.ContAutRepository = ContAutRepository;
            this.OwnerOfficerRepository = OwnerOfficerRepository;
            this.UserRepository = UserRepository;
            this.EmailStatusRepository = EmailStatusRepository;
            this.StatusChangeSetRepository = StatusChangeSetRepository;
            this.LogsRepository = LogsRepository;
        }

        public Abdocument FetchDocument(Abdocument objDocument)
        {
            try
            {
                if (!String.IsNullOrEmpty(objDocument.DocumentId.ToString()) || objDocument.DocumentId == 0)
                {
                    objDocument.DocumentFile = "";
                    ///////////////////////////
                    /*All Guid for Relation*/
                    //////////////////////////                    
                    DocumentRepository.Insert(objDocument);
                    DocumentRepository.Commit();
                }
                else
                {
                    DocumentRepository.Update(objDocument);
                    DocumentRepository.Commit();
                }
                return objDocument;
            }
            catch (Exception ex)
            {
                ex.ToString();                
                return null;
            }
        }

        /*public bool RemoveAgency(Guid Id)
        {
            Abagency tAgency = AgencyRepository.GetAgency(Id).FirstOrDefault();
            AgencyRepository.RemoveAsync(tAgency);
            return true;
        }*/


        public IEnumerable<Abagency> GetAgency(Guid Id)
        {            
            return AgencyRepository.GetAgency(Id);
        }

        public IEnumerable<Abagency> GetAgencyToken(Guid Id, string Token)
        {
            return AgencyRepository.GetAgencyToken(Id, Token);
        }

        public IEnumerable<BrokerInformationModel> GetAgencyAll()
        {
            return AgencyRepository.GetAgencyAll().Select(a => new BrokerInformationModel
                                                                                        {
                                                                                            AgencyId = a.AgencyId,
                                                                                            AgencyName = a.AgencyName,
                                                                                            DateTimeCreate = a.DateTimeCreate.ToString(),
                                                                                            AgencyRequestNumber = a.AgencyRequestNumber,
                                                                                            Abemail = a.Abemail,
                                                                                            Abphone = a.Abphone,
                                                                                            AgencyStatus = a.AgencyStatus,
                                                                                            DocumentGenerateStatus = a.DocumentGenerateStatus
                                                                                        }
                                                         ).OrderByDescending(a=> a.AgencyRequestNumber);
        }

        public AbemailStatus GetEmaiStatus(Guid? Id)
        {
            return EmailStatusRepository.GetEmailStatus(Id).Where(a=>a.Status==true).FirstOrDefault();
        }

        

        public string SaveAgencyEmailStatus(AbemailStatus ObjEmailStatus)
        {
            if(ObjEmailStatus.EmailStatusId == null || ObjEmailStatus.EmailStatusId == Guid.Empty)
            {
                return "Insert";
            }
            else
            {
                EmailStatusRepository.Update(ObjEmailStatus);
                EmailStatusRepository.Commit();
                return "Update";
            }
            
        }

        public IEnumerable<StatusEmailModel> GetEmaiStatusAll()
        {
            return EmailStatusRepository.GetEmailStatusAll().Select(a => new StatusEmailModel
                                                                                        {
                                                                                            EmailStatusId = a.EmailStatusId,
                                                                                            Status= a.Status,
                                                                                            TypeSend = a.TypeSend,
                                                                                            StatusCatlogsId = a.StatusCatlogsId,
                                                                                            EmailStatus = a.StatusCatlogs.CatlogsName,
                                                                                            EmailTo = a.EmailTo.Split(';').ToList(),
                                                                                            EmailCc = a.EmailCc.Split(';').ToList()
            }
            );
        }

        public AbstatusChangeSet GetStatusChangeSet(Guid AgencyId, Guid EmailStatusId)
        {
            return StatusChangeSetRepository.GetStatusChangeSet(AgencyId, EmailStatusId).FirstOrDefault();
        }

        public List<AbstatusChangeSet> GetStatusChangeSetId(Guid AgencyId)
        {
            return StatusChangeSetRepository.GetStatusChangeSetId(AgencyId).ToList();
        }

        public Boolean InsertStatusChangeSet(Guid AgencyId, Guid EmailStatusId, string MailContent)
        {
            AbstatusChangeSet objStatusChangeSet = new AbstatusChangeSet() {
                StatusChangeSetId = Guid.NewGuid(),
                AgencyId = AgencyId,
                EmailStatusId = EmailStatusId,
                MailContent = MailContent
            };
            StatusChangeSetRepository.Insert(objStatusChangeSet);
            StatusChangeSetRepository.Commit();
            return true;
        }



        public ReturnMessage SaveAgency(Abagency objAgency)
        {
            int IdRequestNumber = 0;
            try
            {

                if (objAgency.UserIdCreate == null || Guid.Empty == objAgency.UserIdCreate)
                {
                    Abuser setUserEmpty = UserRepository.GetUserEmpty("brokerempty").FirstOrDefault();
                    objAgency.UserIdCreate = setUserEmpty.UserId;
                    objAgency.UserIdModify = setUserEmpty.UserId;
                }
                if (String.IsNullOrEmpty(objAgency.AgencyId.ToString()) || Guid.Empty == objAgency.AgencyId)
                {
                    objAgency.AgencyId = Guid.NewGuid();
                    foreach (AbcontAut objCountAut in objAgency.AbcontAut)
                    {
                        objCountAut.AgencyId = objAgency.AgencyId;
                        objCountAut.ContAutId = Guid.NewGuid();
                        foreach (Abemail objEmail in objCountAut.Abemail)
                        {
                            objEmail.AgencyId = null;
                            objEmail.EmailId = Guid.NewGuid();
                            objEmail.ContAuId = objCountAut.ContAutId;
                        }
                        foreach (Abphone objPhone in objCountAut.Abphone)
                        {
                            objPhone.AgencyId = null;
                            objPhone.PhoneId = Guid.NewGuid();
                            objPhone.ContAuId = objCountAut.ContAutId;
                        }
                    }

                    foreach (Abemail objEmail in objAgency.Abemail)
                    {
                        objEmail.AgencyId = objAgency.AgencyId;
                        objEmail.EmailId = Guid.NewGuid();
                        objEmail.ContAuId = null;
                    }

                    foreach (Abphone objPhone in objAgency.Abphone)
                    {
                        objPhone.AgencyId = objAgency.AgencyId;
                        objPhone.PhoneId = Guid.NewGuid();
                        objPhone.ContAuId = null;
                    }
                    foreach (Abcarrier objCarrier in objAgency.Abcarrier)
                    {
                        objCarrier.AgencyId = objAgency.AgencyId;
                        objCarrier.CarrierId = Guid.NewGuid();
                    }

                    foreach (AbownerOfficer objOwnerOfficer in objAgency.AbownerOfficer)
                    {
                        objOwnerOfficer.AgencyId = objAgency.AgencyId;
                        objOwnerOfficer.OwnerOfficerId = Guid.NewGuid();
                    }

                    foreach (AbagencyProductWritten objProductWritten in objAgency.AbagencyProductWritten)
                    {
                        if (objProductWritten.ProductWrittenCatlogsId == Guid.Empty) { objAgency.AbagencyProductWritten = null; }
                        objProductWritten.ProductWrittenAgencyId = objAgency.AgencyId;
                        objProductWritten.ProductWrittenId = Guid.NewGuid();
                        //objProductWritten.ProductWrittenCatlogsId = objProductWritten.ProductWrittenCatlogsId;
                    }

                    Abdocument objDocument = new Abdocument();
                    foreach (Abdocument objDocumentFile in objAgency.Abdocument)
                    {
                        objDocument.DocumentFile = objDocumentFile.DocumentFile;
                    }

                    if (objAgency.AbagencyMigrate != null)
                    {
                        foreach (AbagencyMigrate objAgencyMigrate in objAgency.AbagencyMigrate)
                        {
                            objAgencyMigrate.AgencyMigrateId = Guid.NewGuid();
                            objAgencyMigrate.AgencyId = objAgency.AgencyId;
                            IdRequestNumber = Convert.ToInt32(objAgencyMigrate.AgencyRequestNumber);
                        }

                        Abdocument DocumentFetch;
                        Abdocument IDocumentFetch = new Abdocument { };
                        if (objAgency.AgencyDocumentId == 0)
                        {
                            DocumentFetch = FetchDocument(IDocumentFetch);
                            objAgency.AgencyDocumentId = DocumentFetch.DocumentId;
                        }
                    }

                    objAgency.Abdocument = null;

                    //objAgency.AgencyRequestNumber = 0;

                    AgencyRepository.Insert(objAgency);
                    AgencyRepository.Commit();


                    objDocument.DocumentId = objAgency.AgencyDocumentId;
                    objDocument.DocumentAgencyId = objAgency.AgencyId;

                    DocumentRepository.Update(objDocument);
                    DocumentRepository.Commit();

                }
                else
                {

                    AgencyRepository.Update(objAgency);
                    AgencyRepository.Commit();

                    List<AbagencyProductWritten> RemoveProductWritten = ProductWrittenRepository.GetProductWrittenAgency(objAgency.AgencyId).ToList();
                    foreach (AbagencyProductWritten objProductWritten in RemoveProductWritten)
                    {
                        ProductWrittenRepository.Remove(objProductWritten);
                    }

                    foreach (AbagencyProductWritten objProductWritten in objAgency.AbagencyProductWritten)
                    {
                        //if (objProductWritten.ControlUpdate == true)
                        //{
                        //if (objProductWritten.ProductWrittenAgencyId == Guid.Empty || objProductWritten.ProductWrittenAgencyId == null) { 
                        objProductWritten.ProductWrittenId = Guid.NewGuid();
                        objProductWritten.ProductWrittenAgencyId = objAgency.AgencyId;
                        ProductWrittenRepository.Insert(objProductWritten);
                        ProductWrittenRepository.Commit();
                        //}                            
                        //}
                        //else {  //ProductWrittenRepository.Remove(objProductWritten);  ProductWrittenRepository.Commit(); }
                    }

                    foreach (Abcarrier objCarrier in objAgency.Abcarrier)
                    {
                        if (objCarrier.ControlUpdate == true)
                        {
                            if (objCarrier.CarrierId == Guid.Empty || objCarrier.CarrierId == null) { objCarrier.CarrierId = Guid.NewGuid(); objCarrier.AgencyId = objAgency.AgencyId; }
                            CarrierRepository.Update(objCarrier);
                            CarrierRepository.Commit();
                        }
                        else { CarrierRepository.Remove(objCarrier); CarrierRepository.Commit(); }
                    }

                    foreach (AbcontAut objCountAut in objAgency.AbcontAut)
                    {
                        if (objCountAut.ContAutId == Guid.Empty || objCountAut.ContAutId == null)
                        {
                            objCountAut.ContAutId = Guid.NewGuid();
                            objCountAut.AgencyId = objAgency.AgencyId;
                            foreach (Abemail objEmail in objCountAut.Abemail)
                            {
                                objEmail.AgencyId = null;
                                objEmail.EmailId = Guid.NewGuid();
                                objEmail.ContAuId = objCountAut.ContAutId;
                            }
                            foreach (Abphone objPhone in objCountAut.Abphone)
                            {
                                objPhone.AgencyId = null;
                                objPhone.PhoneId = Guid.NewGuid();
                                objPhone.ContAuId = objCountAut.ContAutId;
                            }
                            ContAutRepository.Insert(objCountAut);
                            ContAutRepository.Commit();
                        }
                        else
                        {
                            if (objCountAut.ControlUpdate == true)
                            {
                                ContAutRepository.Update(objCountAut);
                                ContAutRepository.Commit();
                            }
                            foreach (Abemail objEmail in objCountAut.Abemail)
                            {
                                if (objEmail.ControlUpdate == true)
                                {
                                    if (objEmail.EmailId == Guid.Empty || objEmail.EmailId == null) { objEmail.EmailId = Guid.NewGuid(); objEmail.AgencyId = null; objEmail.ContAuId = objCountAut.ContAutId; }
                                    EmailRepository.Update(objEmail);
                                    EmailRepository.Commit();
                                }
                                else { EmailRepository.Remove(objEmail); EmailRepository.Commit(); }
                            }
                            foreach (Abphone objPhone in objCountAut.Abphone)
                            {
                                if (objPhone.ControlUpdate == true)
                                {
                                    if (objPhone.PhoneId == Guid.Empty || objPhone.PhoneId == null) { objPhone.PhoneId = Guid.NewGuid(); objPhone.AgencyId = null; objPhone.ContAuId = objCountAut.ContAutId; }
                                    PhoneRepository.Update(objPhone);
                                    PhoneRepository.Commit();
                                }
                                else { PhoneRepository.Remove(objPhone); PhoneRepository.Commit(); }
                            }
                            if (objCountAut.ControlUpdate == false)
                            {
                                objCountAut.Abemail = null;
                                objCountAut.Abphone = null;
                                ContAutRepository.Remove(objCountAut);
                                ContAutRepository.Commit();
                            }
                        }
                    }

                    foreach (Abemail objEmail in objAgency.Abemail)
                    {
                        if (objEmail.ControlUpdate == true)
                        {
                            if (objEmail.EmailId == Guid.Empty || objEmail.EmailId == null) { objEmail.EmailId = Guid.NewGuid(); objEmail.AgencyId = objAgency.AgencyId; objEmail.ContAuId = null; }
                            EmailRepository.Update(objEmail);
                            EmailRepository.Commit();
                        }
                        else { EmailRepository.Remove(objEmail); EmailRepository.Commit(); }
                    }

                    foreach (Abphone objPhone in objAgency.Abphone)
                    {
                        if (objPhone.ControlUpdate == true)
                        {
                            if (objPhone.PhoneId == Guid.Empty || objPhone.PhoneId == null) { objPhone.PhoneId = Guid.NewGuid(); objPhone.AgencyId = objAgency.AgencyId; objPhone.ContAuId = null; }
                            PhoneRepository.Update(objPhone);
                            PhoneRepository.Commit();
                        }
                        else { PhoneRepository.Remove(objPhone); PhoneRepository.Commit(); }
                    }

                    foreach (AbownerOfficer objOwnerOfficer in objAgency.AbownerOfficer)
                    {
                        if (objOwnerOfficer.ControlUpdate == true)
                        {
                            if (objOwnerOfficer.OwnerOfficerId == Guid.Empty || objOwnerOfficer.OwnerOfficerId == null) { objOwnerOfficer.OwnerOfficerId = Guid.NewGuid(); objOwnerOfficer.AgencyId = objAgency.AgencyId; }
                            OwnerOfficerRepository.Update(objOwnerOfficer);
                            OwnerOfficerRepository.Commit();
                        }
                        else { OwnerOfficerRepository.Remove(objOwnerOfficer); OwnerOfficerRepository.Commit(); }
                    }

                    Abdocument objDocument = new Abdocument();

                    objDocument.DocumentId = objAgency.AgencyDocumentId;
                    objDocument.DocumentAgencyId = objAgency.AgencyId;
                    foreach (Abdocument objDocument_Renew in objAgency.Abdocument)
                    {
                        objDocument.DocumentFile = objDocument_Renew.DocumentFile;
                    }

                    DocumentRepository.Update(objDocument);
                    DocumentRepository.Commit();
                }
                InsertStatusModel objInsertStatus = new InsertStatusModel
                {
                    AgencyRequestNumber = IdRequestNumber,
                    AgencyId = objAgency.AgencyId
                };
                return new ReturnMessage
                {
                    Status = true,
                    Message = JsonConvert.SerializeObject(objInsertStatus)
                };
            }
            catch (Exception ex)
            {
                InsertStatusModel objInsertStatus = new InsertStatusModel
                {
                    AgencyRequestNumber = IdRequestNumber
                };
                return new ReturnMessage
                {
                    Status = false,
                    Message = JsonConvert.SerializeObject(objInsertStatus),
                    HtmlSend = ex.ToString()
                };
            }
        }

        public ReturnMessage RemoveAgency(Abagency objAgency, Guid? UserId)
        {
            try
            {
                //string jsonLog = JsonConvert.SerializeObject(objAgency);

                List<Abcarrier> objAbcarrier = objAgency.Abcarrier.ToList();
                foreach (Abcarrier objCarrier in objAbcarrier)
                {
                    CarrierRepository.Remove(objCarrier); CarrierRepository.Commit();
                }

                List<AbcontAut> objAbcontAut = objAgency.AbcontAut.ToList();
                foreach (AbcontAut objCountAut in objAbcontAut)
                {                    
                    List<Abemail> objCountAutAbemail = objCountAut.Abemail.ToList();
                    foreach (Abemail objEmail in objCountAutAbemail)
                    {                            
                        EmailRepository.Remove(objEmail); EmailRepository.Commit();
                    }
                    List<Abphone> objCountAutAbphone = objCountAut.Abphone.ToList();
                    foreach (Abphone objPhone in objCountAutAbphone)
                    {
                        PhoneRepository.Remove(objPhone); PhoneRepository.Commit();
                    }
                    
                    ContAutRepository.Remove(objCountAut);
                    ContAutRepository.Commit();                    
                }

                List<Abemail> objAbemail = objAgency.Abemail.ToList();
                foreach (Abemail objEmail in objAbemail)
                {
                    EmailRepository.Remove(objEmail); EmailRepository.Commit();
                }
                List<Abphone> objAbphone = objAgency.Abphone.ToList();
                foreach (Abphone objPhone in objAbphone)
                {
                    PhoneRepository.Remove(objPhone); PhoneRepository.Commit();
                }
                List<AbownerOfficer> objAbownerOfficer = objAgency.AbownerOfficer.ToList();
                foreach (AbownerOfficer objOwnerOfficer in objAbownerOfficer)
                {
                    OwnerOfficerRepository.Remove(objOwnerOfficer); OwnerOfficerRepository.Commit();
                }

                Abdocument matchDocument = DocumentRepository.GetDocumentId(objAgency.AgencyDocumentId).FirstOrDefault();
                if (matchDocument != null)
                {
                    Abdocument objDocument = new Abdocument();
                    objDocument.DocumentId = matchDocument.DocumentId;
                    objDocument.DocumentAgencyId = matchDocument.DocumentAgencyId;

                    DocumentRepository.Remove(objDocument.DocumentId);
                    DocumentRepository.Commit();
                }

                List<AbstatusChangeSet> StatusChangeSet = GetStatusChangeSetId(objAgency.AgencyId);
                foreach (AbstatusChangeSet objStatusChangeSet in StatusChangeSet)
                {
                    StatusChangeSetRepository.Remove(objStatusChangeSet);
                    StatusChangeSetRepository.Commit();
                }

                List<AbagencyProductWritten> RemoveProductWritten = ProductWrittenRepository.GetProductWrittenAgency(objAgency.AgencyId).ToList();
                foreach (AbagencyProductWritten objProductWritten in RemoveProductWritten)
                {
                    ProductWrittenRepository.Remove(objProductWritten.ProductWrittenId); ProductWrittenRepository.Commit();
                }

                List<AbagencyMigrate> objAbagencyMigrate = objAgency.AbagencyMigrate.ToList();
                foreach (AbagencyMigrate objMigrate in objAbagencyMigrate)
                {
                    AgencyMigrateRepository.Remove(objMigrate); AgencyMigrateRepository.Commit();
                }

                AgencyRepository.Remove(objAgency.AgencyId);
                AgencyRepository.Commit();

                Ablog objLogs = new Ablog {
                    LogId = Guid.NewGuid(),
                    DateTime = DateTime.Now,
                    UserIdTouch = UserId,
                    ContentLog = null
                };

                LogsRepository.Insert(objLogs);
                LogsRepository.Commit();

                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Success",
                    Ex = null
                };
                return messageError;
            }
            catch (Exception ex)
            {
                var ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = false,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }
        }
    }
}