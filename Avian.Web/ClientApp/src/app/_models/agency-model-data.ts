export class EmailStatusModel {
  EmailStatusId: string;
  EmailStatus: string;
  EmailTo: string[];
  EmailCc: string[];
  StatusCatlogsId: string;
  TypeSend: number;
  Status: boolean;
  constructor() {
    this.EmailStatusId = "00000000-0000-0000-0000-000000000000";
    this.StatusCatlogsId = "00000000-0000-0000-0000-000000000000";
    this.EmailStatus= null ;
    this.EmailTo= [] ;
    this.EmailCc=[];
    this.TypeSend = -1;
    this.Status = true;
  }
}

export class ContactAutPhoneModel {
  PhoneId: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  AgencyId: string;
  ContAuId: string;
  Phone: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.PhoneId = "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.ContAuId = "00000000-0000-0000-0000-000000000000";
    this.Phone = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export interface FilesArrayModel {
  FilePCLicense: File[];
  FileCurrentEO: File[];
  FileW9: File[];
}

export class FilesSaveModel {
  PCLicense: string[];
  CurrentEO: string[];
  W9: string[];
  constructor() {
    this.PCLicense = [];
    this.CurrentEO = [];
    this.W9 = [];
  }
}


export class FilesModel {
  FilePCLicense: any;
  FileCurrentEO: any;
  FileW9: any;
  constructor() {
    this.FilePCLicense = new FileDataModel();
    this.FileCurrentEO = new FileDataModel();
    this.FileW9 = new FileDataModel();
  }
}

export class FileDataModel {
  FileData: File;
  constructor() {
    this.FileData = null;
  }
}

export class AgencyPhoneModel {
  PhoneId: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  AgencyId: string;
  ContAuId: string;
  Phone: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.PhoneId = "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.ContAuId = "00000000-0000-0000-0000-000000000000";
    this.Phone = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class ContactAutEmailModel {
  EmailId: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  AgencyId: string;
  ContAuId: string;
  Email: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.EmailId = "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.ContAuId = "00000000-0000-0000-0000-000000000000";
    this.Email = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class AgencyEmailModel {
  EmailId: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  AgencyId: string;
  ContAuId: string;
  Email: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.EmailId = "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.ContAuId = "00000000-0000-0000-0000-000000000000";
    this.Email = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class AgencyDocumentModel {
  DocumentId: number;
  DocumentFile: string;
  DocumentAgencyId: string;
  constructor() {
    this.DocumentId = 0;
    this.DocumentFile = null;
    this.DocumentAgencyId = "00000000-0000-0000-0000-000000000000";
  }
}

export class AgencyModel {
  AgencyId: string;
  AgencyStatus: string;
  AgencyType: string;
  UserIdCreate: string;
  UserIdModify: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  AgencyRequestNumber: number;
  AgencyName: string;
  AgencyTin: string;
  AgencyStreet: string;
  AgencyCity: string;
  AgencyState: string;
  AgencyZip: string;
  AgencyAnnualB: string;
  AgencyAnnualP: string;
  AgencyNumberYear: string;
  AgencyNumberEmployee: string;
  AgencyRemarks: string;
  AgencyAverageSize: string;
  AgencyAccountBankName: string;
  AgencyAccountRoutingNumber: string;
  AgencyAccountAccountNumber: string;
  AgencyAccountHoldersName: string;
  AgencyDocumentId: number;
  AgencyGeneralDataIsCorrect: boolean;
  AgencyOwnerOfficerisCorrect: boolean;
  AgencyTrustAccountIsCorrect: boolean;
  AgencyAuthorizedContcatIsCorrect: boolean;
  AgencyGeneralDataIsCorrectData: string;
  AgencyOwnerOfficerisCorrectData: string;
  AgencyTrustAccountIsCorrectData: string;
  AgencyAuthorizedContcatIsCorrectData: string;
  DocumentGenerateStatus: boolean;
  
  Token: string;
  ResendStatus: string;
  AbagencyProductWritten: AbagencyProductWrittenModel[] = [];
  Abdocument: AgencyDocumentModel[] = [];
  Abphone: AgencyPhoneModel[] = [];
  Abemail: AgencyEmailModel[] = [];
  AbownerOfficer: OwnerOfficerModel[] = [];
  Abcarrier: CarrierModel[] = [];
  AbcontAut: ContactAutModel[] = [];
  AbagencyMigrate: MigrateAgencyModel[] = [];
  
  constructor() {
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.AgencyStatus = "00000000-0000-0000-0000-000000000000";
    this.AgencyType = "00000000-0000-0000-0000-000000000000";
    this.UserIdCreate = "00000000-0000-0000-0000-000000000000";
    this.UserIdModify = "00000000-0000-0000-0000-000000000000";
    this.ResendStatus =  "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.AgencyName = null;
    this.AgencyTin = null;
    this.AgencyStreet = null;
    this.AgencyCity = null;
    this.AgencyState = null;
    this.AgencyZip = null;
    this.AgencyAnnualB = null;
    this.AgencyAnnualP = null;
    this.AgencyNumberYear = null;
    this.AgencyRemarks = null;
    this.AgencyNumberEmployee = null;
    this.AgencyAverageSize = null;
    this.AgencyAccountBankName = null;
    this.AgencyAccountRoutingNumber = null;
    this.AgencyAccountAccountNumber = null;
    this.AgencyAccountHoldersName = null;
    this.AgencyDocumentId = 0;
    this.AgencyGeneralDataIsCorrect = false;
    this.AgencyOwnerOfficerisCorrect = false;
    this.AgencyTrustAccountIsCorrect = false;
    this.AgencyAuthorizedContcatIsCorrect = false;
    this.DocumentGenerateStatus = false;
    
    this.Token = null;
    this.Abdocument.push(new AgencyDocumentModel);
    this.Abphone.push(new AgencyPhoneModel);
    this.Abemail.push(new AgencyEmailModel);
    this.AbownerOfficer.push(new OwnerOfficerModel);
    this.Abcarrier.push(new CarrierModel);
    this.AbcontAut.push(new ContactAutModel);
    this.AbagencyMigrate.push( new MigrateAgencyModel);
    //this.AbagencyProductWritten.push(new AbagencyProductWrittenModel);
  }
}



export class ProductWrittenModel {
  ProductWrittenAgencyId: string;
  ProductWrittenCatlogsId: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.ProductWrittenAgencyId = null;
    this.ProductWrittenCatlogsId = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class ContactAutSendModel {
  DateTimeCreate: string;
  DateTimeModify: string;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Abemail: any;
  Abphone: any;
  constructor() {
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.Title = null;
    this.FirstName = null;
    this.MiddleName = null;
    this.LastName = null;
    this.Abemail = new ContactAutEmailModel();
    this.Abphone = new ContactAutPhoneModel();
  }
}

export class ContactAutModel {
  ContAutId: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Abemail: ContactAutEmailModel[] = [];
  Abphone: ContactAutPhoneModel[] = [];
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.ContAutId = "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.Title = null;
    this.FirstName = null;
    this.MiddleName = null;
    this.LastName = null;
    this.Abemail.push(new ContactAutEmailModel);
    this.Abphone.push(new ContactAutPhoneModel);
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class CarrierModel {
  CarrierId: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  CarrierName: string;
  AgentName: string;
  AppointedSince: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.CarrierId = "00000000-0000-0000-0000-000000000000";
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.CarrierName = null;
    this.AgentName = null;
    this.AppointedSince = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class AbagencyProductWrittenModel {
  ProductWrittenId: string;
  ProductWrittenAgencyId: string;
  ProductWrittenCatlogsId: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  ProductWrittenAgencyOther: string;
  constructor() {
    this.ProductWrittenId = "00000000-0000-0000-0000-000000000000";
    this.ProductWrittenAgencyId = "00000000-0000-0000-0000-000000000000";
    this.ProductWrittenCatlogsId = "00000000-0000-0000-0000-000000000000";
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
    this.ProductWrittenAgencyOther = null;
  }
}

export class CatlogProductWrittenModel {
  ProductWrittenId: string;
  ProductWrittenAgencyId: string;
  ProductWrittenCatlogsId: string;
  ProductWrittenCatlogsName: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  ProductWrittenOther: string;
}

export class OwnerOfficerModel {
  OwnerOfficerId: string;
  AgencyId: string;
  AgencyTittle: string;
  DateTimeCreate: string;
  DateTimeModify: string;
  Title: string;
  FirstName: string;
  LastName: string;
  TaxId: string;
  Dob: string;
  ControlUpdate: boolean;
  DateTimeUpdate: string;
  constructor() {
    this.OwnerOfficerId = "00000000-0000-0000-0000-000000000000";
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.AgencyTittle = null;
    this.DateTimeCreate = null;
    this.DateTimeModify = null;
    this.Title = null;
    this.FirstName = null;
    this.LastName = null;
    this.TaxId = null;
    this.Dob = null;
    this.ControlUpdate = true;
    this.DateTimeUpdate = null;
  }
}

export class StatusModel {
  StatuslId: string;
  Status: string;
  constructor() {
    this.StatuslId = "00000000-0000-0000-0000-000000000000";
    this.Status = null;
  }
}

export class ErrorModel {
  Seccion: string;
  NameControl: string;
  Name: string;
  Index: number;
  constructor() {
    this.Seccion = null;
    this.NameControl = null;
    this.Name = null;
    this.Index = -1;
  }
}

export class MigrateAgencyModel {
  AgencyMigrateId : string;
  AgencyId: string;
  AgencyRequestNumber: number;
  constructor() {
    this.AgencyMigrateId = "00000000-0000-0000-0000-000000000000";
    this.AgencyId = "00000000-0000-0000-0000-000000000000";
    this.AgencyRequestNumber = 0
  }
}


