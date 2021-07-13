import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserModel, ProfileUserModel, ProfileModel } from '../_models/users-model-data';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-dialog-user-profile',
  templateUrl: 'dialog-user-profile.component.html',
  styleUrls: ['dialog-user-profile.component.less'],
})
export class DialogUserProfileComponent implements OnInit {

  User: UserModel;
    ProfileUser = new ProfileUserModel;
    Profile:ProfileModel;
    ProfileForm: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      public dialog: MatDialog,
      private UserService: UserService,
      public dialogRef: MatDialogRef<DialogUserProfileComponent>,
      @Inject(MAT_DIALOG_DATA)
      public data:any
    ) {
      
    }

    intValidForm(){
      this.ProfileForm = this.formBuilder.group({
        ProfileName: [''],
      });
    }   

    ngOnInit() {           
      this.intValidForm(); 
      this.Profile =  new ProfileModel();
      this.Profile = Object.assign({},  this.Profile);       
    }   

    SaveProfile(){
      console.log(this.User);
      return;
      /*this.UserService.AddUser().subscribe(
        data => {
        },
        error => {        
        }
      );*/
    }  

}
