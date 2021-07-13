import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.less'],
})
export class DialogComponent {  
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data:any
  ) {


  } 

  public closeDialog(/*obj: any*/) {    
    this.dialogRef.close(/*obj*/);
  } 

}

