using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abemail
    {
        public Guid EmailId { get; set; }
        public DateTime? DateTimeCreate { get; set; }
        public DateTime? DateTimeModify { get; set; }
        public Guid? AgencyId { get; set; }
        public Guid? ContAuId { get; set; }
        public string Email { get; set; }
        public bool? ControlUpdate { get; set; }
        public DateTime? DateTimeUpdate { get; set; }

        public virtual Abagency Agency { get; set; }
        public virtual AbcontAut ContAu { get; set; }
    }
}
