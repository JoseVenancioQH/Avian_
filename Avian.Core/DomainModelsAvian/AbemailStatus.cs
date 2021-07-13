using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbemailStatus
    {
        public Guid EmailStatusId { get; set; }
        public Guid? StatusCatlogsId { get; set; }
        public string EmailTo { get; set; }
        public string EmailCc { get; set; }
        public int? TypeSend { get; set; }
        public bool? Status { get; set; }

        public virtual Abcatlogs StatusCatlogs { get; set; }
    }
}
