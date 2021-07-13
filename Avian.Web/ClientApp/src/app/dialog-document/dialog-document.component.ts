import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DownloadService } from '../_services/download.service';
import { HttpEventType } from '@angular/common/http';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-document',
  templateUrl: 'dialog-document.component.html',
  styleUrls: ['dialog-document.component.less'],
})
export class DialogDocumentComponent {  

  constructor(
    public dialog: MatDialog,
    private DownloadService: DownloadService,
    public dialogRef: MatDialogRef<DialogDocumentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data:any
  ) {


  }

  DownloadFile(Model:any){
    this.DownloadService.downloadFile("DocumentGenerate", Model.Id, Model.Root,  Model.File).subscribe(
      data => {
        switch (data.type) {          
          case HttpEventType.Response:            
            const downloadedFile = new Blob([data.body], { type: data.body.type });
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.download = Model.File;
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

  closeDialog(/*obj: any*/) {    
    this.dialogRef.close(/*obj*/);
  } 

}

