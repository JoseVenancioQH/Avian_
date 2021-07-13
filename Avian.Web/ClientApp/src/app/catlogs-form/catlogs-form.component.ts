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
import { DialogCatlogsFormComponent } from '../dialog-catlogs-form/dialog-catlogs-form.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { StatesGetService } from '../_services/StatesGet.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-catlogs-form',
  templateUrl: './catlogs-form.component.html',
  styleUrls: ['./catlogs-form.component.scss']
})

export class CatlogsFormComponent implements OnInit {
  displayedColumnsCatlogs: string[] = ['CatlogsName', 'CatlogsPrefix', 'CatlogsType','star'];
  displayedColumnsStates: string[] = ['StateName', 'StatePrefix','star'];
  displayedColumnsProductWritten: string[] = ['ProductWrittenCatlogsName','star'];
  displayedColumnsProfile: string[] = ['ProfileName','star'];
  public dataSourceCatlogs = new MatTableDataSource<CatlogsElement>();
  public dataSourceStates = new MatTableDataSource<StatesElement>();
  public dataSourceCatlogsProductWritten = new MatTableDataSource<ProductWrittenElement>();
  public dataSourceProfile = new MatTableDataSource<ProfileElement>();
  //dataSource = ELEMENT_DATA;

  
  CatlogsTitle: any[] =[];
  CatlogsAgencyStatus: any[] =[];
  CatlogsAgencyType: any[] =[];
  CatlogsPermissionsCRUD: any[] =[];
  CatlogsPermissions: any[] =[];
  Profile: any[] =[];
  
  States: any[] =[];
  CatlogsProductWritten: any[] =[];

  Catlogs: any[] =[];

  @ViewChild('MatPaginatorCatlogs', { static: true }) paginatorCatlogs: MatPaginator;
  @ViewChild('MatSortCatlogs', { static: true }) sortCatlogs: MatSort;
  @ViewChild('MatTableCatlogs', { static: true }) tableCatlogs: MatTable<any>;

  @ViewChild('MatPaginatorStates', { static: true }) paginatorStates: MatPaginator;
  @ViewChild('MatSortStates', { static: true }) sortStates: MatSort;
  @ViewChild('MatTableStates', { static: true }) tableStates: MatTable<any>;

  @ViewChild('MatPaginatorProductWritten', { static: true }) paginatorProductWritten : MatPaginator;
  @ViewChild('MatSortProductWritten', { static: true }) sortProductWritten : MatSort;
  @ViewChild('MatTableProductWritten', { static: true }) tableProductWritten : MatTable<any>;

  @ViewChild('MatPaginatorProfile', { static: true }) paginatorProfile : MatPaginator;
  @ViewChild('MatSortProfile', { static: true }) sortProfile : MatSort;
  @ViewChild('MatTableProfile', { static: true }) tableProfile : MatTable<any>;

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    
    private DownloadService: DownloadService,
    private AgencyService: AgencyService,
    private CatlogsGetService: CatlogsGetService,
    private StatesGetService: StatesGetService,
    private UserService: UserService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    //this.CatlogsAgencyStatus = this.CatlogsGetService.getCatlogsAgencyStatus();
    
      this.CatlogsTitle = this.CatlogsGetService.CatlogsTitleValue;
      this.CatlogsAgencyStatus = this.CatlogsGetService.CatlogsAgencyStatusValue;
      this.CatlogsAgencyType = this.CatlogsGetService.CatlogsAgencyTypeValue;
      this.CatlogsPermissionsCRUD = this.CatlogsGetService.CatlogsPermissionsCRUDValue;
      this.CatlogsPermissions = this.CatlogsGetService.CatlogsPermissionsValue;

      this.Profile = this.CatlogsGetService.CatlogsProfileValue;
      this.CatlogsProductWritten = this.CatlogsGetService.CatlogsProductWrittenValue;
      this.States = this.StatesGetService.StatesValue;

      this.Catlogs.push(...this.CatlogsTitle);
      this.Catlogs.push(...this.CatlogsAgencyStatus);
      this.Catlogs.push(...this.CatlogsAgencyType);
      this.Catlogs.push(...this.CatlogsPermissionsCRUD);
      this.Catlogs.push(...this.CatlogsPermissions);
  }

  

  viewCatlogs(Index) {         
    const dialogRef = this.dialog.open(DialogCatlogsFormComponent, {
      width: '650px',
      data: {
        Catlogs: this.dataSourceCatlogs.data[Index]
      }
    });      
  }  

  ngOnInit() {

    this.dataSourceCatlogs.paginator = this.paginatorCatlogs;
    this.dataSourceCatlogs.sort = this.sortCatlogs;
    this.dataSourceCatlogs.data = Object(this.Catlogs); 

    this.dataSourceStates.paginator = this.paginatorStates;
    this.dataSourceStates.sort = this.sortStates;
    this.dataSourceStates.data = Object(this.States);   
    
    this.dataSourceCatlogsProductWritten.paginator = this.paginatorProductWritten ;
    this.dataSourceCatlogsProductWritten.sort = this.sortProductWritten;  
    this.dataSourceCatlogsProductWritten.data = Object(this.CatlogsProductWritten);   
    
    this.dataSourceProfile.paginator = this.paginatorProfile;
    this.dataSourceProfile.sort = this.sortProfile;
    this.dataSourceProfile.data = Object(this.Profile);    
    
    /*this.BloackUIStart("Loading Data");
    this.AgencyService.getAgencyStatusEmail()
      .pipe(first())
      .subscribe(
        data => {          
          this.BloackUIStop();
          this.dataSourceCatlogs.data = Object(data);
          if (data) {
          } else {
          }
        },
        error => {
        }    
    );*/    
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

//const ELEMENT_DATA_CATLOGS: CatlogsElement[] = [];

export interface CatlogsElement {
  CatlogsId: string;
  CatlogsName: string
  CatlogsPrefix: string;
  CatlogsType: string;
}

//const ELEMENT_DATA: StatesElement[] = [];

export interface StatesElement {
  StateId: string;
  StateName: string
  StatePrefix: string;
}

//const ELEMENT_DATA: ProductWrittenElement[] = [];

export interface ProductWrittenElement {
  ProductWrittenCatlogsId: string;
  ProductWrittenCatlogsName: string
}

export interface ProfileElement {
  ProfileId: string;
  ProfileName: string
}