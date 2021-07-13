import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AgencyService } from '../_services/agency.service';
import { StatesGetService } from '../_services/StatesGet.service';
import { CatlogsGetService } from '../_services/CatlogsGet.service';
import { UserService } from '../_services/user.service';



import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private AgencyService: AgencyService,
    private StatesGetService: StatesGetService,
    private CatlogsGetService: CatlogsGetService,
    private ProfileGetService: UserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;    
    if (currentUser) {
      // logged in so return true     
      if(this.CatlogsGetService.CatlogsAgencyStatusValue==null){        
        this.CatlogsGetService.setCatlogs();
        this.StatesGetService.setStates();
        //this.ProfileGetService.setProfile();
      }
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.AgencyService.setGuid("00000000-0000-0000-0000-000000000000");
    this.router.navigate(['/agency-form']/*, { queryParams: { returnUrl: state.url, setGuid: "00000000-0000-0000-0000-000000000000" } }*/);
    return false;
  }
}
