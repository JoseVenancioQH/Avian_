using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbprofileUser
    {
        public AbprofileUser()
        {
            Abprofile = new HashSet<Abprofile>();
        }

        public Guid ProfileUserId { get; set; }
        public Guid? UserId { get; set; }
        public Guid? ProfileId { get; set; }
        public bool? ControlUpdate { get; set; }

        public virtual Abuser User { get; set; }
        public virtual ICollection<Abprofile> Abprofile { get; set; }
    }
}
