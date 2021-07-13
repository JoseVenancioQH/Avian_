using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abprofile
    {
        public Abprofile()
        {
            Abpermissions = new HashSet<Abpermissions>();
        }

        public Guid ProfileId { get; set; }
        public string ProfileName { get; set; }
        public Guid? ProfileUserId { get; set; }
        public Guid? CatlogsId { get; set; }
        public bool? ControlUpdate { get; set; }

        public virtual Abcatlogs Catlogs { get; set; }
        public virtual AbprofileUser ProfileUser { get; set; }
        public virtual ICollection<Abpermissions> Abpermissions { get; set; }
    }
}
