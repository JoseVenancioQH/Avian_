using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abpermissions
    {
        public Guid PermissionsId { get; set; }
        public Guid? ProfileId { get; set; }
        public Guid? CatlogsId { get; set; }
        public bool? ControlUpdate { get; set; }

        public virtual Abcatlogs Catlogs { get; set; }
        public virtual Abprofile Profile { get; set; }
    }
}
