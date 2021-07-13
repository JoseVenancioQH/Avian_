import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel, ProfileModel, PermissionsModel } from '../_models/users-model-data';
import { StatesGetService } from '../_services/StatesGet.service';
//import { EncrDecrService } from '../_services/EncrDecrService.service';
import { map } from 'rxjs/operators';

import {
  CatlogProductWrittenModel
} from '../_models/agency-model-data';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class CatlogsGetService extends BaseService {
  @BlockUI() blockUI: NgBlockUI;
  private CatlogsTitleSubject: BehaviorSubject<any>;  
  public CatlogsTitle: Observable<any>;  

  private CatlogsAgencyStatusSubject: BehaviorSubject<any>;  
  public CatlogsAgencyStatus: Observable<any>;

  private CatlogsAgencyTypeSubject: BehaviorSubject<any>;  
  public CatlogsAgencyType: Observable<any>;

  private CatlogsProductWrittenSubject: BehaviorSubject<any>;  
  public CatlogsProductWritten: Observable<any>; 

  private CatlogsPermissionsCRUDSubject: BehaviorSubject<any>;  
  public CatlogsPermissionsCRUD: Observable<any>; 

  private CatlogsPermissionsSubject: BehaviorSubject<any>;  
  public CatlogsPermissions: Observable<any>;  

  private CatlogsProfileSubject: BehaviorSubject<any>;  
  public CatlogsProfile: Observable<any>;  

  constructor(
    private http: HttpClient,
    private StatesGetService: StatesGetService,
    //private EncrDecr: EncrDecrService,
  ) {
    super();
    this.CatlogsTitleSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('CatlogsTitle')));
    this.CatlogsTitle = this.CatlogsTitleSubject.asObservable();

    this.CatlogsAgencyStatusSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('CatlogsAgencyStatus')));
    this.CatlogsAgencyStatus = this.CatlogsAgencyStatusSubject.asObservable();

    this.CatlogsAgencyTypeSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('CatlogsAgencyType')));
    this.CatlogsAgencyType = this.CatlogsAgencyTypeSubject.asObservable();

    this.CatlogsProductWrittenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('CatlogsProductWritten')));
    this.CatlogsProductWritten = this.CatlogsProductWrittenSubject.asObservable();

    this.CatlogsPermissionsCRUDSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('CatlogsPermissionsCRUD')));
    this.CatlogsPermissionsCRUD = this.CatlogsPermissionsCRUDSubject.asObservable();

    this.CatlogsPermissionsSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('CatlogsPermissions')));
    this.CatlogsPermissions = this.CatlogsPermissionsSubject.asObservable();

    this.CatlogsProfileSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('Profile')));
    this.CatlogsProfile = this.CatlogsProfileSubject.asObservable();

    this.setController('CatlogsGet');
  }

  public get CatlogsTitleValue(): any {    
    return this.CatlogsTitleSubject.value;
  }

  public get CatlogsAgencyStatusValue(): any {    
    return this.CatlogsAgencyStatusSubject.value;
  }

  public get CatlogsAgencyTypeValue(): any {    
    return this.CatlogsAgencyTypeSubject.value;
  }

  public get CatlogsProductWrittenValue(): any {    
    return this.CatlogsProductWrittenSubject.value;
  }

  public get CatlogsPermissionsCRUDValue(): any {    
    return this.CatlogsPermissionsCRUDSubject.value;
  }

  public get CatlogsPermissionsValue(): any {    
    return this.CatlogsPermissionsSubject.value;
  }

  public get CatlogsProfileValue(): any {    
    return this.CatlogsProfileSubject.value;
  }

  public getCatlogs = () => this.http.get(this.endPoint());

  AddCatlog(Catlog: any) {
    return this.http.post<any>(`${this.endPoint('Add')}`, Catlog)
      .pipe(map(Catlog => {       
        return Catlog;
      }));
  }
  

  setCatlogs() {   
    if(localStorage.getItem('CatlogsAgencyStatus')==null){      
      let CatlogsTitle_ = [];
      let CatlogsAgencyStatus_ = [];
      let CatlogsAgencyType_ = [];
      let CatlogsProductWritten_ = [];
      let CatlogsPermissionsCRUD_ = [];
      let CatlogsPermissions_ = [];
      let CatlogsProfile_ = [];
      let CatlogProductWritten_ = new CatlogProductWrittenModel;
      this.BloackUIStart('Loadind Catlogs');
      this.getCatlogs().subscribe(res => {
        for (let element of Object(res)) {
            if (element.CatlogsType == 'ProductWritten') {
                CatlogProductWritten_ = new CatlogProductWrittenModel();
                CatlogProductWritten_.ProductWrittenCatlogsId = element.CatlogsId;
                CatlogProductWritten_.ProductWrittenCatlogsName = element.CatlogsName;
                CatlogProductWritten_.ProductWrittenAgencyId = "00000000-0000-0000-0000-000000000000";
                CatlogProductWritten_.ProductWrittenId = "00000000-0000-0000-0000-000000000000";
                CatlogProductWritten_.ControlUpdate = true;
                CatlogProductWritten_.DateTimeUpdate = null;
                CatlogsProductWritten_.push(CatlogProductWritten_);
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
            if (element.CatlogsType == 'PermissionsCRUD') {
              element.ControlUpdate = true;
              CatlogsPermissionsCRUD_.push(element);
            }
            if (element.CatlogsType == 'Permissions') {
              element.ControlUpdate = true;
              CatlogsPermissions_.push(element);
            }
            if (element.CatlogsType == 'Profile') {
                let Profile: ProfileModel;
                let Permissions_: PermissionsModel;
                Profile = new ProfileModel();                
                Profile.ProfileId = element.CatlogsId;
                Profile.ProfileName = element.CatlogsName;
                element.AbcatlogsProfileCatlogsIdProfileNavigation.forEach(Permissions => {      
                  if(Permissions.CatlogsIdPermissions!=null){  
                    Permissions_ = new PermissionsModel();
                    Permissions_.CatlogsId = Permissions.CatlogsIdPermissions;                                  
                    Profile.Permissions.push(Permissions_);
                  }               
                });       

                let indexNull: number = Profile.Permissions.findIndex(a=>a.CatlogsId==null);
                if(indexNull>-1){
                  Profile.Permissions.splice(indexNull,1);  
                }                
                
                CatlogsProfile_.push(Profile);                                 
            }
        }      
        localStorage.setItem('CatlogsProductWritten', JSON.stringify(CatlogsProductWritten_));
        localStorage.setItem('CatlogsTitle', JSON.stringify(CatlogsTitle_));
        localStorage.setItem('CatlogsAgencyType', JSON.stringify(CatlogsAgencyType_));
        localStorage.setItem('CatlogsAgencyStatus', JSON.stringify(CatlogsAgencyStatus_));    
        localStorage.setItem('CatlogsPermissionsCRUD', JSON.stringify(CatlogsPermissionsCRUD_));
        localStorage.setItem('CatlogsPermissions', JSON.stringify(CatlogsPermissions_));    
        localStorage.setItem('Profile', JSON.stringify(CatlogsProfile_));    
        this.CatlogsTitleSubject.next(CatlogsTitle_);
        this.CatlogsAgencyStatusSubject.next(CatlogsAgencyStatus_);
        this.CatlogsAgencyTypeSubject.next(CatlogsAgencyType_);
        this.CatlogsProductWrittenSubject.next(CatlogsProductWritten_);
        this.CatlogsPermissionsCRUDSubject.next(CatlogsPermissionsCRUD_);
        this.CatlogsPermissionsSubject.next(CatlogsPermissions_);
        this.CatlogsProfileSubject.next(CatlogsProfile_);
        this.BloackUIStop();       
      });
    }
  }

  setNull(){
    this.CatlogsTitleSubject.next(null);
    this.CatlogsAgencyStatusSubject.next(null);
    this.CatlogsAgencyTypeSubject.next(null);
    this.CatlogsProductWrittenSubject.next(null);
    this.CatlogsPermissionsCRUDSubject.next(null);
    this.CatlogsPermissionsSubject.next(null);
    this.CatlogsProfileSubject.next(null);
  }

  getCatlogsProfile() {
    return this.CatlogsProfileValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsProductWritten'))));
  }

  getCatlogsProductWritten() {
    return this.CatlogsProductWrittenValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsProductWritten'))));
  }
  getCatlogsTitle() {
    return this.CatlogsTitleValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsTitle'))));
  }
  getCatlogsAgencyStatus() {
    return this.CatlogsAgencyStatusValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyStatus'))));
  }
  getCatlogsAgencyType() {
    return this.CatlogsAgencyTypeValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyType'))));
  }
  getCatlogsPermissionsCRUD() {
    return this.CatlogsPermissionsCRUDValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyStatus'))));
  }
  getCatlogsPermissions() {
    return this.CatlogsPermissionsValue;
    //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyType'))));
  }

  setEncrypt(data: any) {
    //return this.EncrDecr.set(data);
    return data;
  }
  getEncrypt(data: any) {
    //return this.EncrDecr.get(data);
    return data;
  }
  BloackUIStart(message?: string) {    
    this.blockUI.start(message);
  }

  BloackUIStop(time:number = 0) {      
    setTimeout(() => {
      this.blockUI.stop();
    }, time);

  }

}


