import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { CatlogsGetService } from '../_services/CatlogsGet.service';
import { AgencyService } from '../_services/agency.service';

import { AuthenticationService } from '../_services';
import { CurrentUserModel } from '../_models/users-model-data';
import { StatesGetService } from '../_services/StatesGet.service';


//import { Router, ActivatedRoute, Params } from '@angular/router';
import { Router, UrlTree, UrlSegment, UrlSegmentGroup, PRIMARY_OUTLET, DefaultUrlSerializer, RouterState, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
  currentUser: CurrentUserModel;

  constructor(
    private CatlogsGetService: CatlogsGetService,
    private StatesGetService: StatesGetService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private AgencyService: AgencyService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    //console.log(this.currentUser.Data.ProfileUser[0].Abprofile);
  }

  logout() {
    this.CatlogsGetService.setNull();
    this.StatesGetService.setNull();
    this.authenticationService.logout();    
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ViewAgencyForm(view) {
    let guid: string;
    let viewString: string;
    let urlView: string;
    let getGuid: string = this.AgencyService.getGuid();

    guid = '/' + getGuid;
    viewString = '/' + view;

    urlView = (getGuid) ? view + guid : view;

    this.router.navigate([urlView]);
  }


}
