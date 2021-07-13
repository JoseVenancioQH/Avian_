using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abuser
    {
        public Abuser()
        {
            AbagencyUserIdCreateNavigation = new HashSet<Abagency>();
            AbagencyUserIdModifyNavigation = new HashSet<Abagency>();
            AbprofileUser = new HashSet<AbprofileUser>();
        }

        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public bool? SendEmailDraft { get; set; }
        public bool? ControlUpdate { get; set; }
        public bool? Status { get; set; }

        public virtual ICollection<Abagency> AbagencyUserIdCreateNavigation { get; set; }
        public virtual ICollection<Abagency> AbagencyUserIdModifyNavigation { get; set; }
        public virtual ICollection<AbprofileUser> AbprofileUser { get; set; }
    }
}
