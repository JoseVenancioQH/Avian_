import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { CurrentUserModel } from './_models/users-model-data';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
//import { StatesGetService } from './_services/StatesGet.service';
//import { CatlogsGetService } from './_services/CatlogsGet.service';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['./nav-menu/nav-menu.component.css'] })
export class AppComponent {
  @BlockUI() blockUI: NgBlockUI;
  currentUser: CurrentUserModel;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    //private CatlogsGetService: CatlogsGetService,
    //private StatesGetService: StatesGetService,
  ) {
    this.authenticationService.currentUser.subscribe(res => this.currentUser = res);
    
    //this.CatlogsGetService.setCatlogs();
    //this.StatesGetService.setStates();
  }

  ngOnInit() {
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
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
