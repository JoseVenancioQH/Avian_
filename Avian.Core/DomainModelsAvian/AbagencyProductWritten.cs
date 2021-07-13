using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbagencyProductWritten
    {
        public Guid ProductWrittenId { get; set; }
        public Guid ProductWrittenAgencyId { get; set; }
        public Guid ProductWrittenCatlogsId { get; set; }
        public bool? ControlUpdate { get; set; }
        public DateTime? DateTimeUpdate { get; set; }
        public string ProductWrittenCatlogsName { get; set; }
        public string ProductWrittenAgencyOther { get; set; }

        public virtual Abagency ProductWrittenAgency { get; set; }
        public virtual Abcatlogs ProductWrittenCatlogs { get; set; }
    }
}
