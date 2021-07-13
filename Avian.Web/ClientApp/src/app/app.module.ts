import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { BrokerInformationComponent } from './broker-information/broker-information.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { UserFormComponent } from './user-form/user-form.component';

import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';


import {
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatListModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTreeModule,
    MatMenuModule,
    MatPaginator,
    MatExpansionModule,
    MatBadgeModule,
    MatInputModule,
    MatSortModule,
    MatTabsModule,
    MatStepperModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,    
    MatGridListModule,
    DateAdapter,
    MatSidenavModule,     
    MAT_DATE_LOCALE,
    MAT_DATE_FORMATS
  } from '@angular/material';
  import { MatTableModule } from '@angular/material/table';
  import { DialogDocumentComponent } from './dialog-document/dialog-document.component';
  import { BlockUIModule } from 'ng-block-ui';
import { DialogComponent } from './dialog/dialog.component';
import { DialogUserComponent} from './dialog-user/dialog-user.component';
import { DialogUserProfileComponent } from './dialog-user-profile/dialog-user-profile.component';
import { DialogUserPermissionsComponent } from './dialog-user-permissions/dialog-user-permissions.component';
import { StatusEmailComponent } from './status-email/status-email.component';
import { DialogStatusEmailComponent } from './dialog-statusemail/dialog-statusemail.component';
import { CatlogsFormComponent } from './catlogs-form/catlogs-form.component';
import { DialogCatlogsFormComponent } from './dialog-catlogs-form/dialog-catlogs-form.component';
import { DialogFollowComponent } from './dialog-follow/dialog-follow.component';


@NgModule({
    imports: [
        HttpClientModule,        
        MatFormFieldModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatButtonToggleModule,        
        MatDatepickerModule,      
        MatSelectModule,      
        MatCardModule,
        MatTableModule,
        MatMenuModule,
        MatTabsModule,
        MatSortModule,
        MatPaginatorModule,      
        MatDividerModule,
        MatBadgeModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatStepperModule,
        MatCheckboxModule,
        MatRadioModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        MatToolbarModule,
        MatTreeModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatGridListModule,
        MatSidenavModule,
        BrowserModule,
        BlockUIModule.forRoot(),
        NgxMaskModule.forRoot(),
        HttpClientModule,
        appRoutingModule
        ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        BrokerInformationComponent,
        NavMenuComponent,        
        AgencyFormComponent,
        UserFormComponent,
        DialogDocumentComponent ,
        DialogComponent ,
        DialogUserComponent,
        DialogUserProfileComponent,
        DialogUserPermissionsComponent,
        StatusEmailComponent,
        DialogStatusEmailComponent,
        CatlogsFormComponent,
        DialogCatlogsFormComponent,
        DialogFollowComponent
        
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    entryComponents: [
        DialogDocumentComponent,
        DialogComponent,
        DialogUserComponent,
        DialogUserProfileComponent,
        DialogUserPermissionsComponent,
        DialogStatusEmailComponent,
        DialogCatlogsFormComponent
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


