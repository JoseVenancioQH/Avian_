import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserModel, ProfileUserModel,  CatlogsModel} from '../_models/users-model-data';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-dialog-user-permissions',
  templateUrl: 'dialog-user-permissions.component.html',
  styleUrls: ['dialog-user-permissions.component.less'],
})

export class DialogUserPermissionsComponent implements OnInit {

    User: UserModel;
    Catlogs: CatlogsModel;
    ProfileUser = new ProfileUserModel;
    UserProfie:UserModel;
    PermissionsForm: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      public dialog: MatDialog,
      private UserService: UserService,
      public dialogRef: MatDialogRef<DialogUserPermissionsComponent>,
      @Inject(MAT_DIALOG_DATA)
      public data:any
    ) {
      
    }

    intValidForm(){
      this.PermissionsForm = this.formBuilder.group({
        PermissionsType: [''],
        PermissionsName: [''],
        PermissionsPrefix: ['']
      });
    }   

    ngOnInit() {           
      this.intValidForm(); 
      this.Catlogs =  new CatlogsModel();
      this.Catlogs = Object.assign({},  this.Catlogs);       
    }   

    SavePermissions(){
      
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
