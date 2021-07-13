using Avian.Core.DomainModelsAvian;
using System;
using System.Collections.Generic;

namespace Avian.Core.DomainModels
{
    public class UserRemovedModel
    {
        public Guid? UserId { get; set; }
        public Guid? AgencyId { get; set; }
    }

    public class DocumentModel
    {
        public List<string> PCLicense { get; set; }
        public List<string> CurrentEO { get; set; }
        public List<string> W9 { get; set; }
    }

    public class DocumentMigrationModel
    {
        public string FileNameDownload { get; set; }
        public string FileNameUpload { get; set; }
    }

    public class InsertStatusModel
    {
        public int AgencyRequestNumber { get; set; }
        public Guid? AgencyId { get; set; }
    }
    public class ReturnMessage
    {
        public Boolean Status { get; set; }
        public string Message { get; set; }
        public string Ex { get; set; }
        public string HtmlSend { get; set; }
        public ModelRedirect ModelRedirect { get; set; }
        public List<string> ListDocument { get; set; }

    }

    public class ModelRedirect
    {
        public string Router { get; set; }
        public string AgencyId { get; set; }
        public string Token { get; set; }
    }

    

    public class OperationMessage
    {
        public ReturnMessage Save { get; set; }
        public ReturnMessage Email { get; set; }
    }
    public partial class BrokerInformationModel
    {
        public Guid? AgencyId { get; set; }
        public string DateTimeCreate { get; set; }
        public int AgencyRequestNumber { get; set; }
        public string AgencyName { get; set; }
        public IEnumerable<Abemail> Abemail { get; set; }
        public IEnumerable<Abphone> Abphone { get; set; }
        public Guid? AgencyStatus { get; set; }

        public bool? DocumentGenerateStatus { get; set; }

    }
    public partial class ModelDownload
    {
        public string Type { get; set; }
        public string Id { get; set; }
        public string Root { get; set; }
        public string File { get; set; }
        public string NameDisplay { get; set; }
    }

    public partial class UserModel
    {
        public Guid? UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool? Status { get; set; }
        public IEnumerable<ProfileUserModel> ProfileUser { get; set; }
    }

    public partial class ProfileUserModel
    {
        public Guid? ProfileUserId { get; set; }
        public Guid? UserId { get; set; }
        public Guid? ProfileId { get; set; }
        public bool? ControlUpdate { get; set; }
        public IEnumerable<ProfileModel> Profile { get; set; }
    }

    public partial class ProfileModel
    {
        public Guid? ProfileId { get; set; }
        public string ProfileName { get; set; }
        public Guid? CatlogsId { get; set; }
        public bool? ControlUpdate { get; set; }
        public IEnumerable<PermissionModel> Permissions { get; set; }
    }

    public partial class PermissionModel
    {
        public Guid? PermissionsId { get; set; }
        public Guid? ProfileId { get; set; }
        public Guid? CatlogsId { get; set; }
        public string CatlogsName { get; set; }
        public string CatlogsType { get; set; }
        public string CatlogsPrefix { get; set; }

    }

    public partial class StatusEmailModel
    {
        public Guid? EmailStatusId { get; set; }
        public int? TypeSend { get; set; }

        public Guid? StatusCatlogsId { get; set; }
        public string EmailStatus { get; set; }
        public List<string> EmailTo { get; set; }
        public List<string> EmailCc { get; set; }
        public bool? Status { get; set; }

    }

    public class objDocumentAgency
    {
        public Abagency objAgency { get; set; }
        public string stringState { get; set; }

        public string TypeAgency { get; set; }

        public List<string> TypeWritten { get; set; }

        public string TypeWrittenOther { get; set; }

        
    }

}
