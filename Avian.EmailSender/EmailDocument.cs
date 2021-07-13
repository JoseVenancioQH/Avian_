using System;
using System.Collections.Generic;
using System.IO;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Configuration;
using System.Net.Http;
using System.Diagnostics;
using System.Globalization;
using Newtonsoft.Json;

namespace EmailSender
{   
    public class EmailDocument
    {
        static void Main(string[] args)
        {
        }

        public bool SendDocment(List<string> ListDocumentUrl)
        {
            try
            {                
                List<string> txtFiles = ListDocumentUrl;                               

                List<string> EmailTo = new List<string>
                {                    
                    //"psanchez@gcib.net",
                    //"vdominguez@gcib.net"
                    //"rsolorzano@ctcadjusters.com"
                };

                List<string> EmailCc = new List<string>
                {
                    //"jst@ghins.com",
                    //"ssahota@gcib.net",
                    //"esalcedo@gcib.net",
                    "jquintero@gcib.net"                    
                };
                                
                try
                {
                    string subject = "Avian Document- " + System.DateTime.Now.ToString("g", DateTimeFormatInfo.InvariantInfo);
                    string body = "Avian Document - " + System.DateTime.Now.ToString("g", DateTimeFormatInfo.InvariantInfo);
                    List<string> Attachment = txtFiles;
                    EmailSender email = new EmailSender();                    

                    new Thread(() => { email.SendEmail(body, EmailTo, EmailCc, subject, Attachment); }).Start();
                    return true;   
                }
                catch (Exception e)
                {
                    var em = e.Message;
                    return false;
                }                
            }
            catch (Exception e)
            {
                var em = e.Message;
                return false;
            }
        }
    }
}
