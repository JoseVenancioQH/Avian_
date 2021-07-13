import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { BaseService } from './base.service';
import { UserModel } from '../_models/users-model-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  @BlockUI() blockUI: NgBlockUI;
  private ProfileSubject: BehaviorSubject<any>;  
  public Profile: Observable<any>;
  constructor(private http: HttpClient) {
    super();
    this.setController('Users');
    this.ProfileSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('Profile')));
    this.Profile = this.ProfileSubject.asObservable();
  }

  public get ProfileValue(): any {    
    return this.ProfileSubject.value;
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }  

  AddUser(User: any) {
    return this.http.post<any>(`${this.endPoint('Add')}`, User)
      .pipe(map(User => {       
        return User;
      }));
  }

  public getUsers = () => this.http.get<UserModel[]>(this.endPoint());
  public getProfile = () => this.http.get(this.endPoint('Profile'));

  setProfile() {    
    /*if(!localStorage.getItem('Profile')){
      this.BloackUIStart('Loading Profile');
      this.getProfile().subscribe(res => {     
        localStorage.setItem('Profile', JSON.stringify(res));
        this.ProfileSubject.next(res);
        this.BloackUIStop();
      });
    }*/
  }

  setNull(){
    this.ProfileSubject.next(null);
  }

  getStates() {    
    return this.ProfileValue;
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
