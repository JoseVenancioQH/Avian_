using Microsoft.Exchange.WebServices.Data;
using System;
using System.IO;
using System.Web;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EmailSender
{
    public class EmailSender
    {
        public bool SendEmail(string body, List<string> emails, List<string> emailsCC, string subject, List<string> Attachment)
        {
            try
            {
                ExchangeService service = new ExchangeService(ExchangeVersion.Exchange2013_SP1);
                //TODO: Create Account For The Human Resources APP
                service.Credentials = new WebCredentials("notification@emailtest.net", "123%Abcd");
                service.UseDefaultCredentials = false;
                service.AutodiscoverUrl("notification@emailtest.net", RedirectionUrlValidationCallback);
                
                EmailMessage email = new EmailMessage(service);

                foreach (var strEmail in emails)
                {
                    email.ToRecipients.Add(strEmail);
                }
                foreach (var strEmail in emailsCC)
                {
                    email.CcRecipients.Add(strEmail);
                }                
                email.Subject = subject;
                foreach (var itemAttachment in Attachment)
                {
                    email.Attachments.AddFileAttachment(itemAttachment);
                }
                email.Body = new MessageBody(body);
                email.Send();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: "+ ex);
            }
            return true;
        }        

        private static bool RedirectionUrlValidationCallback(string redirectionUrl)
        {
            // The default for the validation callback is to reject the URL.
            bool result = false;

            Uri redirectionUri = new Uri(redirectionUrl);

            // Validate the contents of the redirection URL. In this simple validation
            // callback, the redirection URL is considered valid if it is using HTTPS
            // to encrypt the authentication credentials. 
            if (redirectionUri.Scheme == "https")
            {
                result = true;
            }
            return result;
        }
    }
}
