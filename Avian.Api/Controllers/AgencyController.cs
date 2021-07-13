using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Avian.Core.DomainModelsAvian;
using Avian.Core.BusinessLogic;
using System.Configuration;
using RotativaCore;
using Newtonsoft.Json.Converters;
using System.Web;
using Avian.Api.Helpers.EmailSender;
using Microsoft.AspNetCore.Hosting;
using Avian.Core.DomainModels;
using Avian.Api.Helpers;
using System.Text;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http.Headers;
using Avian.Data.Repositories;

namespace Avian.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgencyController : ControllerBase
    {
        private readonly AgencyBusiness AgencyBusiness;
        private readonly CatlogsGetBusiness CatlogsGetBusiness;
        private readonly StatesGetBusiness StatesGetBusiness;
        private readonly IHostingEnvironment _env;
        private readonly IRazorViewToStringRenderer _renderer;
        

        public AgencyController(
            AgencyBusiness AgencyBusiness,
            CatlogsGetBusiness CatlogsGetBusiness,
            StatesGetBusiness StatesGetBusiness,
            IHostingEnvironment env, 
            IRazorViewToStringRenderer renderer
        )
        {
            this.AgencyBusiness = AgencyBusiness;
            this.CatlogsGetBusiness = CatlogsGetBusiness;
            this.StatesGetBusiness = StatesGetBusiness;
            _env = env;
            _renderer = renderer;
        }       

        
        public class TokenModel
        {
            public Guid AgencyId { get; set; }
            public string Token { get; set; }
        }

        public class FollowModel
        {
            public string TypeSeccion { get; set; }
            public string Follow { get; set; }
        }

        private string UrlEditAgency = "http://avian-bap.azurewebsites.net/";
        //private string UrlEditAgency = "localhost:4200";

        private ReturnMessage SendEmailDocuments(Abagency objAgency, AbemailStatus EmailStatus)
        {
            string ex_;
            string footer = "";
            List<string> ListDocumentUrl = new List<string> { };
            List<string> ListDocumentError = new List<string> { };
            int countError = 0;

            string HtmlSend = String.Empty;
            string Subject = String.Empty;
            string Body = String.Empty;
            try
            {
                countError++;
                //string footer = "--footer-center \" LU 07/20/16  Page: [page]/[toPage]\"" + " --footer-line --footer-font-size \"14\" --footer-spacing 12 --footer-font-name \"calibri light\"";
                if (!Directory.Exists(Path.Combine(_env.ContentRootPath, "DocumentGenerate", "Document", objAgency.AgencyRequestNumber.ToString())))
                {
                    Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, "DocumentGenerate", "Document", objAgency.AgencyRequestNumber.ToString()));
                }
                countError++;
                List<string> ListDocumentGenerate = new List<string>{
                    "BrokerElectronicFundsAgreement",
                    "ElectronicTransactionAgreement",
                    "FinanceBFAgreementAvian",
                    "RetailBrokerApplicationMaster"
                };
                countError++;
                List<string> ListProductWritte = new List<string> { };
                string StringOther = string.Empty;
                foreach (AbagencyProductWritten elementList in objAgency.AbagencyProductWritten)
                {
                    string varOther = CatlogsGetBusiness.CatlogsGet().Where(a => a.CatlogsId == elementList.ProductWrittenCatlogsId).FirstOrDefault().CatlogsName;
                    ListProductWritte.Add(varOther);
                    if (varOther == "Other") { StringOther = elementList.ProductWrittenAgencyOther; }
                }
                countError++;
                objDocumentAgency objAgencyRotativa = new objDocumentAgency {
                    objAgency = objAgency,
                    stringState = StatesGetBusiness.StatesGetId(objAgency.AgencyState).StateName,
                    TypeAgency = CatlogsGetBusiness.CatlogsGet().Where(a=>a.CatlogsId==objAgency.AgencyType).FirstOrDefault().CatlogsName,
                    TypeWritten = ListProductWritte,
                    TypeWrittenOther = StringOther
                };
                countError++;
                foreach (string elementList in ListDocumentGenerate)
                {
                    ListDocumentError.Add(elementList);
                    countError++;
                    footer = "--footer-center \"Page: [page]/[toPage]\"" + " --footer-line --footer-font-size \"10\" --footer-spacing 2 --footer-font-name \"calibri light\"";
                    if (elementList == "ElectronicTransactionAgreement") { footer = "--footer-center \"Page: [page]/[toPage]\"" + " --footer-line --footer-font-size \"10\" --footer-spacing 2 --footer-font-name \"calibri light\""; }
                    //if (elementList == "ElectronicTransactionAgreement") { footer = "--footer-center \" LU 07/20/16  Page: [page]/[toPage]\"" + " --footer-line --footer-font-size \"14\" --footer-spacing 12 --footer-font-name \"calibri light\""; }
                    countError++;
                    //ListDocumentError.Add(JsonConvert.SerializeObject(objAgencyRotativa));
                    ViewAsPdf pdf = new ViewAsPdf("Document/Base/" + elementList + "/Index", objAgencyRotativa)
                    {
                        FileName = elementList + ".pdf",
                        //PageMargins = new RotativaCore.Options.Margins(25, 10, 10, 10),
                        CustomSwitches = footer
                        //CustomSwitches = "--header-html " + _headerUrl + " --header-spacing 0 " + "--footer-html " + _footerUrl + " --footer-spacing 0"
                        //CustomSwitches = "--header-html " + _headerUrl + " --header-spacing 13 "+"--footer-html "+_footerUrl+" --footer-spacing 0",
                        //PageMargins = new Margins(50, 10, 12, 10)
                    };
                    countError++;
                    pdf.WkhtmlPath = Path.Combine(_env.ContentRootPath, "Rotativa", "Windows");
                    byte[] pdfData = pdf.BuildFile(ControllerContext);
                    string fullPath = Path.Combine(_env.ContentRootPath, "DocumentGenerate", "Document", objAgency.AgencyRequestNumber.ToString(), pdf.FileName);
                    countError++;
                    using (var fileStream = new FileStream(fullPath, FileMode.Create, FileAccess.Write))
                    {
                        fileStream.Write(pdfData, 0, pdfData.Length);
                    }
                    countError++;
                    ListDocumentUrl.Add(fullPath);
                }
                //////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////Email Send////////////////////////////////////////////////////
                Subject = String.Concat("Your producer application has been ", EmailStatus.StatusCatlogs.CatlogsName);
                Body = String.Concat(
                        "Thank you for applying to become a producer, your application has been approved. Please find attached application documentation",
                        "<br/><br/>Regards,<br/><br/><img src=\"data:image/jpeg;base64,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\"><br/>",
                        "<br/><a href=\"mailto:marketing@avianpremiumfinance.com\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@avianpremiumfinance.com</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(818) 333-5900</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(818) 333-5901</a></span>"
                     );
                List<string> cadEmailTo = new List<string>() { };
                List<string> cadEmailCc = new List<string>() { };
                foreach (Abemail element in objAgency.Abemail)
                {
                    cadEmailTo.Add(element.Email);
                }
                List<string> EmailToStatus = EmailStatus.EmailTo.Split(';').ToList();
                foreach (string element in EmailToStatus)
                {
                    cadEmailTo.Add(element);
                }
                List<string> EmailCcStatus = EmailStatus.EmailCc.Split(';').ToList();
                foreach (string element in EmailCcStatus)
                {
                    cadEmailCc.Add(element);
                }

                EmailDocument Email = new EmailDocument();
                bool EmailSendStatus = Email.SendDocment(ListDocumentUrl, Body, Subject, cadEmailTo, cadEmailCc);
                if (EmailSendStatus == false)
                {
                    //cambiar status de DocumentSend Agency false.
                    //Crear alert, not send mail
                }
                ////////////////////////////Email Send////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////

                //return Json(new { isSuccessful = true }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error - "+ countError.ToString(),
                    Ex = ex_,
                    ListDocument=ListDocumentError
                };
                return messageError;
            }
            ReturnMessage messageSucces = new ReturnMessage()
            {
                Status = true,
                Message = "Action Success",
                ListDocument = ListDocumentUrl
            };
            return messageSucces;
        }

        private ReturnMessage SendEmailDraft(Abagency objAgency, AbemailStatus EmailStatus, string Token = "")
        {
            string ex_;
            string HtmlSend = String.Empty;
            string Subject = String.Empty;

            try
            {
                Subject = String.Concat("Your Become a Producer request has been received as ", EmailStatus.StatusCatlogs.CatlogsName);
                /*HtmlSend = String.Concat("<span style=\"font-size:12px;\"><b>Thank you for applying to become a producer for Global Century Insurance Brokers, Inc., we appreciate your business.</b>.<br/><br/><br/>",
                           "<b>Your request Reference Number :&nbsp; ",*/
                HtmlSend = String.Concat("<span style='font-size:12px;'><b>Thank you for applying to become a producer for Avian Premium Finance, we appreciate your business</b>.<br/>",
                           "<b>In order to continue with your current application, please</b>: ",
                           "<b><a href=\"",
                           UrlEditAgency,
                           "/agency-form?AgencyId=",
                           objAgency.AgencyId,
                           "&Token=",
                           Token,
                           "\">Click here</a></b>",
                           "<br/>Your request Reference Number: ",
                           objAgency.AgencyRequestNumber,
                           " has been ",
                           EmailStatus.StatusCatlogs.CatlogsName
                           );

                if (!String.IsNullOrEmpty(objAgency.AgencyRemarks))
                {
                    HtmlSend += String.Concat("<br/><b>", objAgency.AgencyRemarks, "</b>");
                }
                HtmlSend += string.Concat("<br/>Regards,<br/><br/><img src=\"data:image/jpeg;base64,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\"><br/>");
                HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@avianpremiumfinance.com\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@avianpremiumfinance.com</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(818) 333-5900</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(818) 333-5901</a></span>");
                //HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");
                //HtmlSend += string.Concat("<b>LICENSE# 0E52042</b><br/><b>Marketing</b><br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");

                //////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////Email Send////////////////////////////////////////////////////  
                List<string> cadEmailTo = new List<string>() { };
                List<string> cadEmailCc = new List<string>() { };
                foreach (Abemail element in objAgency.Abemail)
                {
                    cadEmailTo.Add(element.Email);
                }
                List<string> EmailToStatus = EmailStatus.EmailTo.Split(';').ToList();
                foreach (string element in EmailToStatus)
                {
                    cadEmailTo.Add(element);
                }
                List<string> EmailCcStatus = EmailStatus.EmailCc.Split(';').ToList();
                foreach (string element in EmailCcStatus)
                {
                    cadEmailCc.Add(element);
                }

                //var model = new HelloWorldViewModel("https://www.google.com");
                //const string view = "/Views/Agency/Email/Index";
                //var htmlBody = _renderer.RenderViewToStringAsync($"{view}.cshtml", model);

                EmailStatus Email = new EmailStatus();
                bool EmailSendStatus = Email.SendStatus(HtmlSend/*htmlBody.Result*/, Subject, cadEmailTo, cadEmailCc);
                if (EmailSendStatus == false)
                {
                    //cambiar status de DocumentSend Agency false.
                    //Crear alert, not send mail
                }
                ////////////////////////////Email Send////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////

                //return Json(new { isSuccessful = true }, JsonRequestBehavior.AllowGet);
                ModelRedirect ModelRedirect = new ModelRedirect() { Router = "/agency-form", AgencyId = objAgency.AgencyId.ToString(), Token = Token };
                ReturnMessage messageSucces = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Success",
                    ModelRedirect = ModelRedirect
                };
                return messageSucces;
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = false,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }           
            
        }

        private ReturnMessage SendEmailFollow(Abagency objAgency, List<FollowModel> objFollow, AbemailStatus EmailStatus, string Token = "")
        {
            string ex_;
            string HtmlSend = String.Empty;
            string Subject = String.Empty;

            try
            {
                string messageSection = String.Empty;
                foreach (FollowModel element in objFollow)
                {
                     messageSection = String.Concat(
                        messageSection, "</br>",
                        element.TypeSeccion, "</br>",
                        element.Follow,"</br></br>"
                    );
                }
                

                Subject = String.Concat("Your Become a Producer request has been received as ", EmailStatus.StatusCatlogs.CatlogsName);
                /*HtmlSend = String.Concat("<span style=\"font-size:12px;\"><b>Thank you for applying to become a producer for Global Century Insurance Brokers, Inc., we appreciate your business.</b>.<br/><br/><br/>",
                           "<b>Your request Reference Number :&nbsp; ",*/
                HtmlSend = String.Concat("<span style='font-size:12px;'><b>Thank you for applying to become a producer for Avian Premium Finance, we appreciate your business</b>.<br/>",
                           "<b>In order to continue with your current application, please</b>: ",
                           "<b><a href=\"",
                           UrlEditAgency,
                           "/agency-form?AgencyId=",
                           objAgency.AgencyId,
                           "&Token=",
                           Token,
                           "\">Click here</a></b>",
                           "<br/>Your request Reference Number: ",
                           objAgency.AgencyRequestNumber,
                           " has been ",
                           EmailStatus.StatusCatlogs.CatlogsName,
                           "</br></br>",
                           "Follow: ",
                           messageSection
                           );

                if (!String.IsNullOrEmpty(objAgency.AgencyRemarks))
                {
                    HtmlSend += String.Concat("<br/><b>", objAgency.AgencyRemarks, "</b>");
                }
                HtmlSend += string.Concat("<br/>Regards,<br/><br/><img src=\"data:image/jpeg;base64,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\"><br/>");
                HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@avianpremiumfinance.com\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@avianpremiumfinance.com</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(818) 333-5900</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(818) 333-5901</a></span>");
                //HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");
                //HtmlSend += string.Concat("<b>LICENSE# 0E52042</b><br/><b>Marketing</b><br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");

                //////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////Email Send////////////////////////////////////////////////////  
                List<string> cadEmailTo = new List<string>() { };
                List<string> cadEmailCc = new List<string>() { };
                foreach (Abemail element in objAgency.Abemail)
                {
                    cadEmailTo.Add(element.Email);
                }
                List<string> EmailToStatus = EmailStatus.EmailTo.Split(';').ToList();
                foreach (string element in EmailToStatus)
                {
                    cadEmailTo.Add(element);
                }
                List<string> EmailCcStatus = EmailStatus.EmailCc.Split(';').ToList();
                foreach (string element in EmailCcStatus)
                {
                    cadEmailCc.Add(element);
                }

                //var model = new HelloWorldViewModel("https://www.google.com");
                //const string view = "/Views/Agency/Email/Index";
                //var htmlBody = _renderer.RenderViewToStringAsync($"{view}.cshtml", model);

                EmailStatus Email = new EmailStatus();
                bool EmailSendStatus = Email.SendStatus(HtmlSend/*htmlBody.Result*/, Subject, cadEmailTo, cadEmailCc);
                if (EmailSendStatus == false)
                {
                    //cambiar status de DocumentSend Agency false.
                    //Crear alert, not send mail
                }
                ////////////////////////////Email Send////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////

                //return Json(new { isSuccessful = true }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }
            ReturnMessage messageSucces = new ReturnMessage()
            {
                Status = true,
                Message = "Action Success",
            };
            return messageSucces;
        }

        private ReturnMessage SendEmailNew(Abagency objAgency, AbemailStatus EmailStatus, string Token = "")
        {
            string ex_;
            string HtmlSend = String.Empty;
            string Subject = String.Empty;
            bool EmailSendStatus;
            try
            {
                Subject = String.Concat("Become a Producer request");
                HtmlSend = String.Concat("<span style='font-size:12px;'><b>Please find attached the submitted application</b>.<br/><br/><br/>",
                           "<b>You also have to log into the Become a Producer application in order for you to work on this request</b>: ",
                           objAgency.AgencyRequestNumber
                /*HtmlSend = String.Concat("<span style='font-size:12px;'><b>Thank you for submitting your become  a producer application, we appreciate your business</b>.<br/>",
                           "<b>Shortly one of our representative will be contacting you for further processing. Your request number is</b>: ",
                           objAgency.AgencyRequestNumber*/);
                HtmlSend += string.Concat("<br/><br/><br/>Regards,<br/><br/><img src=\"data:image/jpeg; base64,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\"><br/>");
                HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@avianpremiumfinance.com\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@avianpremiumfinance.com</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(818) 333-5900</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(818) 333-5901</a></span>");
                //HtmlSend += string.Concat("<br/><a href=\"mailto:service@avianpremiumfinance.com\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>service@avianpremiumfinance.com</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(818) 333-5900</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(818) 333-5901</a></span>");
                //HtmlSend += string.Concat("<b>LICENSE# 0E52042</b><br/><b>Marketing</b><br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");

                //////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////Email Send////////////////////////////////////////////////////
                List<string> cadEmailTo = new List<string>() { };
                List<string> cadEmailCc = new List<string>() { };
                List<string> EmailToStatus = EmailStatus.EmailTo.Split(';').ToList();
                foreach (string element in EmailToStatus)
                {
                    cadEmailTo.Add(element);
                }
                List<string> EmailCcStatus = EmailStatus.EmailCc.Split(';').ToList();
                foreach (string element in EmailCcStatus)
                {
                    cadEmailCc.Add(element);
                }
                EmailStatus EmailUnderwrite = new EmailStatus();
                EmailSendStatus = EmailUnderwrite.SendStatus(HtmlSend, Subject, cadEmailTo, cadEmailCc);
                if (EmailSendStatus == false)
                {
                    //cambiar status de DocumentSend Agency false.
                    //Crear alert, not send mail
                }

                Subject = String.Concat("Become a Producer request");
                HtmlSend = String.Concat("<span style='font-size:12px;'><b>Thank you for submitting your become  a producer application, we appreciate your business</b>.<br/>",
                            "<b>Shortly one of our representative will be contacting you for further processing. Your request number is</b>: ",
                            objAgency.AgencyRequestNumber);
                HtmlSend += string.Concat("<br/><br/>Regards,<br/><br/><img src=\"data:image/jpeg;base64,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\"><br/>");
                HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@avianpremiumfinance.com\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@avianpremiumfinance.com</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(818) 333-5900</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(818) 333-5901</a></span>");//HtmlSend += string.Concat("<br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");
                //HtmlSend += string.Concat("<b>LICENSE# 0E52042</b><br/><b>Marketing</b><br/><a href=\"mailto:marketing@emailtest.net\" onclick=\"return rcmail.command(\"compose\",\"marketing@emailtest.net\",this)\"><b>marketing@emailtest.net</b></a><br/><span style=\"color:black\"><b>TEL </b></span> <a >(925) 493-7525</a><br/><span style=\"color:black\"><b>FAX</b> </span><a>(925) 493-7526</a></span>");
                ////////////////////////////Email Send////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////////
                List<string> cadEmailTo_ = new List<string>() { };
                foreach (Abemail element in objAgency.Abemail)
                {
                    cadEmailTo_.Add(element.Email);
                }
                List<string> cadEmailCc_ = new List<string>() { };
                EmailStatus EmailBroker = new EmailStatus();
                EmailSendStatus = EmailBroker.SendStatus(HtmlSend, Subject, cadEmailTo_, cadEmailCc_);
                if (EmailSendStatus == false)
                {
                    //cambiar status de DocumentSend Agency false.
                    //Crear alert, not send mail
                }

                //return Json(new { isSuccessful = true }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }
            ReturnMessage messageSucces = new ReturnMessage()
            {
                Status = true,
                Message = "Action Success",
            };
            return messageSucces;
        }

        [HttpPost("GetToken")]
        public IEnumerable<Abagency> GetToken(TokenModel Model)
        {
            return (Guid.Empty != Model.AgencyId || String.Empty != Model.Token) ? AgencyBusiness.GetAgencyToken(Model.AgencyId, Model.Token) : null;
        }

        [HttpPost("EmailStatus")]
        public ReturnMessage EmailStatus(StatusEmailModel Model)
        {
            string ex_;
            try
            {
                AbemailStatus ObjEmailStatus = new AbemailStatus()
                {
                    EmailStatusId = Guid.Parse(Model.EmailStatusId.ToString()),
                    TypeSend = Model.TypeSend,
                    StatusCatlogsId = Model.StatusCatlogsId,
                    Status = Model.Status,
                    EmailTo = String.Join(';', Model.EmailTo),
                    EmailCc = String.Join(';', Model.EmailCc)
                };
                string Result = AgencyBusiness.SaveAgencyEmailStatus(ObjEmailStatus);
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = string.Concat("Action ", Result),
                    Ex = null
                };
                return messageError;
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }            
        }
        [HttpGet("ProgressDocument/{RequestNumber}")]
        public string[] ProgressDocument(string RequestNumber)
        {            
            string fullPath = Path.Combine(_env.ContentRootPath, "DocumentGenerate", "Document", RequestNumber);
            return (Directory.Exists(fullPath))?Directory.GetFiles(fullPath):null; 
        }
        // GET: api/Agency
        [HttpGet]
        public IEnumerable<BrokerInformationModel> Get()
        {
            //return new string[] { "Init", "Agency" };
            return AgencyBusiness.GetAgencyAll();
        }
        // GET: api/Agency/5
        [HttpGet("{Id}")]
        public IEnumerable<Abagency> Get(Guid Id)
        {
            return (Guid.Empty != Id) ? AgencyBusiness.GetAgency(Id) : null;
        }

        [HttpGet("GetStatusEmail")]
        public IEnumerable<StatusEmailModel> GetStatusEmail()
        {
            return AgencyBusiness.GetEmaiStatusAll();
        }
        // POST: api/Agency        
        [HttpPost("IEnumerableAgency")]
        public ActionResult IEnumerableAgency([FromBody] IEnumerable<Abagency> objAgency)
        {
            List<ReturnMessage> SaveAgency = new List<ReturnMessage> { };
            Guid GuidDraft = CatlogsGetBusiness.CatlogsGetName("Draft");
            Guid GuidNew = CatlogsGetBusiness.CatlogsGetName("New");
            Guid GuidAccepted = CatlogsGetBusiness.CatlogsGetName("Accepted");
            foreach (Abagency element in objAgency)
            {                    
                
                SaveAgency.Add(AgencyBusiness.SaveAgency(element));
                foreach (Abdocument elementDocument in element.Abdocument)
                {                   
                    UploadFileMigrate(elementDocument, "Resources");
                }
                if (element.AgencyStatus == GuidDraft)
                {
                    AbemailStatus EmailStatus = AgencyBusiness.GetEmaiStatus(GuidDraft);
                    var ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(element.AgencyId, EmailStatus.EmailStatusId, null);
                }
                if (element.AgencyStatus== GuidNew)
                {
                    AbemailStatus EmailStatus = AgencyBusiness.GetEmaiStatus(GuidDraft);
                    var ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(element.AgencyId, EmailStatus.EmailStatusId, null);
                    EmailStatus = AgencyBusiness.GetEmaiStatus(GuidNew);
                    ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(element.AgencyId, EmailStatus.EmailStatusId, null);                    
                }
                
                if (element.AgencyStatus== GuidAccepted)
                {                   
                    List<DocumentMigrationModel> ListGenerateDocument = new List<DocumentMigrationModel> { };
                    ListGenerateDocument.Add(new DocumentMigrationModel { FileNameDownload = "Retail Broker Application Master", FileNameUpload = "RetailBrokerApplicationMaster" });
                    ListGenerateDocument.Add(new DocumentMigrationModel { FileNameDownload = "Electronic Transaction Agreement", FileNameUpload = "ElectronicTransactionAgreement" });
                    ListGenerateDocument.Add(new DocumentMigrationModel { FileNameDownload = "Finance BF Agreement_Avian", FileNameUpload = "FinanceBFAgreementAvian" });
                    ListGenerateDocument.Add(new DocumentMigrationModel { FileNameDownload = "Broker Electronic Funds Agreement", FileNameUpload = "BrokerElectronicFundsAgreement" });

                    foreach (DocumentMigrationModel elementDocument in ListGenerateDocument)
                    {
                        foreach (AbagencyMigrate elementMigrate in element.AbagencyMigrate)
                        {
                            UploadFileMigrateDocument(
                                                        String.Concat(elementDocument.FileNameDownload, ".pdf"), 
                                                        String.Concat(elementDocument.FileNameUpload, ".pdf"), 
                                                        elementMigrate.AgencyRequestNumber.ToString(),
                                                        element.AgencyRequestNumber.ToString(),
                                                        "DocumentGenerate"
                                                        );
                        }
                    }
                    AbemailStatus EmailStatus = AgencyBusiness.GetEmaiStatus(GuidDraft);
                    var ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(element.AgencyId, EmailStatus.EmailStatusId, null);
                    EmailStatus = AgencyBusiness.GetEmaiStatus(GuidNew);
                    ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(element.AgencyId, EmailStatus.EmailStatusId, null);
                    EmailStatus = AgencyBusiness.GetEmaiStatus(GuidAccepted);
                    ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(element.AgencyId, EmailStatus.EmailStatusId, null);
                }        
            }    
            return Ok(SaveAgency);
        }

        private ReturnMessage UploadFile(MemoryStream file, string Base, string IdDocument, string Folder, string fileName)
        {
            string ex_;
            try
            {
                if (file != null)
                {
                    if (!Directory.Exists(Path.Combine(_env.ContentRootPath, Base, "Document")))
                    {
                        Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, Base, "Document"));
                    }
                    if (!Directory.Exists(Path.Combine(_env.ContentRootPath, Base, "Document", IdDocument.ToString())))
                    {
                        Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, Base, "Document", IdDocument.ToString()));
                    }
                    if (!Directory.Exists(Path.Combine(_env.ContentRootPath, Base, "Document", IdDocument.ToString(), Folder)))
                    {
                        Directory.CreateDirectory(Path.Combine(_env.ContentRootPath, Base, "Document", IdDocument.ToString(), Folder));
                    }
                    var folderName = Path.Combine(_env.ContentRootPath, Base, "Document", IdDocument.ToString(), Folder);
                    var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    ReturnMessage messageSucces_ = new ReturnMessage()
                    {
                        Status = true,
                        Message = "Action Success",
                    };
                    return messageSucces_;
                }
                ReturnMessage messageSucces = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Null",
                };
                return messageSucces;
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }
        }

        private MemoryStream CreateStream(string Url)
        {
            string ex_;
            try
            {
                WebClient webClient = new WebClient();
                webClient.Credentials = CredentialCache.DefaultNetworkCredentials;                
                byte[] data = webClient.DownloadData(Url);
                MemoryStream memoryStreamOfFile = new MemoryStream(data);                
                return memoryStreamOfFile;
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                return null;
            }
        }        

        private ReturnMessage UploadFileMigrate(Abdocument ABDocument, string Base)
        {
            string UrlDownload = @"http://avianpremiumfinance.com/bap/uploads/docs/";
            string ex_;            
            try
            {
                if (!String.IsNullOrEmpty(ABDocument.DocumentFile))
                {
                    DocumentModel objDocument = JsonConvert.DeserializeObject<DocumentModel>(ABDocument.DocumentFile);
                    foreach (string element in objDocument.PCLicense)
                    {
                        string UrlStream = Path.Combine(UrlDownload, element);
                        UploadFile(CreateStream(UrlStream), Base, ABDocument.DocumentId.ToString(), "PCLicense[]", element);
                    }
                    foreach (string element in objDocument.W9)
                    {
                        string UrlStream = Path.Combine(UrlDownload, element);
                        UploadFile(CreateStream(UrlStream), Base, ABDocument.DocumentId.ToString(), "W9[]", element);
                    }
                    foreach (string element in objDocument.CurrentEO)
                    {
                        string UrlStream = Path.Combine(UrlDownload, element);
                        UploadFile(CreateStream(UrlStream), Base, ABDocument.DocumentId.ToString(), "CurrentEO[]", element);
                    }
                }
                ReturnMessage messageSucces = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Success",
                };
                return messageSucces;
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }           
        }

        private ReturnMessage UploadFileMigrateDocument(string FileName, string FileNameUpload, string IdDownload, string IdUpload, string Base)
        {
            string UrlDownload = @"http://avianpremiumfinance.com/bap/uploads/docs/";
            string ex_;
            try
            {
                if (!String.IsNullOrEmpty(FileName))
                {                  
                    string UrlStream = Path.Combine(UrlDownload, IdDownload, FileName);
                    UploadFile(CreateStream(UrlStream), Base,  IdUpload, "", FileNameUpload);                    
                }
                ReturnMessage messageSucces = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Success",
                };
                return messageSucces;
            }
            catch (Exception ex)
            {
                ex_ = ex.Message + " - " + ex.Data;
                ReturnMessage messageError = new ReturnMessage()
                {
                    Status = true,
                    Message = "Action Error",
                    Ex = ex_
                };
                return messageError;
            }
        }

        // POST: api/Agency        
        [HttpPost]
        public ActionResult Post([FromBody] Abagency objAgency)
        {
            ReturnMessage ResultMessage = new ReturnMessage() { };
            string Token = string.Empty;
            OperationMessage SaveAgency = new OperationMessage { };
            AbemailStatus EmailStatus = AgencyBusiness.GetEmaiStatus(objAgency.AgencyStatus);
            if (EmailStatus != null)
            {
                bool ReturnStatusChangeSet = false;

                bool ResendStatus = (objAgency.ResendStatus != Guid.Empty && objAgency.ResendStatus != null);
                AbstatusChangeSet StatusChangeSet = AgencyBusiness.GetStatusChangeSet(objAgency.AgencyId, EmailStatus.EmailStatusId);
                objAgency.ResendStatus = Guid.Empty;
                if (StatusChangeSet == null || ResendStatus == true)
                {
                    switch (EmailStatus.TypeSend)
                    {
                        case 1:
                            Token = Guid.NewGuid().ToString().Replace("-", string.Empty);
                            objAgency.Token = Token;
                            SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
                            SaveAgency.Email = SendEmailNew(objAgency, EmailStatus);
                            ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(objAgency.AgencyId, EmailStatus.EmailStatusId, JsonConvert.SerializeObject(SaveAgency.Email));
                            break;
                        case 2:
                            objAgency.DocumentGenerateStatus = true;
                            SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
                            string pathDeleting = Path.Combine(_env.ContentRootPath, "DocumentGenerate", "Document", objAgency.AgencyRequestNumber.ToString());
                            if (ResendStatus == true) { if (Directory.Exists(pathDeleting)) { Directory.Delete(pathDeleting, true); } else { Directory.CreateDirectory(pathDeleting); } }
                            SaveAgency.Email = SendEmailDocuments(objAgency, EmailStatus);
                            ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(objAgency.AgencyId, EmailStatus.EmailStatusId, JsonConvert.SerializeObject(SaveAgency.Email));
                            break;
                        case 3:
                            Token = Guid.NewGuid().ToString().Replace("-", string.Empty);
                            objAgency.Token = Token;
                            SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
                            SaveAgency.Email = SendEmailDraft(objAgency, EmailStatus, Token);
                            ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(objAgency.AgencyId, EmailStatus.EmailStatusId, JsonConvert.SerializeObject(SaveAgency.Email));
                            break;
                        case 4:
                            //ResultMessage = ReSendEmailSatus(objAgency);
                            break;
                        case 5:
                            List<FollowModel> FollowStatus = new List<FollowModel> { };
                            if (objAgency.AgencyGeneralDataIsCorrect == false) { FollowStatus.Add(new FollowModel { TypeSeccion = "Section General Data", Follow = objAgency.AgencyGeneralDataIsCorrectData }); }
                            if (objAgency.AgencyOwnerOfficerisCorrect == false) { FollowStatus.Add(new FollowModel { TypeSeccion = "Section Owner Officer", Follow = objAgency.AgencyOwnerOfficerisCorrectData }); }
                            if (objAgency.AgencyTrustAccountIsCorrect == false) { FollowStatus.Add(new FollowModel { TypeSeccion = "Section Trust Account", Follow = objAgency.AgencyTrustAccountIsCorrectData }); }
                            if (objAgency.AgencyAuthorizedContcatIsCorrect == false) { FollowStatus.Add(new FollowModel { TypeSeccion = "Section Authorized Contcat", Follow = objAgency.AgencyAuthorizedContcatIsCorrectData }); }

                            SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
                            SaveAgency.Email = SendEmailFollow(objAgency, FollowStatus, EmailStatus, objAgency.Token);
                            ReturnStatusChangeSet = AgencyBusiness.InsertStatusChangeSet(objAgency.AgencyId, EmailStatus.EmailStatusId, JsonConvert.SerializeObject(SaveAgency.Email));
                            break;
                        default:
                            SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
                            //Console.WriteLine("Default case");
                            break;
                    }
                }
                else
                {
                    SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
                }
            }
            else
            {
                SaveAgency.Save = AgencyBusiness.SaveAgency(objAgency);
            }
            return Ok(SaveAgency);
        }
        // PUT: api/Agency/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
        // DELETE: api/ApiWithActions/5
        [HttpPost("Delete")]
        public ActionResult Delete(UserRemovedModel Model)
        {
            Abagency ObjRemove = AgencyBusiness.GetAgency(Guid.Parse(Model.AgencyId.ToString())).FirstOrDefault();
            //AgencyBusiness.RemoveAgency(ObjRemove);
            return Ok(AgencyBusiness.RemoveAgency(ObjRemove, Model.UserId));
        }


    }
}
