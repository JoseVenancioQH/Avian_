export class CurrentUserModel {
  Status: string;
  Message: string;
  Data: UserModel;
  constructor() {
    this.Status = null;
    this.Message = null;
    this.Data = new UserModel();
  }
}

export class UserModel {
  UserId: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Salt: string;
  ProfileUser: ProfileUserModel[] = [];
  authdata?: string;
  ControlUpdate: boolean;
  Status: boolean;
  constructor() {
    this.UserId = "00000000-0000-0000-0000-000000000000";
    this.UserName = null;
    this.FirstName = null;
    this.LastName = null;
    this.Email = null;
    this.Password = null;
    this.Salt = null;
    this.ProfileUser.push(new ProfileUserModel());
    this.ControlUpdate = true;
    this.Status=true;
  }
}

export class ProfileUserModel {  
  ProfileUserId: string;
  Profile: ProfileModel[]=[];
  ControlUpdate: boolean;
  constructor() {
    this.ProfileUserId = "00000000-0000-0000-0000-000000000000"
    this.ControlUpdate = true;
    this.Profile.push(new ProfileModel());
  }
}

export class ProfileModel {
  ProfileId: string;
  ProfileName: string;
  Permissions: PermissionsModel[] = [];  
  ControlUpdate: boolean;
  constructor() {
    this.ProfileId = "00000000-0000-0000-0000-000000000000";
    this.ProfileName = null;    
    this.Permissions.push(new PermissionsModel());
    this.ControlUpdate= true;
  }
}

export class PermissionsModel {
  PermissionsId: string;    
  CatlogsId: string;
  CatlogsType: string;
  CatlogsName: string;
  CatlogsPrefix: string;
  ControlUpdate: boolean;
  constructor() {
    this.PermissionsId="00000000-0000-0000-0000-000000000000";        
    this.CatlogsId= null;
    this.CatlogsType= null;
    this.CatlogsName = null;
    this.CatlogsPrefix = null;
    this.ControlUpdate= true;
  }
}

export class CatlogsModel {
  CatlogsId: string;
  CatlogsType: string;
  CatlogsName: string;
  CatlogsPrefix: string;
}
