import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { BrokerInformationComponent } from './broker-information/broker-information.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StatusEmailComponent } from './status-email/status-email.component';
import { CatlogsFormComponent } from './catlogs-form/catlogs-form.component';

const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: '', component: BrokerInformationComponent, canActivate: [AuthGuard] },
    { path: 'agency-form', component: AgencyFormComponent },
    //{ path: 'agency-form/:AgencyId/:Token', component: AgencyFormComponent },
    { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: 'status-email', component: StatusEmailComponent, canActivate: [AuthGuard] },
    { path: 'catlogs-form', component: CatlogsFormComponent, canActivate: [AuthGuard] },    
    { path: '', component: BrokerInformationComponent, canActivate: [AuthGuard] },
    { path: 'agency-form/:id', component: AgencyFormComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },   
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);


