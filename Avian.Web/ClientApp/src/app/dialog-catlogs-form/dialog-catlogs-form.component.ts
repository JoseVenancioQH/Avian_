import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { EmailStatusModel} from '../_models/agency-model-data';
import { HttpEventType } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { first } from 'rxjs/operators';
import { CatlogsGetService } from '../_services/CatlogsGet.service';


@Component({
  selector: 'app-dialog-catlogs-form',
  templateUrl: 'dialog-catlogs-form.component.html',
  styleUrls: ['dialog-catlogs-form.component.less'],
})


export class DialogCatlogsFormComponent {  
  @BlockUI() blockUI: NgBlockUI;
    EmailStatus: EmailStatusModel;    

    
    CatlogsForm: FormGroup;
    constructor(
      private formBuilder: FormBuilder,
      public dialog: MatDialog,
      public CatlogsGetService:CatlogsGetService,
      public dialogRef: MatDialogRef<DialogCatlogsFormComponent>,
      @Inject(MAT_DIALOG_DATA)
      public data:any
    ) {      
           
    }

    intAddFormGroup(Model:any){    
      let index:number=0;
      for (let element of Model.EmailTo) {
        
          if(index>0){this.addEmailToControl();}
          index++;
        
      }
      index=0;
      for (let element of Model.EmailCc) {        
          if(index>0){this.addEmailCcControl();}
          index++;        
      }
    }

    intValidForm(){
      this.CatlogsForm = this.formBuilder.group({   
        EmailStatus: [''],      
        TypeSend: [''],
        StatusCatlogs: [''],  
        EmailCcControl: this.formBuilder.array(
          [
            this.createEmailCcFormGroup()
          ],
          [ ]
       ),
        EmailToControl: this.formBuilder.array(
          [
            this.createEmailToFormGroup()
          ],
          [ ]
       ), 
      });
    }

    //Agency - Carrier ArrayControl Valid////////////////
    createEmailToFormGroup() {
      return this.formBuilder.group({           
          EmailTo: ['']
      })
    } 
    get EmailToControl(): FormArray {
      return this.CatlogsForm.get('EmailToControl') as FormArray;
    }  
    addEmailToControl() {
      let fg = this.createEmailToFormGroup();
      this.EmailToControl.push(fg);
    }
    removeEmailToControl(idx: number) {
      this.EmailToControl.removeAt(idx);
    }

    createEmailCcFormGroup() {
      return this.formBuilder.group({           
          EmailCc: ['']
      })
    } 
    get EmailCcControl(): FormArray {
      return this.CatlogsForm.get('EmailCcControl') as FormArray;
    }  
    addEmailCcControl() {
      let fg = this.createEmailCcFormGroup();
      this.EmailCcControl.push(fg);
    }
    removeEmailCcControl(idx: number) {
      this.EmailCcControl.removeAt(idx);
    }

    ngOnInit() {               
      this.intValidForm(); 
      this.EmailStatus =  new EmailStatusModel();
      if(this.data.EmailStatus!=null){
        this.intAddFormGroup(this.data.EmailStatus);
        this.EmailStatus = this.data.EmailStatus;
      }
    }   

    SaveEmailStatus(){     
      this.BloackUIStart('Update Data');
      this.CatlogsGetService.AddCatlog(this.EmailStatus)
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

    trackByIdx(index: number, obj: any): any {
      return index;
    }
    
    onClickEmailToAdd() {         
      this.EmailStatus.EmailTo.push("");   
      this.addEmailToControl();         
    }
    
    onClickEmailToRemove(i){      
        this.removeEmailToControl(i);
        this.EmailStatus.EmailTo.splice(i,1);
    }

    onClickEmailCcAdd() {         
      this.EmailStatus.EmailCc.push("");   
      this.addEmailCcControl();         
    }
    
    onClickEmailCcRemove(i){      
        this.removeEmailCcControl(i);
        this.EmailStatus.EmailCc.splice(i,1);
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

