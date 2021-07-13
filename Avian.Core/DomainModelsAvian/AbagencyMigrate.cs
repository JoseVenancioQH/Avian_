using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbagencyMigrate
    {
        public Guid AgencyMigrateId { get; set; }
        public Guid? AgencyId { get; set; }
        public int? AgencyRequestNumber { get; set; }

        public virtual Abagency Agency { get; set; }
    }
}
