using System;
using NETCore.Encrypt;
using System.Text;
using System.IO;
using System.Collections.Generic;
using Avian.Core.BusinessLogic;
using Avian.Core.DomainModelsAvian;
using Avian.Core.DomainModels;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Avian.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly UserBusiness UserBusiness;

        public UsersController(UserBusiness UserBusiness)
        {
            try
            {
                this.UserBusiness = UserBusiness;
            }
            catch (Exception ex)
            {
                var varmess = ex.Message;
                return;
            }
        }

        public class ReturnMessage
        {
            public Boolean Status { get; set; }
            public string Message { get; set; }
            public UserModel Data { get; set; }
        }

        // GET: api/Users
        [HttpGet("Profile")]
        public IEnumerable<ProfileModel> Profile()
        {
            return UserBusiness.GetProfile();
        }


        // GET: api/Users
        [HttpGet]
        public IEnumerable<UserModel> Get()
        {
            return UserBusiness.GetUserAll();
        }

        [HttpPost("Authentication")]        
        public IActionResult Authentication([FromBody] UserBusiness.UserLoginApi obj)
        {
            try
            {
                /*var aesKey = EncryptProvider.CreateAesKey();
                var key = aesKey.Key;
                var iv = aesKey.IV;
                //"123456$#@$^@1ERF"
                var DecripterLogin = EncryptProvider.AESDecrypt(obj.password, "dVc1q1pt98Gu1u3tps48yAuiLNMVUp8f");*/
                //var encrypted = EncryptProvider.Md5(obj.password, MD5Length.L32);                
                UserModel User = UserBusiness.Login(obj.username, obj.password).FirstOrDefault();
                if (User != null)
                {
                    ReturnMessage message = new ReturnMessage()
                    {
                        Status = true,
                        Message = "Login Success",
                        Data = User
                    };
                    return Ok(message);
                }
                else
                {
                    ReturnMessage message = new ReturnMessage()
                    {
                        Status = false,
                        Message = "Login Fail - User Name Or Password, Cheking"
                    };
                    return Ok(message);
                }
            }
            catch (Exception ex)
            {
                ReturnMessage message = new ReturnMessage()
                {
                    Status = false,
                    Message = "Error:" + ex
                };
                return Ok(message);
            }
        }


        [HttpPost("Add")]
        public bool Add([FromBody] UserModel User)
        {
            User.UserId = (User.UserId == null) ? Guid.Empty : User.UserId;
            Abuser ObjAbuserModel = new Abuser { 
                UserId = Guid.Parse(User.UserId.ToString()),
                UserName = User.UserName,
                FirstName = User.FirstName,
                LastName = User.LastName,
                Password = User.Password,
                Email = User.Email,
                Status = User.Status            
            };
            foreach (ProfileUserModel ObjProfileUserModel in User.ProfileUser)
            {                
                List<Abprofile> ObjProfile = new List<Abprofile> { };
                foreach (ProfileModel ObjProfileModel in ObjProfileUserModel.Profile)
                {
                    List<Abpermissions> ObjPermissions = new List<Abpermissions> { };
                    foreach (PermissionModel ObjPermissionsModel in ObjProfileModel.Permissions)
                    {
                        ObjPermissionsModel.PermissionsId = (ObjPermissionsModel.PermissionsId == null) ? Guid.Empty : ObjPermissionsModel.PermissionsId;
                        Abpermissions Permission = new Abpermissions
                        {
                            PermissionsId = Guid.Parse(ObjPermissionsModel.PermissionsId.ToString()),
                            ProfileId = ObjProfileModel.ProfileId,
                            CatlogsId = ObjPermissionsModel.CatlogsId
                        };
                        ObjPermissions.Add(Permission);
                    }
                    ObjProfileModel.ProfileId = (ObjProfileModel.ProfileId == null) ? Guid.Empty : ObjProfileModel.ProfileId;
                    Abprofile Profile = new Abprofile
                    {
                        ProfileId = Guid.Parse(ObjProfileModel.ProfileId.ToString()),
                        ProfileUserId = ObjProfileUserModel.ProfileUserId,
                        CatlogsId = ObjProfileModel.CatlogsId,
                        ControlUpdate = ObjProfileModel.ControlUpdate,
                        Abpermissions = ObjPermissions
                    };
                    ObjProfile.Add(Profile);
                }
                ObjProfileUserModel.ProfileUserId = (ObjProfileUserModel.ProfileUserId == null) ? Guid.Empty : ObjProfileUserModel.ProfileUserId;
                ObjAbuserModel.AbprofileUser.Add(new AbprofileUser
                {
                    ProfileUserId = Guid.Parse(ObjProfileUserModel.ProfileUserId.ToString()),
                    UserId = ObjProfileUserModel.UserId,
                    ProfileId = ObjProfileUserModel.ProfileId,
                    Abprofile = ObjProfile
                });
            }
            UserBusiness.SaveUser(ObjAbuserModel);
            return true;
        }
        // POST: api/Users        

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
