import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { EncrDecrService } from '../_services/EncrDecrService.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})

export class StatesGetService extends BaseService {  
  @BlockUI() blockUI: NgBlockUI;
  private StatesSubject: BehaviorSubject<any>;  
  public States: Observable<any>;  

  constructor(
    private http: HttpClient,
    //private EncrDecr: EncrDecrService
  ) {
    super();
    this.StatesSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('States')));
    this.States = this.StatesSubject.asObservable();
    this.setController('StatesGet');
  }

  public get StatesValue(): any {    
    return this.StatesSubject.value;
  }

  public getState = () => this.http.get(this.endPoint());

  setStates() {    
    if(!localStorage.getItem('States')){
      this.BloackUIStart('Loading States');
      this.getState().subscribe(res => {     
        localStorage.setItem('States', JSON.stringify(res));
        this.StatesSubject.next(res);
        this.BloackUIStop();
      });
    }
  }

  setNull(){
    this.StatesSubject.next(null);
  }

  getStates() {    
    return this.StatesValue;
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
