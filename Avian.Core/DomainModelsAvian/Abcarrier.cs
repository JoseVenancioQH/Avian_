using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abcarrier
    {
        public Guid CarrierId { get; set; }
        public DateTime? DateTimeCreate { get; set; }
        public DateTime? DateTimeModify { get; set; }
        public Guid? AgencyId { get; set; }
        public string CarrierName { get; set; }
        public string AgentName { get; set; }
        public DateTime? AppointedSince { get; set; }
        public bool? ControlUpdate { get; set; }
        public DateTime? DateTimeUpdate { get; set; }

        public virtual Abagency Agency { get; set; }
    }
}
