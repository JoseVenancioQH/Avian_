import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry, MatTable } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { first } from 'rxjs/operators';
import { DialogDocumentComponent } from '../dialog-document/dialog-document.component';
import { AgencyService } from '../_services/agency.service';
import { AuthenticationService } from '../_services/authentication.service';
import { CatlogsGetService } from '../_services/CatlogsGet.service';
import { DownloadService } from '../_services/download.service';

@Component({
  selector: 'app-broker-information',
  templateUrl: './broker-information.component.html',
  styleUrls: ['./broker-information.component.scss']
})

export class BrokerInformationComponent implements OnInit {
  displayedColumns: string[] = ['DateTimeCreate', 'AgencyRequestNumber', 'AgencyName', 'Abemail', 'Abphone', 'AgencyStatus', 'star'];
  public dataSource = new MatTableDataSource<InformationElement>();
  //dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private AgencyService: AgencyService,
    private DownloadService: DownloadService,
    private AuthenticationService: AuthenticationService,
    private CatlogsGetService: CatlogsGetService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.User = this.AuthenticationService.currentUserValue;    
    this.User.Data.ProfileUser.forEach(UserP => {
      UserP.Profile.forEach(Profile => {
        Profile.Permissions.forEach(Permissions => {          
          if(Permissions.CatlogsType=='PermissionsCRUD'){
            this.PermissionsCRUD.push(Permissions.CatlogsName);
          }
        });
      });
   });
  }

  public CatlogsAgencyStatus: any = [];
  public User: any = [];
  public PermissionsCRUD: any = [];

  viewAgency(Index) {    
    this.AgencyService.setGuid(Index);
    this.router.navigate(['agency-form/']); 
  }

  deleteAgency(Index) {    
    this.BloackUIStart("Deleting...");
    this.AgencyService.deleteAgency({AgencyId:Index,UserId:this.User.Data.UserId}).subscribe(res => {
      this.BloackUIStop();      
      if(Object(res).Status){                         
          this.dataSource = new MatTableDataSource<InformationElement>(this.dataSource.data.splice(this.dataSource.data.findIndex(a=>a.AgencyId==Index),1));          
      }
    });    
  }  

  checkPermissions(Permissions_){
    return this.PermissionsCRUD.findIndex(a=>a==Permissions_)>-1;
  }

  viewDocument(Index) {  
    this.DownloadService.getFileList(Index).subscribe(res => {
          const dialogRef = this.dialog.open(DialogDocumentComponent, {
            width: '650px',
            data: {
                    Document: res
            }
      });
    });      
  }  

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.BloackUIStart("Loading Catlogs");
    this.CatlogsGetService.getCatlogs().subscribe(res => {
      for (let element of Object(res)) {
        if (element.CatlogsType == 'AgencyStatus') {
          this.CatlogsAgencyStatus.push(element);

        }
      }
      this.BloackUIStop();
      this.BloackUIStart("Loading Data");
      this.AgencyService.getAgency()
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
    });

    
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

const ELEMENT_DATA: InformationElement[] = [];

export interface InformationElement {
  DateTimeCreate: string;
  AgencyRequestNumber: number
  AgencyName: string;
  Abemail: any;
  Abphone: any;
  AgencyStatus: string;
  AgencyId: string;
}
