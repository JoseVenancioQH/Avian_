using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbcatlogsProfile
    {
        public Guid CatlogProfileId { get; set; }
        public Guid? CatlogsIdProfile { get; set; }
        public Guid? CatlogsIdPermissions { get; set; }

        public virtual Abcatlogs CatlogsIdPermissionsNavigation { get; set; }
        public virtual Abcatlogs CatlogsIdProfileNavigation { get; set; }
    }
}
