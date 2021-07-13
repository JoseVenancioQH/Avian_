using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using Avian.Core.DomainModels;
using Avian.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avian.Data.Repositories
{
    public class UserRepository : GenericRepository<Abuser>, IUserRepository
    {
        public UserRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }    
        public IEnumerable<Abuser> GetUser(string username, string password) {
            return Get(a => a.UserName == username && a.Password == password && a.Status==true, includes: UserAllIncludes());
        }
        public IEnumerable<Abuser> GetUserEmpty(string cad)
        {
            return Get(a => a.UserName == cad);
        }
        public IEnumerable<Abuser> GetUserAll()
        {
            return Get(includes: UserAllIncludes());
        }
        /*private string[] EmployeesIncludes() => new string[] { "EmployeeCompanies.Company" };*/        
        //private string[] UserAllIncludes() => new string[] { "AbprofileUser", "AbprofileUser.Abprofile", "AbprofileUser.Abprofile.Abpermissions", "AbprofileUser.Abprofile.Abpermissions.Catlogs" };

        private string[] UserAllIncludes() => new string[] { "AbprofileUser", "AbprofileUser.Abprofile", "AbprofileUser.Abprofile.Abpermissions",  "AbprofileUser.Abprofile.Catlogs", "AbprofileUser.Abprofile.Abpermissions.Catlogs" };
    }

    public class ProfileRepository : GenericRepository<Abprofile>, IProfileRepository
    {
        public ProfileRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        
        public IEnumerable<Abprofile> GetProfile()
        {
            return Get(includes: ProfileIncludes());
        }
        /*private string[] EmployeesIncludes() => new string[] { "EmployeeCompanies.Company" };*/
        private string[] ProfileIncludes() => new string[] { "Abpermissions", "Abpermissions.Catlogs" };
    }

    public class ProfileUserRepository : GenericRepository<AbprofileUser>, IProfileUserRepository
    {
        public ProfileUserRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }

        /*public IEnumerable<AbprofileUser> GetProfileUser()
        {
            return Get(includes: ProfileIncludes());
        }*/
        /*private string[] EmployeesIncludes() => new string[] { "EmployeeCompanies.Company" };*/
        //private string[] ProfileIncludes() => new string[] { "Abpermissions", "Abpermissions.Catlogs" };
    }
    public class PermissionsRepository : GenericRepository<Abpermissions>, IPermissionsRepository
    {
        public PermissionsRepository(AvianBAPContext dbContext) : base(dbContext)
        {
        }
        public IEnumerable<Abpermissions> GetPermissionsProfileId(Guid? id)
        {
            return Get(a=>a.ProfileId==id);
        }
    }
}
