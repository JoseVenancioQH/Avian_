using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbownerOfficer
    {
        public Guid OwnerOfficerId { get; set; }
        public Guid? AgencyId { get; set; }
        public Guid? AgencyTittle { get; set; }
        public DateTime? DateTimeCreate { get; set; }
        public DateTime? DateTimeModify { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string TaxId { get; set; }
        public DateTime? Dob { get; set; }
        public bool? ControlUpdate { get; set; }
        public DateTime? DateTimeUpdate { get; set; }

        public virtual Abagency Agency { get; set; }
    }
}
