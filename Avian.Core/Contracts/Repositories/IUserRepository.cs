using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Core.Contracts.Repositories{
    public interface IUserRepository : IGenericRepository<Abuser>
    {
        IEnumerable<Abuser> GetUser(string username, string password);
        IEnumerable<Abuser> GetUserAll();
        IEnumerable<Abuser> GetUserEmpty(string cad);        
    }
    public interface IProfileRepository : IGenericRepository<Abprofile>
    {        
        IEnumerable<Abprofile> GetProfile();
    }
    public interface IProfileUserRepository : IGenericRepository<AbprofileUser>
    {
        //IEnumerable<AbprofileUser> GetProfile();
    }
    public interface IPermissionsRepository : IGenericRepository<Abpermissions>
    {
        
        IEnumerable<Abpermissions> GetPermissionsProfileId(Guid? ProfileId);
    }
}
