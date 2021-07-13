import { Component, OnInit, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, MaxLengthValidator } from '@angular/forms';
//import 'material-icons/iconfont/material-icons.scss';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  ContactAutPhoneModel,
  ContactAutEmailModel,
  AgencyPhoneModel,
  AgencyEmailModel,
  ContactAutModel,
  CarrierModel,
  OwnerOfficerModel,
  StatusModel,
  AgencyModel,
  CatlogProductWrittenModel,
  FilesSaveModel,
  ErrorModel
} from '../_models/agency-model-data';
import { CurrentUserModel } from '../_models/users-model-data';
import { AgencyService } from '../_services/agency.service';
import { MatDatepickerInputEvent, MAT_DATEPICKER_VALIDATORS } from '@angular/material/datepicker';
import { AgencyDocumentService } from '../_services/AgencyDocument.service';
import { DownloadService } from '../_services/download.service';
import { StatesGetService } from '../_services/StatesGet.service';
import { CatlogsGetService } from '../_services/CatlogsGet.service';
import { AuthenticationService } from '../_services';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NgxMaskModule, IConfig, MaskDirective } from 'ngx-mask';
import {formatDate} from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})

export class AgencyFormComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;  

  checkedReSend: boolean =false;
  
  events: string[] = [];
  selectedUserIds: number[];

  loading = false;
  returnUrl: string;
  AgencyForm: FormGroup;
  contactAutGroup: FormGroup;
  ContactAutPhone = new ContactAutPhoneModel;
  ContactAutEmail = new ContactAutEmailModel;
  AgencyPhone = new AgencyPhoneModel;
  AgencyEmail = new AgencyEmailModel;
  ContactAut = new ContactAutModel();
  Carrier = new CarrierModel;
  OwnerOfficer = new OwnerOfficerModel;
  Status = new StatusModel;
  Agency = new AgencyModel();
  AgencyAdd = new AgencyModel();
  CatlogProductWritten = new CatlogProductWrittenModel;

  DocumentsFiles = new FilesSaveModel;  

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threFormGroup: FormGroup;

  currentUser: CurrentUserModel;
  GuidAgency:string;

  CatlogsProductWritten: any[] =[];
  CatlogsTitle: any[] =[];
  CatlogsAgencyStatus: any[] =[];
  CatlogsAgencyType: any[] =[];
  States: any[] =[];  

  IndexOther: number=0;
  SatusProductWrittenOther: boolean=false;

  

  constructor(
    private formBuilder: FormBuilder,
    private formBuilderContactAut: FormBuilder,
    private AgencyService: AgencyService,
    private route: ActivatedRoute,
    private router: Router,
    iconRegistry: MatIconRegistry,
    private CatlogsGetService: CatlogsGetService,
    private StatesGetService: StatesGetService,
    private AgencyDocumentService: AgencyDocumentService,
    sanitizer: DomSanitizer,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private DownloadService: DownloadService,
    public dialog: MatDialog,
    private Mask: NgxMaskModule
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);    
    this.GuidAgency =this.AgencyService.getGuid();
    /*this.CatlogsProductWritten = this.CatlogsGetService.getCatlogsProductWritten();
    this.CatlogsTitle = this.CatlogsGetService.getCatlogsTitle();
    this.CatlogsAgencyStatus = this.CatlogsGetService.getCatlogsAgencyStatus();
    this.CatlogsAgencyType = this.CatlogsGetService.getCatlogsAgencyType();
    this.States = this.StatesGetService.getStates();*/    
    
    this.CatlogsProductWritten = this.CatlogsGetService.CatlogsProductWrittenValue;
    this.CatlogsTitle = this.CatlogsGetService.CatlogsTitleValue;
    this.CatlogsAgencyStatus = this.CatlogsGetService.CatlogsAgencyStatusValue;
    this.CatlogsAgencyType = this.CatlogsGetService.CatlogsAgencyTypeValue;
    this.States = this.StatesGetService.StatesValue;
  }

  public DirectoryBase: string = "";
  public contactAutCount: number = 0;
  public AutCountMinMax: number = 0;
  public IndexContAut: number = 0;

  public flagReturnSave: boolean =false;

  public ArrayAppointedSinceValid: string[] = [];
 
  public emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
  public dateRegEx: RegExp = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/
  public phoneRegEx: RegExp = /^\(\d{3}\)\s\d{3}\s-\s\d{4}/
  //public dateRegEx: RegExp = /^(?:(?:(?:0[13578]|1[02])(\/)31)\1|(?:(?:0[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:02(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

  PCLicense_files = [];
  CurrentEO_files = [];
  W9_files = [];
 

  selectedAgencyStatus: String[] = [];

  flagValid:number = 0;

  StatusCurrent:string = "";

  
  
  ProductWrittenOtherChanged(value){
    this.CheckStatusProductWrittenOther(value);
  }

  
  CheckStatusProductWrittenOther(CatlogsModel:any, Set:boolean=false){
    if(Set){
      let Id = this.CatlogsProductWritten.find(a=> a.ProductWrittenCatlogsName=='Other').ProductWrittenCatlogsId;      
      this.IndexOther = this.Agency.AbagencyProductWritten.findIndex(a=> a.ProductWrittenCatlogsId==Id);
      this.SatusProductWrittenOther =(this.IndexOther>=0)?true:false;
    }else{
      this.IndexOther = CatlogsModel.findIndex(a=> a.ProductWrittenCatlogsName=='Other');
      this.SatusProductWrittenOther =(this.IndexOther>=0)?true:false;
    }
  }

  onItemSelect(item: any) {
    console.log(this.Agency.AbagencyProductWritten);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  ngOnInit() {
     
      //this.intValidForm();
      let typeForm: number = 0;
      let paramsOut:any=null;
      let IsNullOrGuidEmpty: boolean = this.IsNullOrGuidEmpty(this.GuidAgency);

      if(IsNullOrGuidEmpty){
          this.route.queryParams.subscribe(params => {
            if(params.hasOwnProperty("AgencyId") && params.hasOwnProperty("Token")){paramsOut = params;}             
            console.log(paramsOut);   
          });
          if(paramsOut!=null){             
            if(this.currentUser){
                this.CatlogsGetService.setNull();
                this.StatesGetService.setNull();
                this.authenticationService.logoutToken();               
            }                     
            typeForm = 1;        
          }else{
            typeForm = 2;                
          }
      }else{typeForm = 3;}

      switch(typeForm) { 
          case 1: { 
            this.SetLocalCatlogs(paramsOut);
            break; 
          } 
          case 2: { 
            this.setAgencyNew();
            break; 
          } 
          case 3: { 
            this.setAgencyCurrentUser(this.GuidAgency);            
            break; 
          } 
          default: { 
            //statements; 
            break; 
          } 
      }     
      this.intValidForm();      
  }

  get f() { return this.AgencyForm.controls; }  

  openSnackBar(message: string, action: string, duration:number) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  openDialog(message: string, action: string, duration:number=5000) {    
          const dialogRef = this.dialog.open(DialogComponent, {
                width: '450px',
                data: {                        
                          Message: message,
                          Action: action,
                          Duration: duration                        
                }
          });
          setTimeout(() => {
            dialogRef.close();
          }, duration);
    
  }

  intAddFormGroup(Model:any){    
    let index:number=0;
    let indexEmail:number=0;
    let indexPhone:number=0;
    for (let element of Model.Abemail) {
      if(index>0){this.addAgencyEmailControl();}
      index++;
    }
    index=0;
    for (let element of Model.Abphone) {
      if(index>0){this.addAgencyPhoneControl();}
      index++;
    }
    index=0;
    for (let element of Model.Abcarrier) {      
      if(index>0){this.addAgencyCarrierControl();}      
      index++;
    }
    index=0;
    for (let element of Model.AbownerOfficer) {
      if(index>0){this.addAgencyOwnerControl();}
      index++;
    }
    index=0;
    for (let element of Model.AbcontAut) {      
      if(index>0){
          this.addAgencyAutContactControl();
          indexEmail=0;
          for (let elementAbemail of element.Abemail) {
            if(indexEmail>0){this.addAgencyAutContactEmailControl(index);}
            indexEmail++;
          }
          indexPhone=0;
          for (let elementAbemail of element.Abemail) {
            if(indexPhone>0){this.addAgencyAutContactPhoneControl(index);}
            indexPhone++;
          }    
      }
      index++;
    }   
  }

  intValidForm(){   

    this.AgencyForm = this.formBuilder.group({
      AgencyName: ['', Validators.required],
      AgencyType: [''],      
      AgencyStatus: [''],
      checkedReSend: [''],
      AgencyTIN: ['', Validators.required],
      AgencyCity: ['', Validators.required],
      AgencyState: ['', Validators.required],
      AgencyZip: ['', Validators.required],
      AgencyStreet: ['', Validators.required],
      AgencyAnnualB: ['', [Validators.required, Validators.maxLength(10)]],
      AgencyAnnualP: ['', [Validators.required, Validators.maxLength(10)]],
      AgencyNumberYear: ['', [Validators.required,                                    
                                    Validators.maxLength(3)
                            ]
                        ],
      AgencyNumberEmployee: ['', [Validators.required,                                                      
                                                      Validators.maxLength(4)
                                 ]
                            ],
      AgencyAverageSize: ['', [
                                      Validators.required,                                      
                                      Validators.maxLength(7)
                              ]
                         ],
      AbagencyProductWritten: ['', Validators.required],
      ProductWrittenOther: [''],
      AgencyGeneralDataIsCorrect: [''],
      AgencyOwnerOfficerisCorrect: [''],
      AgencyAccountBankName: [''],
      AgencyAccountRoutingNumber: [''],
      AgencyAccountAccountNumber: [''],
      AgencyAccountHoldersName: [''],
      AgencyTrustAccountIsCorrect: [''],      
      contactAutCount: [''],
      AgencyAuthorizedContcatIsCorrectData: [''],
      AgencyAuthorizedContcatIsCorrect: [''],
      AgencyGeneralDataIsCorrectData: [''],      
      AgencyOwnerOfficerisCorrectData: [''],
      AgencyTrustAccountIsCorrectData: [''],
      AgencyRemarks: [''], 
      AgencyCarrierControl: this.formBuilder.array(
          [
            this.createAgencyCarrierFormGroup()
          ],
          [ ]
      ), 
      AgencyEmailControl: this.formBuilder.array(
                                                    [
                                                      this.createAgencyEmailFormGroup()
                                                    ],
                                                    [ Validators.required ]
                                                ),
      AgencyPhoneControl: this.formBuilder.array(
                                              [
                                                this.createAgencyPhoneFormGroup()
                                              ],
                                              [ Validators.required]
                                          ), 
      AgencyOwnerControl: this.formBuilder.array(
                                            [
                                              this.createAgencyOwnerFormGroup()
                                            ],
                                            [ Validators.required]
                                        ), 
      AgencyAutContactControl: this.formBuilder.array(
                                          [
                                            this.createAgencyAutContactFormGroup()
                                          ],
                                          [ Validators.required]
                                      ), 
    });
  }

  //Agency - AutContact ArrayControl Valid////////////////
  createAgencyAutContactFormGroup() {
    return this.formBuilder.group({      
      ContactAutTitle: ['', [Validators.required]],
      ContactAutFirstName: ['', [Validators.required]],
      ContactAutMiddleName: ['', [Validators.required]],
      ContactAutLastName: ['', [Validators.required]],
      AgencyAutContactEmailControl: this.formBuilder.array(
                                                              [
                                                                this.createAgencyAutContactEmailFormGroup()
                                                              ],
                                                              [Validators.required]
                                                          ),
      AgencyAutContactPhoneControl: this.formBuilder.array(
                                                              [
                                                                this.createAgencyAutContactPhoneFormGroup()
                                                              ],
                                                              [ Validators.required]
                                                          ),            
    })
  } 
  get AgencyAutContactControl(): FormArray {
		return this.AgencyForm.get('AgencyAutContactControl') as FormArray;
  }  
  addAgencyAutContactControl() {
		let fg = this.createAgencyAutContactFormGroup();
		this.AgencyAutContactControl.push(fg);
  }
  removeAgencyAutContactControl(idx: number) {
		this.AgencyAutContactControl.removeAt(idx);
  }
  //Agency - AutContactEmail ArrayControl Valid////////////////
                createAgencyAutContactEmailFormGroup() {
                  return this.formBuilder.group({      
                    ContactAutEmail: ['', [Validators.required, Validators.pattern(this.emailregex/*"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"*/)]],
                  })
                } 
                get AgencyAutContactEmailControl(): FormArray {                                 
                  return this.AgencyAutContactControl.controls[this.IndexContAut].get('AgencyAutContactEmailControl') as FormArray;
                }  
                addAgencyAutContactEmailControl(idp:number) {
                  this.IndexContAut= idp;
                  let fg = this.createAgencyAutContactEmailFormGroup();
                  this.AgencyAutContactEmailControl.push(fg);
                }
                removeAgencyAutContactEmailControl(idxp:number, idx: number) { 
                  this.IndexContAut= idxp;
                  this.AgencyAutContactEmailControl.controls.splice(idx,1);                     
                }
  //Agency - AutContactEmail ArrayControl Valid////////////////
  //Agency - AutContactPhone ArrayControl Valid////////////////
                createAgencyAutContactPhoneFormGroup() {
                  return this.formBuilder.group({      
                    ContactAutPhone: ['', [Validators.required, Validators.pattern(this.phoneRegEx)]],
                  })
                } 
                get AgencyAutContactPhoneControl(): FormArray {
                  return this.AgencyAutContactControl.controls[this.IndexContAut].get('AgencyAutContactPhoneControl') as FormArray;
                }  
                addAgencyAutContactPhoneControl(idp:number) {
                  this.IndexContAut= idp;
                  let fg = this.createAgencyAutContactPhoneFormGroup();
                  this.AgencyAutContactPhoneControl.push(fg);
                }
                removeAgencyAutContactPhoneControl(idxp:number, idx: number) { 
                  this.IndexContAut= idxp;                                     
                  this.AgencyAutContactPhoneControl.controls.splice(idx,1);    
                }
//Agency - AutContactPhone ArrayControl Valid////////////////
      
  //Agency - AutContact ArrayControl Valid////////////////

  //Agency - Owner ArrayControl Valid////////////////
  createAgencyOwnerFormGroup() {
    return this.formBuilder.group({      
      OwnerOfficerAgencyTittle: ['', [Validators.required]],
      OwnerOfficerFirstName: ['', [Validators.required]],
      OwnerOfficerLastName: ['', [Validators.required]],
      OwnerOfficerTaxId: ['', [Validators.required]],
      //OwnerOfficerDob: ['', [Validators.required]],
      OwnerOfficerDob: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
      OwnerOfficerDob_hidden: ['', []]
    })
  } 
  get AgencyOwnerControl(): FormArray {
		return this.AgencyForm.get('AgencyOwnerControl') as FormArray;
  }  
  addAgencyOwnerControl() {
		let fg = this.createAgencyOwnerFormGroup();
		this.AgencyOwnerControl.push(fg);
  }
  removeAgencyOwnerControl(idx: number) {
		this.AgencyOwnerControl.removeAt(idx);
	}
  //Agency - Owner ArrayControl Valid////////////////

  //Agency - Carrier ArrayControl Valid////////////////
  createAgencyCarrierFormGroup() {    
    return this.formBuilder.group({           
        CarrierName: [''],
        AgentName: [''],
        AppointedSince: ['', Validators.pattern(this.dateRegEx)],
        AppointedSince_hidden:['']
        //AppointedSince: ['', [Validators.pattern("^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$"),Validators.date]]
    })
  } 
  get AgencyCarrierControl(): FormArray {
		return this.AgencyForm.get('AgencyCarrierControl') as FormArray;
  }  
  
  addAgencyCarrierControl() {
    let fg = this.createAgencyCarrierFormGroup();    
		this.AgencyCarrierControl.push(fg);
  }
  removeAgencyCarrierControl(idx: number) {
		this.AgencyCarrierControl.removeAt(idx);
  }   
  
  //Agency - Carrier ArrayControl Valid////////////////

  //AgencyEmail ArrayControl Valid////////////////
  createAgencyEmailFormGroup() {
     
    return this.formBuilder.group({
      AgencyEmail: ['', [Validators.required,Validators.pattern(this.emailregex/*"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"*/)]]
    })
  } 
  
  get AgencyEmailControl(): FormArray {
		return this.AgencyForm.get('AgencyEmailControl') as FormArray;
  }  
  addAgencyEmailControl() {
		let fg = this.createAgencyEmailFormGroup();
		this.AgencyEmailControl.push(fg);
  }
  removeAgencyEmailControl(idx: number) {
		this.AgencyEmailControl.removeAt(idx);
	}
  //AgencyEmail ArrayControl Valid////////////////

  //AgencyPhone ArrayControl Valid////////////////
  createAgencyPhoneFormGroup() {
    return this.formBuilder.group({
      AgencyPhone: ['', [Validators.required, , Validators.pattern(this.phoneRegEx)]]
    })
  } 
  get AgencyPhoneControl(): FormArray {
		return this.AgencyForm.get('AgencyPhoneControl') as FormArray;
  }  
  addAgencyPhoneControl() {
		let fg = this.createAgencyPhoneFormGroup();
		this.AgencyPhoneControl.push(fg);
  }
  removeAgencyPhoneControl(idx: number) {
		this.AgencyPhoneControl.removeAt(idx);
	}
  //AgencyPhone ArrayControl Valid//////////////// 

  SetLocalCatlogs(Model:any){
      let CatlogsProductWritten_: any[] =[];
      let CatlogsTitle_: any[] =[];
      let CatlogsAgencyStatus_: any[] =[];
      let CatlogsAgencyType_: any[] =[];
      this.BloackUIStart("Loading Catlogs");            
      this.StatesGetService.getState().subscribe(res => {         
        this.BloackUIStop();                 
        this.States = JSON.parse(JSON.stringify(res));        
      });  
    
      this.CatlogsGetService.getCatlogs().subscribe(res => {          
        for (let element of Object(res)) {
          if (element.CatlogsType == 'ProductWritten') {
            this.CatlogProductWritten = new CatlogProductWrittenModel();
            this.CatlogProductWritten.ProductWrittenCatlogsId = element.CatlogsId;
            this.CatlogProductWritten.ProductWrittenCatlogsName = element.CatlogsName;
            this.CatlogProductWritten.ProductWrittenAgencyId = "00000000-0000-0000-0000-000000000000";
            this.CatlogProductWritten.ProductWrittenId = "00000000-0000-0000-0000-000000000000";
            this.CatlogProductWritten.ControlUpdate = true;
            this.CatlogProductWritten.DateTimeUpdate = null;
            CatlogsProductWritten_.push(this.CatlogProductWritten);
          }

          if (element.CatlogsType == 'Title') {
            CatlogsTitle_.push(element);
          }
          if (element.CatlogsType == 'AgencyStatus') {
            CatlogsAgencyStatus_.push(element);
          }
          if (element.CatlogsType == 'AgencyType') {
            CatlogsAgencyType_.push(element);
          }            
        }
        this.CatlogsProductWritten = CatlogsProductWritten_;    
        this.CatlogsAgencyStatus = CatlogsAgencyStatus_;
        this.CatlogsAgencyType = CatlogsAgencyType_;      
        this.CatlogsTitle = CatlogsTitle_;
        this.Agency.AgencyType = this.CatlogsAgencyType.find(e=> e.CatlogsName === 'None' ).CatlogsId;
        this.BloackUIStop();
        if(Model!=null){
          this.BloackUIStart("Loading Data");
          this.setAgencyOut(Model);
        }else{this.StatusCurrent = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'Draft' ).CatlogsId;}        
      });    
  }

 

  setAgencyNew() {
    this.Agency = new AgencyModel();
    this.contactAutCount = this.Agency.AbcontAut.length;
    this.AutCountMinMax = this.Agency.AbcontAut.length;       
    this.SetLocalCatlogs(null);    
  }

  setAgencyCurrentUser(Id) {
    this.BloackUIStart("Loading Data");
    this.AgencyService.getAgencyId(Id)
      .pipe(first())
      .subscribe(
        objAgency => {
          this.BloackUIStop();
          if (objAgency) {              
              this.intAddFormGroup(objAgency[0]);         
              this.Agency = objAgency[0];          
              this.contactAutCount = this.Agency.AbcontAut.length;
              this.AutCountMinMax = this.Agency.AbcontAut.length;      
              this.SetInitDataPickerAppointedSince(this.Agency);
              this.SetInitDataPickerOwnerOfficerDob(this.Agency);
              for (let ele of this.Agency.Abdocument) {
                if (ele.DocumentFile != null) { this.DocumentsFiles = JSON.parse(ele.DocumentFile); }
              }            
              this.CheckStatusProductWrittenOther(this.Agency.AbagencyProductWritten,true); 
              this.StatusCurrent = this.Agency.AgencyStatus;                      
          } else {
              this.loading = false;
          }
        },
        error => {
          this.loading = false;
        }
      );     
  }

  setAgencyOut(ModelToken:any) {    
    return this.AgencyService.GetAgencyToken(ModelToken)
          .pipe(first())
          .subscribe(
              objAgency => {
                this.BloackUIStop();
                if (objAgency[0]) {      
                    this.intAddFormGroup(objAgency[0]);        
                    this.Agency = objAgency[0];
                    this.contactAutCount = this.Agency.AbcontAut.length;
                    this.AutCountMinMax = this.Agency.AbcontAut.length;
                    this.SetInitDataPickerAppointedSince(this.Agency);
                    this.SetInitDataPickerOwnerOfficerDob(this.Agency);
                    for (let ele of this.Agency.Abdocument) {
                      if (ele.DocumentFile != null) { this.DocumentsFiles = JSON.parse(ele.DocumentFile); }
                    }                 
                    this.CheckStatusProductWrittenOther(this.Agency.AbagencyProductWritten,true);
                    this.StatusCurrent = this.Agency.AgencyStatus;
                } else {   
                    this.AgencyService.onMessage("ChangeStatus");            
                    this.loading = false;
                }
              },
              error => {
                this.AgencyService.onMessage("Error");            
                this.loading = false;          
              }
          );      
  }

  public fileDownload(Type: string, Id: string, Root:string, Name: string) {    
    this.BloackUIStart("Load File"); 
    this.DownloadService.downloadFile(Type, Id, Root,  Name).subscribe(
      data => {
        switch (data.type) {          
          case HttpEventType.Response:     
            this.BloackUIStop();        
            const downloadedFile = new Blob([data.body], { type: data.body.type });
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.download = Name;
            a.href = URL.createObjectURL(downloadedFile);
            a.target = '_blank';
            a.click();
            document.body.removeChild(a);
            break;
        }
      },
      error => {        
      }
    );
  }

  onChangecontactAut(e) {
    if (e.target.value < this.AutCountMinMax) { this.contactAutCount = this.AutCountMinMax; } else {
      const numberOfcontactAut = e.target.value || 0;
      if (this.Agency.AbcontAut.length < numberOfcontactAut) {
        for (let i = this.Agency.AbcontAut.length; i < numberOfcontactAut; i++) {
          this.Agency.AbcontAut.push(new ContactAutModel);
          this.addAgencyAutContactControl();
        }
      } else {
        for (let i = this.Agency.AbcontAut.length; i >= numberOfcontactAut; i--) {
          this.removeAgencyAutContactControl(i);
          this.Agency.AbcontAut.splice(i, 1);
        }
      }
    }
  }

  onClickcontactAutRemoved(index) {
    this.removeAgencyAutContactControl(index);
    if (!this.IsNullOrGuidEmpty(this.Agency.AbcontAut[index].ContAutId)) {      
      for (let element of this.Agency.AbcontAut[index].Abemail) {
        element.ControlUpdate = false;        
      }
      let iPhone:number =this.Agency.AbcontAut[index].Abphone.length-1;
      for (let element of this.Agency.AbcontAut[index].Abphone) {
        element.ControlUpdate = false;        
      }
      this.Agency.AbcontAut[index].ControlUpdate = false;      
    } else {
      this.Agency.AbcontAut.splice(index, 1);
      this.contactAutCount--;
    }
  }

  onFileSelected(type) {
    const inputNode: any = document.querySelector('#file' + type);
    for (let file of inputNode.files) {
      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();
        reader.onload = (e: any) => {
        };
        reader.readAsArrayBuffer(file);
      }
      if (type == 'PCLicense') {
        this.PCLicense_files.push(file);
      }
      if (type == 'CurrentEO') {
        this.CurrentEO_files.push(file);
      }
      if (type == 'W9') {
        this.W9_files.push(file);
      }
    }
  }

  fileDelete(type, index) {
    if (type == 'PCLicense') {
      this.PCLicense_files.splice(index, 1);
    }
    if (type == 'CurrentEO') {
      this.CurrentEO_files.splice(index, 1);
    }
    if (type == 'W9') {
      this.W9_files.splice(index, 1);
    }

    if (type == 'Repo_PCLicense') {
      this.DocumentsFiles.PCLicense.splice(index, 1);
    }
    if (type == 'Repo_CurrentEO') {
      this.DocumentsFiles.CurrentEO.splice(index, 1);
    }
    if (type == 'Repo_W9') {
      this.DocumentsFiles.W9.splice(index, 1);
    }
  }  

  IsNullOrGuidEmpty(Data:any){
    return (Data == null || Data == '00000000-0000-0000-0000-000000000000')?true:false;
  }

  onClickcontactAutPhoneAdd(Index) {
    this.ContactAutPhone = new ContactAutPhoneModel();
    this.Agency.AbcontAut[Index].Abphone.push(Object.assign({}, this.ContactAutPhone));
    this.addAgencyAutContactPhoneControl(Index);
  }
  onClickcontactAutEmailAdd(Index) {
    this.ContactAutEmail = new ContactAutEmailModel();
    this.Agency.AbcontAut[Index].Abemail.push(Object.assign({}, this.ContactAutEmail));
    this.addAgencyAutContactEmailControl(Index);
    
  }
  onClickAgencyEmailAdd(e) {
    this.AgencyEmail = new AgencyEmailModel();
    this.Agency.Abemail.push(Object.assign({}, this.AgencyEmail));
    this.addAgencyEmailControl();
  }
  onClickAgencyPhoneAdd(e) {
    this.AgencyPhone = new AgencyPhoneModel();
    this.Agency.Abphone.push(Object.assign({}, this.AgencyPhone));
    this.addAgencyPhoneControl();
  }
  onClickCarrierAdd(e) {
    this.Carrier = new CarrierModel();
    this.Agency.Abcarrier.push(Object.assign({}, this.Carrier));
    this.addAgencyCarrierControl();
  }
  onClickOwnerOfficerAdd(e) {
    this.OwnerOfficer = new OwnerOfficerModel();
    this.Agency.AbownerOfficer.push(Object.assign({}, this.OwnerOfficer));
    this.addAgencyOwnerControl();
  }

  onClickcontactAutPhoneRemove(parentIndex, childrenIndex) {
    this.removeAgencyAutContactPhoneControl(parentIndex,childrenIndex);
    if (!this.IsNullOrGuidEmpty(this.Agency.AbcontAut[parentIndex].Abphone[childrenIndex].PhoneId)) {
      this.Agency.AbcontAut[parentIndex].Abphone[childrenIndex].ControlUpdate = false;
    } else {      
      this.Agency.AbcontAut[parentIndex].Abphone.splice(childrenIndex, 1);      
    }
  }
  onClickcontactAutEmailRemove(parentIndex, childrenIndex) {    
    this.removeAgencyAutContactEmailControl(parentIndex,childrenIndex);
    if (!this.IsNullOrGuidEmpty(this.Agency.AbcontAut[parentIndex].Abemail[childrenIndex].EmailId)) {
      this.Agency.AbcontAut[parentIndex].Abemail[childrenIndex].ControlUpdate = false;      
    } else {
      this.Agency.AbcontAut[parentIndex].Abemail.splice(childrenIndex, 1);
    }
  }
  onClickAgencyEmailRemove(childrenIndex) {
    this.removeAgencyEmailControl(childrenIndex);
    if (!this.IsNullOrGuidEmpty(this.Agency.Abemail[childrenIndex].EmailId)) {
      this.Agency.Abemail[childrenIndex].ControlUpdate = false;      
    } else {
      this.Agency.Abemail.splice(childrenIndex, 1);
    }    
    //https://www.concretepage.com/angular/angular-formarray-validation
  }
  onClickAgencyPhoneRemove(childrenIndex) {
    this.removeAgencyPhoneControl(childrenIndex);
    if (!this.IsNullOrGuidEmpty(this.Agency.Abphone[childrenIndex].PhoneId)) {
      this.Agency.Abphone[childrenIndex].ControlUpdate = false;
    } else {
      this.Agency.Abphone.splice(childrenIndex, 1);
    }
  }
  onClickCarrierRemove(childrenIndex) {
    this.removeAgencyCarrierControl(childrenIndex);
    if (!this.IsNullOrGuidEmpty(this.Agency.Abcarrier[childrenIndex].CarrierId)) {      
      this.Agency.Abcarrier[childrenIndex].ControlUpdate = false;     
    } else {     
      this.Agency.Abcarrier.splice(childrenIndex, 1);     
    }
  }

  onClickOwnerOfficerRemove(childrenIndex) {
    this.removeAgencyOwnerControl(childrenIndex);
    if (!this.IsNullOrGuidEmpty(this.Agency.AbownerOfficer[childrenIndex].OwnerOfficerId)) {
      this.Agency.AbownerOfficer[childrenIndex].ControlUpdate = false;     
    } else {      
      this.Agency.AbownerOfficer.splice(childrenIndex, 1);     
    }   
  } 

  validForm(): boolean{      
    let ValidDocument:any = JSON.parse(this.getDocumentFile());    
    let StausFiles: boolean = (ValidDocument.PCLicense.length>0 && ValidDocument.CurrentEO.length>0 && ValidDocument.W9.length>0);   
    let StatusDraft: boolean = this.AgencyForm.get('AgencyName').valid && this.AgencyForm.get('AgencyEmailControl').valid;  
    let IdAgencyStatusDraft: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'Draft' ).CatlogsId; 
    let IdAgencyStatusNew: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'New' ).CatlogsId; 
    let IdAgencyStatusAccept: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'Accepted' ).CatlogsId; 
    let ErrorsAgency: ErrorModel[] = [];
    
    if(!this.currentUser){         
      if(this.AgencyForm.invalid || !StausFiles){        
        if(!StatusDraft){  
          this.AgencyService.onMessage("Draft");
          return false;
        }else{
              this.flagValid =1;
              this.Agency.AgencyStatus = IdAgencyStatusDraft;
        }  
      }else{
              this.flagValid =2;
              this.Agency.AgencyStatus = IdAgencyStatusNew;
           }      
    }else{       
      if(this.Agency.AgencyStatus == IdAgencyStatusNew || this.Agency.AgencyStatus == IdAgencyStatusAccept){        
        if((this.AgencyForm.invalid || !StausFiles)){    
                   
          this.AgencyService.onMessage("NotDraft");
          return false;
        }
      }
    }  
    
    return true;
  }  

  onClickSaveAgency(id) {  
    this.flagReturnSave = false; 
    this.Agency.ResendStatus = "00000000-0000-0000-0000-000000000000"; 

    this.flagValid = 0;    
    let statusMigrate:boolean = (this.Agency.AbagencyMigrate.length>0)?((this.Agency.AbagencyMigrate[0].AgencyRequestNumber!=0)?true:false):false;    
    console.log(this.AgencyForm.get('AgencyAutContactControl').errors);
    let constvalid:boolean=(!statusMigrate)?this.validForm():true;
    
    if(!constvalid){return;}
    
    if(this.currentUser){this.Agency.UserIdModify =  this.currentUser.Data.UserId;}
    let Redirect:boolean=false;
    var formData = new FormData();
    for (let file of this.PCLicense_files) {
      formData.append('PCLicense[]', file);
    }
    for (let file of this.CurrentEO_files) {
      formData.append('CurrentEO[]', file);
    }
    for (let file of this.W9_files) {
      formData.append('W9[]', file);
    }    

    if(this.checkedReSend){ this.Agency.ResendStatus = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'ResendStatus').CatlogsId; }    

    this.BloackUIStart('Upload File');
    this.AgencyDocumentService.PostAgencyDocumentUpload(formData, this.Agency.AgencyDocumentId).subscribe(
      (res) => {        
        this.BloackUIStop();
        this.BloackUIStart('Saving Agency');
        this.Agency.AgencyDocumentId = res.DocumentDirectory;        
        this.Agency.Abdocument[0].DocumentFile = this.getDocumentFile();
        this.loading = true;
        let StatusChenge:boolean=this.StatusCurrent!=this.Agency.AgencyStatus;    
        //if(StatusChenge){this.StatusCurrent = this.Agency.AgencyStatus;}    
        let IdAgencyStatusAccept: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'Accepted' ).CatlogsId;
        let IdAgencyStatusNew: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'New' ).CatlogsId;
        let IdAgencyStatusDraft: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsName === 'Draft' ).CatlogsId;
        let NameAgencyStatus: string = this.CatlogsAgencyStatus.find(e=> e.CatlogsId === this.StatusCurrent ).CatlogsName;        
        let timerIntervalDocument;

        let countDocumentGenerate: number=0;  
        let limitDocumentGenerate: number=4;          
        if(this.flagValid==0 && (StatusChenge || !this.IsNullOrGuidEmpty(this.Agency.ResendStatus)) && IdAgencyStatusAccept===this.Agency.AgencyStatus){
            timerIntervalDocument = setInterval(() => { 
              this.BloackUIStop();           
              if(!this.flagReturnSave){
                this.BloackUIStart('Document Generate '+countDocumentGenerate.toString()+' Of '+limitDocumentGenerate);
                this.AgencyService.getProgressDocument(this.Agency.AgencyRequestNumber)
                  .pipe(first())
                  .subscribe(
                    data => {                            
                        countDocumentGenerate=Object(data).length;
                        if(countDocumentGenerate>=limitDocumentGenerate){
                                this.BloackUIStop();
                                this.BloackUIStart('Document Generate '+countDocumentGenerate.toString()+' Of '+limitDocumentGenerate);                            
                                clearInterval(timerIntervalDocument);
                        }else{
                                this.BloackUIStop();
                                this.BloackUIStart('Document Generate '+countDocumentGenerate.toString()+' Of '+limitDocumentGenerate);
                        }
                    },
                    error => {
                    }    
                );
              }else{
                clearInterval(timerIntervalDocument);
              }
            }, 1000);
        }
        this.AgencyService.Save(this.Agency)
          .pipe(first())
          .subscribe(
            data => {              
               this.flagReturnSave=true;
                this.BloackUIStop();
                
                if(this.flagValid==1){
                  if (data.Save.Status) {
                    if(!this.currentUser){                      
                      if(data.Email!=null){                        
                        this.EmptyFormAgency();
                        this.setAgencyOut({AgencyId:data.Email.ModelRedirect.AgencyId, Token:data.Email.ModelRedirect.Token});
                      }    
                      this.AgencyService.onMessage("SendDraft",
                                                    true,
                                                    "ModelRedirect",
                                                    (data.Email)?data.Email.ModelRedirect:{
                                                                                            Router:"/agency-form",
                                                                                            AgencyId:this.Agency.AgencyId,
                                                                                            Token:this.Agency.Token
                                                                                          },
                                                    [{
                                                        Status:"MissingInformation", 
                                                        Redirect:true, 
                                                        UrlRedirect:"ModelRedirect", 
                                                        queryParameter:
                                                                      (data.Email)?data.Email.ModelRedirect:{
                                                                                                              Router:"/agency-form",
                                                                                                              AgencyId:this.Agency.AgencyId,
                                                                                                              Token:this.Agency.Token
                                                                                                            }
                                                    }]
                                                  );           
                    }                
                  }                    
                }

                if(this.flagValid==2){this.AgencyService.onMessage("SendNew")}  

                if(this.flagValid==0 && StatusChenge && IdAgencyStatusAccept==this.StatusCurrent){
                  this.AgencyService.onMessage("Accepted",true);Redirect=true;clearInterval(timerIntervalDocument);
                }else{
                  if(this.flagValid==0 && StatusChenge && (IdAgencyStatusNew==this.StatusCurrent || IdAgencyStatusDraft==this.StatusCurrent)){
                    this.AgencyService.onMessage("ReSendStatus",true);Redirect=true;
                    
                  }else{
                    if(this.flagValid==0 && StatusChenge && IdAgencyStatusAccept!=this.StatusCurrent){
                      this.AgencyService.onMessage(NameAgencyStatus,true);Redirect=true;
                    }else{
                      if(this.flagValid==0 && !StatusChenge){
                        this.AgencyService.onMessage("Save Data",true);Redirect=true;
                      }
                    }
                  }
                }                

                this.StatusCurrent = this.Agency.AgencyStatus;   
                if (data.Save.Status) {
                  if(this.currentUser){
                    /*if(Redirect){
                      //this.EmptyFormAgency();
                      let timerInterval;
                      timerInterval = setInterval(() => {
                          this.router.navigate(['/']);
                          clearInterval(timerInterval);
                      }, 7000);                    
                    }*/
                  }                
                }
            },
            error => {
              this.BloackUIStop();
              this.loading = false;
            }
          );
      }
    );
  }

  EmptyFormAgency() {
    this.Agency = new AgencyModel();
    this.DocumentsFiles = new FilesSaveModel();
    this.PCLicense_files = [];
    this.CurrentEO_files = [];
    this.W9_files = [];
  }

  getDocumentFile(): string {
    const PCLicense: string[] = [];
    const CurrentEO: string[] = [];
    const W9: string[] = [];

    for (let element of this.DocumentsFiles.PCLicense) {
      PCLicense.push(element);

    }
    for (let element of this.DocumentsFiles.CurrentEO) {
      CurrentEO.push(element);
    }
    for (let element of this.DocumentsFiles.W9) {
      W9.push(element);
    }

    for (let element of this.PCLicense_files) {
      PCLicense.push(element.name);

    }
    for (let element of this.CurrentEO_files) {
      CurrentEO.push(element.name);
    }
    for (let element of this.W9_files) {
      W9.push(element.name);
    }
    return JSON.stringify({ PCLicense, CurrentEO, W9 });
  }

  compareObjects(o1: any, o2: any): boolean {
    let statusCompare = o1.ProductWrittenCatlogsId === o2.ProductWrittenCatlogsId;
    if (statusCompare) {
      o1.ProductWrittenAgencyId = o2.ProductWrittenAgencyId;
      o1.ProductWrittenId = o2.ProductWrittenId;
      o1.ControlUpdate = o2.ControlUpdate;
    }
    return statusCompare;
  }

  BloackUIStart(message?: string) {
    console.log(message);
    this.blockUI.start(message);
  }

  BloackUIStop(time:number = 0) {      
    setTimeout(() => {
      this.blockUI.stop();
    }, time);

  }  
  
  minDateAppointedSince = new Date(1900, 0, 1);
  maxDateAppointedSince = new Date(2050, 0, 1);
  minDateOwnerOfficerDob = new Date(1900, 0, 1);
  maxDateOwnerOfficerDob = new Date(2050, 0, 1);    
  
  SetDataPickerAppointedSince(event, i){     
    let ValidDate: Date = new Date(event.value);    
    if(ValidDate.toString()!='Invalid Date'){         
      this.AgencyCarrierControl.controls[i].get("AppointedSince").setValue(formatDate(ValidDate, 'MM/dd/yyyy', 'en-US')); 
    }      
  }   
  ngModelDataPickerAppointedSince(i){   
    let ValidDate: Date = new Date(this.AgencyCarrierControl.controls[i].get("AppointedSince").value);    
    if(ValidDate.toString()!='Invalid Date'){            
      this.Agency.Abcarrier[i].AppointedSince =  formatDate(ValidDate, 'yyyy-MM-dd', 'en-US')+"T00:00:00";
    }
  }
  SetInitDataPickerAppointedSince(Model:any){    
    for(let index in Model.Abcarrier){      
      if(Model.Abcarrier[index].AppointedSince!=null){
        let ValidDate: Date = new Date(Model.Abcarrier[index].AppointedSince);    
        if(ValidDate.toString()!='Invalid Date'){         
          this.AgencyCarrierControl.controls[index].get("AppointedSince").setValue(formatDate(ValidDate, 'MM/dd/yyyy', 'en-US')); 
        }
      }
    }          
  }

  SetDataPickerOwnerOfficerDob(event, i){     
    let ValidDate: Date = new Date(event.value);    
    if(ValidDate.toString()!='Invalid Date'){         
      this.AgencyOwnerControl.controls[i].get("OwnerOfficerDob").setValue(formatDate(ValidDate, 'MM/dd/yyyy', 'en-US')); 
    }      
  }   
  ngModelDataPickerOwnerOfficerDob(i){   
    let ValidDate: Date = new Date(this.AgencyOwnerControl.controls[i].get("OwnerOfficerDob").value);    
    if(ValidDate.toString()!='Invalid Date'){            
      this.Agency.AbownerOfficer[i].Dob =  formatDate(ValidDate, 'yyyy-MM-dd', 'en-US')+"T00:00:00";
    }
  }
  SetInitDataPickerOwnerOfficerDob(Model:any){     
    for(let index in Model.AbownerOfficer){
      if(Model.AbownerOfficer[index].Dob!=null){
        let ValidDate: Date = new Date(Model.AbownerOfficer[index].Dob);    
        if(ValidDate.toString()!='Invalid Date'){ 
          this.AgencyOwnerControl.controls[index].get("OwnerOfficerDob").setValue(formatDate(ValidDate, 'MM/dd/yyyy', 'en-US')); 
        }
      }
    }          
  }  
}
