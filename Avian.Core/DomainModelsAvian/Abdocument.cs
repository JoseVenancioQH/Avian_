using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abdocument
    {
        public int DocumentId { get; set; }
        public string DocumentFile { get; set; }
        public Guid? DocumentAgencyId { get; set; }

        public virtual Abagency DocumentAgency { get; set; }
    }
}
