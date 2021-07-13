using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbagencyCatlogs
    {
        public Guid AgencyCatlogsId { get; set; }
        public Guid? CatlogsId { get; set; }
        public Guid? AgencyId { get; set; }
    }
}
