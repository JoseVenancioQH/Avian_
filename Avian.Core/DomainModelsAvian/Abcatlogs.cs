using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModelsAvian
{
    public partial class Abcatlogs
    {
        public Abcatlogs()
        {
            AbagencyAgencyStatusNavigation = new HashSet<Abagency>();
            AbagencyAgencyTypeNavigation = new HashSet<Abagency>();
            AbagencyProductWritten = new HashSet<AbagencyProductWritten>();
            AbcatlogsProfileCatlogsIdPermissionsNavigation = new HashSet<AbcatlogsProfile>();
            AbcatlogsProfileCatlogsIdProfileNavigation = new HashSet<AbcatlogsProfile>();
            AbemailStatus = new HashSet<AbemailStatus>();
            Abpermissions = new HashSet<Abpermissions>();
            Abprofile = new HashSet<Abprofile>();
        }

        public Guid CatlogsId { get; set; }
        public string CatlogsType { get; set; }
        public string CatlogsName { get; set; }
        public string CatlogsPrefix { get; set; }
        public bool? Show { get; set; }

        public virtual ICollection<Abagency> AbagencyAgencyStatusNavigation { get; set; }
        public virtual ICollection<Abagency> AbagencyAgencyTypeNavigation { get; set; }
        public virtual ICollection<AbagencyProductWritten> AbagencyProductWritten { get; set; }
        public virtual ICollection<AbcatlogsProfile> AbcatlogsProfileCatlogsIdPermissionsNavigation { get; set; }
        public virtual ICollection<AbcatlogsProfile> AbcatlogsProfileCatlogsIdProfileNavigation { get; set; }
        public virtual ICollection<AbemailStatus> AbemailStatus { get; set; }
        public virtual ICollection<Abpermissions> Abpermissions { get; set; }
        public virtual ICollection<Abprofile> Abprofile { get; set; }
    }
}
