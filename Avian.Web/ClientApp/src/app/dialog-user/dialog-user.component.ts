import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserModel, ProfileUserModel, ProfileModel } from '../_models/users-model-data';
import { HttpEventType } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-user',
  templateUrl: 'dialog-user.component.html',
  styleUrls: ['dialog-user.component.less'],
})


export class DialogUserComponent {  
  @BlockUI() blockUI: NgBlockUI;
    User: UserModel;
    ProfileUser = new ProfileUserModel;
    Profile: ProfileModel;
    UserProfie:UserModel;
    UserForm: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      public dialog: MatDialog,
      private UserService: UserService,
      public dialogRef: MatDialogRef<DialogUserComponent>,
      @Inject(MAT_DIALOG_DATA)
      public data:any
    ) {
      
    }

    intAddFormGroup(Model:any){    
      let index:number=0;
      for (let element of Model.ProfileUser) {
        element.Profile.forEach(element_ => {
          if(index>0){this.addProfileControl();}
          index++;
        });        
      }
    }

    intValidForm(){
      this.UserForm = this.formBuilder.group({
        FirstName: [''],
        UserStatus: [''],
        LastName: [''],      
        UserName: [''],
        Email: [''],
        Password: [''],        
        ProfileControl: this.formBuilder.array(
          [
            this.createProfileFormGroup()
          ],
          [ ]
      ), 
      });
    }

    //Agency - Carrier ArrayControl Valid////////////////
    createProfileFormGroup() {
      return this.formBuilder.group({           
          Profile: [''],
          Permission: ['']
      })
    } 
    get ProfileControl(): FormArray {
      return this.UserForm.get('ProfileControl') as FormArray;
    }  
    addProfileControl() {
      let fg = this.createProfileFormGroup();
      this.ProfileControl.push(fg);
    }
    removeProfileControl(idx: number, jdx:number) {
      this.ProfileControl[idx].Profile.removeAt(jdx);
    }

    ngOnInit() {               
      this.intValidForm(); 
      this.User =  new UserModel();
      if(this.data.User!=null){
        this.intAddFormGroup(this.data.User);
        this.User = this.data.User;
      }
    }   

    SaveUser(){
      this.BloackUIStart();
      this.UserService.AddUser(this.User)
          .pipe(first())
          .subscribe(
            data => {
              this.BloackUIStop();
              if (data.Status) {
                this.closeDialog();
              }
            },
            error => {
              this.BloackUIStop();
            }
          );
    }

    closeDialog(/*obj: any*/) {    
      this.dialogRef.close(/*obj*/);
    } 

    IsNullOrGuidEmpty(Data:any){
      return (Data == null || Data == '00000000-0000-0000-0000-000000000000')?true:false;
    }

    public ProfilePermissions: any[]=[];

    profileChanged(i,j,value){             
      this.User.ProfileUser[i].Profile[j].Permissions = this.data.Profile[this.data.Profile.findIndex(e=> e.ProfileId === value)].Permissions;          
    }

    compareProfile(o1: any, o2: any): boolean {           
      let statusCompare = o1 === o2;
      if (statusCompare) {
        o1 = o2;     
      }
      return statusCompare;
    }

    compareObjects(o1: any, o2: any): boolean {     
      let statusCompare = o1.CatlogsId === o2.CatlogsId;
      if (statusCompare) {
        o1.CatlogsId = o2.CatlogsId;     
      }
      return statusCompare;
    }

    onClickProfileAdd(i,j) {   
      this.Profile =  new ProfileModel();
      this.User.ProfileUser[i].Profile.push(Object.assign({},  this.Profile));   
      this.addProfileControl();         
    }
    
    onClickProfileRemove(i,j){
      if(this.User.ProfileUser[i].Profile[j].ProfileId!=null){
        this.User.ProfileUser[i].Profile[j].ControlUpdate=false;
      }else{
        this.removeProfileControl(i,j);
        this.User.ProfileUser[i].Profile.splice(j,1);
      }      
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
}

