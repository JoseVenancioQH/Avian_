import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AgencyService } from '../_services/agency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatTable } from '@angular/material';
import { CatlogsGetService } from '../_services/CatlogsGet.service';
import { DownloadService } from '../_services/download.service';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogStatusEmailComponent } from '../dialog-statusemail/dialog-statusemail.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-status-email',
  templateUrl: './status-email.component.html',
  styleUrls: ['./status-email.component.scss']
})

export class StatusEmailComponent implements OnInit {
  displayedColumns: string[] = ['EmailStatus', 'EmailTo', 'EmailCc','star'];
  public dataSource = new MatTableDataSource<EmailStatusElement>();
  //dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private AgencyService: AgencyService,
    private DownloadService: DownloadService,
    private CatlogsGetService: CatlogsGetService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    //this.CatlogsAgencyStatus = this.CatlogsGetService.getCatlogsAgencyStatus();
  }

  public CatlogsAgencyStatus: any = [];  

  viewEmailStatus(Index) {     
    console.log(this.dataSource.data[Index]);
    const dialogRef = this.dialog.open(DialogStatusEmailComponent, {
      width: '650px',
      data: {
        EmailStatus: this.dataSource.data[Index]
      }
    });      
  }  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.BloackUIStart("Loading Data");
    this.AgencyService.getAgencyStatusEmail()
      .pipe(first())
      .subscribe(
        data => {          
          this.BloackUIStop();
          this.dataSource.data = Object(data);
          if (data) {
          } else {
          }
        },
        error => {
        }    
    );    
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

const ELEMENT_DATA: EmailStatusElement[] = [];

export interface EmailStatusElement {
  EmailStatus: string;
  EmailTo: number
  EmailCc: string;
}
