using Avian.Core.Contracts.Repositories;
using Avian.Core.DomainModelsAvian;
using Avian.Core.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avian.Core.BusinessLogic
{
    public class UserBusiness
    {
        public class UserLoginApi
        {
            public string username { get; set; }
            public string password { get; set; }
        }

        private readonly IUserRepository UserRepository;
        private readonly IProfileRepository ProfileRepository;
        private readonly IProfileUserRepository ProfileUserRepository;
        private readonly IPermissionsRepository PermissionsRepository;

        public UserBusiness(IUserRepository UserRepository, IProfileRepository ProfileRepository, IProfileUserRepository ProfileUserRepository, IPermissionsRepository PermissionsRepository)
        {
            this.UserRepository = UserRepository;
            this.ProfileRepository = ProfileRepository;
            this.ProfileUserRepository = ProfileUserRepository;
            this.PermissionsRepository = PermissionsRepository;
        }

        public IEnumerable<UserModel> Getuser(string Email, string Password)
        {
            return UserRepository.GetUser(Email, Password).Select(a => new UserModel
            {
                UserId = a.UserId,
                Status = a.Status,
                UserName = a.UserName,
                FirstName = a.FirstName,
                LastName = a.LastName,
                Email = a.Email,
                Password = a.Password,
                ProfileUser = a.AbprofileUser.Select(c => new ProfileUserModel
                {
                    ProfileUserId = c.ProfileUserId,
                    ControlUpdate = c.ControlUpdate,
                    Profile = c.Abprofile.Select(d => new ProfileModel
                    {
                        ProfileId = d.ProfileId,
                        CatlogsId = d.CatlogsId,
                        ControlUpdate = d.ControlUpdate,
                        ProfileName = d.Catlogs.CatlogsName,
                        Permissions = d.Abpermissions.Select(e => new PermissionModel
                        {
                            PermissionsId = e.PermissionsId,
                            CatlogsId = e.Catlogs.CatlogsId,
                            CatlogsName = e.Catlogs.CatlogsName,
                            CatlogsPrefix = e.Catlogs.CatlogsPrefix,
                            CatlogsType = e.Catlogs.CatlogsType
                        }
                        )
                    }
                    )
                })
            }
            );              
        }

        public IEnumerable<UserModel> GetUserEmpty(string cad)
        {
            return UserRepository.GetUserEmpty(cad).Select(a => new UserModel
            {
                UserId = a.UserId,
                UserName = a.UserName,
                Status = a.Status,
                FirstName = a.FirstName,
                LastName = a.LastName,
                Email = a.Email,
                Password = a.Password,
                ProfileUser = a.AbprofileUser.Select(c => new ProfileUserModel
                {
                    ProfileUserId = c.ProfileUserId,
                    ControlUpdate = c.ControlUpdate,
                    Profile = c.Abprofile.Select(d => new ProfileModel
                    {
                        ProfileId = d.ProfileId,
                        CatlogsId = d.CatlogsId,
                        ControlUpdate = d.ControlUpdate,
                        ProfileName = d.Catlogs.CatlogsName,
                        Permissions = d.Abpermissions.Select(e => new PermissionModel
                        {
                            PermissionsId = e.PermissionsId,
                            CatlogsId = e.Catlogs.CatlogsId,
                            CatlogsName = e.Catlogs.CatlogsName,
                            CatlogsPrefix = e.Catlogs.CatlogsPrefix,
                            CatlogsType = e.Catlogs.CatlogsType
                        }
                        )
                    }
                    )
                })
            }
            ); ;
        }       

        public IEnumerable<UserModel> GetUserAll()
        {
            //return UserRepository.GetUserAll()/*.Where(a => a.Email == Email)*/;
            return UserRepository.GetUserAll().Select(a => new UserModel
            {
                UserId = a.UserId,
                Status = a.Status,
                UserName = a.UserName,
                FirstName = a.FirstName,
                LastName = a.LastName,
                Email = a.Email,
                Password = a.Password,
                ProfileUser = a.AbprofileUser.Select(c => new ProfileUserModel
                {
                    ProfileUserId = c.ProfileUserId,
                    ControlUpdate = c.ControlUpdate,
                    Profile = c.Abprofile.Select(d => new ProfileModel
                    {
                        ProfileId = d.ProfileId,
                        CatlogsId = d.CatlogsId,
                        ControlUpdate = d.ControlUpdate,
                        ProfileName = d.Catlogs.CatlogsName,
                        Permissions = d.Abpermissions.Select(e => new PermissionModel
                        {
                            PermissionsId = e.PermissionsId,
                            CatlogsId = e.Catlogs.CatlogsId,
                            CatlogsName = e.Catlogs.CatlogsName,
                            CatlogsPrefix = e.Catlogs.CatlogsPrefix,
                            CatlogsType = e.Catlogs.CatlogsType
                        }
                        )
                    }
                    )
                })
            }
            );
        }

        public IEnumerable<ProfileModel> GetProfile()
        {
            return ProfileRepository.GetProfile().Select(a => new ProfileModel
            {
                ProfileId = a.ProfileId,
                ProfileName = a.Catlogs.CatlogsName,
                Permissions = a.Abpermissions.Select(c => new PermissionModel { 
                    PermissionsId = c.PermissionsId,
                    CatlogsId = c.Catlogs.CatlogsId,
                    CatlogsName = c.Catlogs.CatlogsName,
                    CatlogsPrefix = c.Catlogs.CatlogsPrefix,
                    CatlogsType = c.Catlogs.CatlogsType
                })
            }
            );
        }

        public IEnumerable<UserModel> Login(string username, string password)
        {
            return UserRepository.GetUser(username,password).Select(a => new UserModel
            {
                UserId = a.UserId,
                Status = a.Status,
                UserName = a.UserName,
                FirstName = a.FirstName,
                LastName = a.LastName,
                Email = a.Email,
                Password = a.Password,
                ProfileUser = a.AbprofileUser.Select(c => new ProfileUserModel
                {
                    ProfileUserId = c.ProfileUserId,
                    ControlUpdate = c.ControlUpdate,
                    Profile = c.Abprofile.Select(d => new ProfileModel
                    {
                        ProfileId = d.ProfileId,
                        CatlogsId = d.CatlogsId,
                        ControlUpdate = d.ControlUpdate,
                        ProfileName = d.Catlogs.CatlogsName,
                        Permissions = d.Abpermissions.Select(e => new PermissionModel
                        {
                            PermissionsId = e.PermissionsId,
                            CatlogsId = e.Catlogs.CatlogsId,
                            CatlogsName = e.Catlogs.CatlogsName,
                            CatlogsPrefix = e.Catlogs.CatlogsPrefix,
                            CatlogsType = e.Catlogs.CatlogsType
                        }
                        )
                    }
                    )
                }
                )
            }
            );
        }

        public bool SaveUser(Abuser objUser)
        {

            if (objUser.UserId == Guid.Empty || objUser.UserId == null)
            {
                objUser.UserId = Guid.NewGuid();
                objUser.Status= true;
                foreach (AbprofileUser objProfileUser in objUser.AbprofileUser)
                {
                    objProfileUser.ProfileUserId = Guid.NewGuid();
                    objProfileUser.UserId = objUser.UserId;
                    objProfileUser.ProfileId = Guid.NewGuid();
                    foreach (Abprofile objProfile in objProfileUser.Abprofile)
                    {
                        objProfile.ProfileId = Guid.Parse(objProfileUser.ProfileId.ToString());
                        objProfile.ProfileUserId = objProfileUser.ProfileUserId;
                        foreach (Abpermissions objPermissions in objProfile.Abpermissions)
                        {
                            objPermissions.PermissionsId = Guid.NewGuid();
                            objPermissions.ProfileId = objProfile.ProfileId;
                            objPermissions.CatlogsId = objPermissions.CatlogsId;
                            objPermissions.ControlUpdate = true;
                        }
                    }
                }

                UserRepository.Insert(objUser);
                UserRepository.Commit();
            }
            else
            {
                UserRepository.Update(objUser);
                UserRepository.Commit();

                foreach (AbprofileUser objProfileUser in objUser.AbprofileUser)
                {
                    foreach (Abprofile objProfile in objProfileUser.Abprofile)
                    {
                        if (objProfile.ProfileId == Guid.Empty || objProfile.ProfileUserId == null)
                        {
                            objProfile.ProfileId = Guid.NewGuid();                            
                            foreach (Abpermissions objPermissions in objProfile.Abpermissions)
                            {
                                objPermissions.PermissionsId = Guid.NewGuid();
                                objPermissions.ProfileId = objProfile.ProfileId;
                                //PermissionsRepository.Insert(objPermissions);
                                //PermissionsRepository.Commit();
                            }             
                            ProfileRepository.Insert(objProfile);
                            ProfileRepository.Commit();
                        }
                        else
                        {
                            if (objProfile.ControlUpdate == true)
                            {
                                ProfileRepository.Update(objProfile);
                                ProfileRepository.Commit();

                                List<Abpermissions> RemovedPermissions = PermissionsRepository.GetPermissionsProfileId(Guid.Parse(objProfile.ProfileId.ToString())).ToList();
                                foreach (Abpermissions ElementRemoved in RemovedPermissions)
                                {
                                    PermissionsRepository.Remove(ElementRemoved.PermissionsId);
                                    PermissionsRepository.Commit();
                                }
                                
                                foreach (Abpermissions objPermissions in objProfile.Abpermissions)
                                {                                    
                                    if(objPermissions.PermissionsId == null || objPermissions.PermissionsId == Guid.Empty) { objPermissions.PermissionsId = Guid.NewGuid(); }
                                    PermissionsRepository.Insert(objPermissions);
                                    PermissionsRepository.Commit();
                                }
                            }
                            else
                            {                              

                                List<Abpermissions> RemovedPermissions = PermissionsRepository.GetPermissionsProfileId(Guid.Parse(objProfile.ProfileId.ToString())).ToList();
                                foreach (Abpermissions ElementRemoved in RemovedPermissions)
                                {
                                    PermissionsRepository.Remove(ElementRemoved.PermissionsId);
                                    PermissionsRepository.Commit();
                                }
                                ProfileRepository.Remove(objProfile.ProfileId);
                                ProfileRepository.Commit();
                            }
                        }
                    }
                }
            }

            return true;
            
        }


    }
}
