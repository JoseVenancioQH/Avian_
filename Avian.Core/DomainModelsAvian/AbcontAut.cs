using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class AbcontAut
    {
        public AbcontAut()
        {
            Abemail = new HashSet<Abemail>();
            Abphone = new HashSet<Abphone>();
        }

        public Guid ContAutId { get; set; }
        public DateTime? DateTimeCreate { get; set; }
        public DateTime? DateTimeModify { get; set; }
        public Guid? AgencyId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public Guid? Title { get; set; }
        public bool? ControlUpdate { get; set; }
        public DateTime? DateTimeUpdate { get; set; }

        public virtual Abagency Agency { get; set; }
        public virtual ICollection<Abemail> Abemail { get; set; }
        public virtual ICollection<Abphone> Abphone { get; set; }
    }
}
