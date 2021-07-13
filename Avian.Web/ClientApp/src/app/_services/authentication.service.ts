import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, UrlTree, UrlSegment, UrlSegmentGroup, PRIMARY_OUTLET, DefaultUrlSerializer, RouterState, ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { CurrentUserModel } from '@app/_models/users-model-data';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  private currentUserSubject: BehaviorSubject<CurrentUserModel>;
  public currentUser: Observable<CurrentUserModel>;

 

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.currentUserSubject = new BehaviorSubject<CurrentUserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

   
    this.setController('Users');
  }

  public get currentUserValue(): CurrentUserModel {
    return this.currentUserSubject.value;
  }
 
  login(username: string, password: string) {
    return this.http.post<CurrentUserModel>(`${this.endPointValue('Authentication')}`, { username, password })
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes                  
        if (user.Status) {          
          //console.log(this.permissionsCRUDValue);
          user.Data.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('CatlogsProductWritten');
    localStorage.removeItem('CatlogsTitle');
    localStorage.removeItem('CatlogsAgencyType');
    localStorage.removeItem('CatlogsPermissions');
    localStorage.removeItem('CatlogsPermissionsCRUD');
    localStorage.removeItem('CatlogsAgencyStatus');
    localStorage.removeItem('States');
    localStorage.removeItem('GuidIdAgency');    
    localStorage.removeItem('Profile');    
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  logoutToken() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('CatlogsProductWritten');
    localStorage.removeItem('CatlogsTitle');
    localStorage.removeItem('CatlogsAgencyType');
    localStorage.removeItem('CatlogsPermissions');
    localStorage.removeItem('CatlogsPermissionsCRUD');
    localStorage.removeItem('CatlogsAgencyStatus');
    localStorage.removeItem('States');
    localStorage.removeItem('GuidIdAgency');    
    localStorage.removeItem('Profile');    
    this.currentUserSubject.next(null);
  }
}
