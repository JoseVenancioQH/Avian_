using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abstate
    {
        public Abstate()
        {
            Abagency = new HashSet<Abagency>();
        }

        public Guid StateId { get; set; }
        public string StateName { get; set; }
        public string StatePrefix { get; set; }

        public virtual ICollection<Abagency> Abagency { get; set; }
    }
}
