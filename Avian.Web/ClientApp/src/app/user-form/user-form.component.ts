import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatTable } from '@angular/material';
import { CatlogsGetService } from '../_services/CatlogsGet.service';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { UserModel } from '../_models/users-model-data';
import {MatTreeModule} from '@angular/material/tree';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {DialogUserComponent} from '../dialog-user/dialog-user.component';
import {DialogUserProfileComponent} from '../dialog-user-profile/dialog-user-profile.component';
import {DialogUserPermissionsComponent} from '../dialog-user-permissions/dialog-user-permissions.component';





@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.less']
})

export class UserFormComponent implements OnInit {
    displayedColumns: string[] = ['UserName', 'Password', 'FirstName', 'LastName', 'Email', 'ProfileUser', 'star'];
    public dataSource = new MatTableDataSource<UserModel>();
    //dataSource = ELEMENT_DATA;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
    @ViewChild(MatSort, {static: true}) sort: MatSort; 
    @ViewChild(MatTable, {static: true}) table: MatTable<any>; 

    CatlogsPermissionsCRUD: any[] =[];
    CatlogsPermissions: any[] =[];
    Profile: any[] =[];

    constructor(
      private UserService: UserService,
      private CatlogsGetService: CatlogsGetService,
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer,
      private route: ActivatedRoute,
      private router: Router,      
      public dialog: MatDialog
    ) {
      this.CatlogsPermissionsCRUD = this.CatlogsGetService.CatlogsPermissionsCRUDValue;
      this.CatlogsPermissions = this.CatlogsGetService.CatlogsPermissionsValue;
      this.Profile = this.UserService.ProfileValue;
    }    

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;           

      this.UserService.getUsers()
        .pipe(first())
        .subscribe(
          data => {
              console.log(data);
              console.log(Object(data));
              this.dataSource.data = Object(data);              
              if (data) {
              } else {
              }
          },
          error => {
          }
        );
    }

    viewUser(UserId:string=null){
      this.AddUser(UserId);
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    AddUser(UserId:string=null){       
      const dialogRef = this.dialog.open(DialogUserComponent, {
        width: '450px',
        data: { 
              User: (UserId!=null)?this.dataSource.data.find(a=>a.UserId==UserId):UserId,
              Profile: this.Profile,
              PermissionCRUD: this.CatlogsPermissionsCRUD,
              Permission: this.CatlogsPermissions                                  
        }
      });
    }

    AddProfile(){
      const dialogRef = this.dialog.open(DialogUserProfileComponent, {
        width: '450px',
        data: {                        
              Profile: this.Profile,
              PermissionCRUD: this.CatlogsPermissionsCRUD,
              Permission: this.CatlogsPermissions                                  
        }
      });
    }

    AddPermissions(){
      const dialogRef = this.dialog.open(DialogUserPermissionsComponent, {
        width: '450px',
        data: {                        
              Profile: this.Profile,
              PermissionCRUD: this.CatlogsPermissionsCRUD,
              Permission: this.CatlogsPermissions                                  
        }
      });
    }
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];*/

/*const ELEMENT_DATA: InformationElement[] = [
  { DateTimeCreate: '2020-03-25T11:46:00', AgencyRequestNumber: 1, AgencyName: 'New Agency', AgencyEmail: 'qqw@wwww.com', AgencyPhone: 'qqw@wwww.comH', AgencyStatus: 'H' },  
];*/

const ELEMENT_DATA: UserModel[] = [];