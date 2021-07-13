using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Data;
using System.Text;
using System.Threading;
using System.Configuration;
using System.Net.Http;
using System.Diagnostics;
using System.Globalization;
using Newtonsoft.Json;
using Avian.Core.DomainModelsAvian;
using System.Text.RegularExpressions;
using System.Net.Mail;

namespace Avian.Api.Helpers.EmailSender
{
    public class EmailStatus
    {


        public bool SendStatus(string HtmlSend, string Subject, List<string> EmailToArg, List<string> EmailCcArg)
        {
            try
            {
                List<string> EmailTo = new List<string>
                {
                    //"psanchez@gcib.net",
                    //"vdominguez@gcib.net"
                    //"rsolorzano@ctcadjusters.com",
                    //"esalcedo@gcib.net",
                    "jquintero@gcib.net"
                };

                if (EmailToArg.Count > 0)
                {
                    foreach (string element in EmailToArg)
                    {
                        try
                        {
                            MailAddress m = new MailAddress(element);
                            EmailTo.Add(element);
                        }
                        catch (FormatException e)
                        {
                            var msse = e.Message;
                        }
                    }
                }

                List<string> EmailCc = new List<string>
                {
                    //"jst@ghins.com",
                    //"ssahota@gcib.net",
                    //"esalcedo@gcib.net",
                    //"egaytan@gcib.net"
                };

                if (EmailCcArg.Count > 0)
                {
                    foreach (string element in EmailCcArg)
                    {
                        try
                        {
                            MailAddress m = new MailAddress(element);
                            EmailCc.Add(element);
                        }
                        catch (FormatException e)
                        {
                            var msse = e.Message;
                        }
                    }
                }

                try
                {
                    List<string> ListAttachment = new List<String>() { };

                    string subject = Subject;
                    string body = HtmlSend;

                    List<string> Attachment = ListAttachment;
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