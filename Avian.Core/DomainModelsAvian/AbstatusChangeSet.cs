using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbstatusChangeSet
    {
        public Guid StatusChangeSetId { get; set; }
        public Guid? AgencyId { get; set; }
        public Guid? EmailStatusId { get; set; }
        public DateTime? DateTimeChangeSet { get; set; }
        public string MailContent { get; set; }

        public virtual Abagency Agency { get; set; }
    }
}
