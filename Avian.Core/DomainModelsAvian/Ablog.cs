using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Ablog
    {
        public Guid LogId { get; set; }
        public DateTimeOffset? DateTime { get; set; }
        public string ContentLog { get; set; }
        public Guid? UserIdTouch { get; set; }
    }
}
