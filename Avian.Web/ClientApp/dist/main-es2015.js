(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/agency-form/agency-form.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/agency-form/agency-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-light\">\r\n  <div class=\"col-md-12\">\r\n  <div class='row justify-content-center'>  \r\n      <div class='col-md-10' style=\"text-align: center;\">\r\n        <mat-card  class=\"bg-light mat-elevation-z0\" *ngIf=\"!currentUser\">\r\n          <mat-card-header>\r\n  \r\n          </mat-card-header>\r\n          <img mat-card-image src=\"assets/img/avian-bap.png\" alt=\"Avian Web\" style=\"max-width: 600px; height: auto;\" class=\"center\">\r\n        </mat-card>\r\n      </div>    \r\n  </div>\r\n  \r\n  <div class='container-fluid'>\r\n    <div class='row justify-content-center'>\r\n      <div class='col-sm-10 bg-white'>\r\n        <form [formGroup]=\"AgencyForm\" class=\"col-md-12\">\r\n         \r\n          <mat-card *ngIf=\"currentUser\">\r\n            <div class='row' >\r\n              <div class='col-md-12'>\r\n                \r\n                <mat-checkbox class='col-md-2' formControlName=\"checkedReSend\" [(ngModel)]=\"checkedReSend\">Re Send Status \"Email\"</mat-checkbox>\r\n                \r\n                <mat-button-toggle-group style=\"flex-wrap: wrap;\" class=\"form-control col-md-8 float-right\" appearance=\"legacy\" formControlName=\"AgencyStatus\" [(ngModel)]=\"Agency.AgencyStatus\" [value]=\"Agency.AgencyStatus\" name=\"fontStyle\" class='float-right' aria-label=\"Font Style\" #group=\"matButtonToggleGroup\">\r\n                  <div *ngFor=\"let Catlog of this.CatlogsAgencyStatus;let i = index\">\r\n                    <mat-button-toggle [value]=\"Catlog.CatlogsId\" *ngIf=\"Catlog.Show\">{{Catlog.CatlogsName}}</mat-button-toggle>                  \r\n                  </div>\r\n                </mat-button-toggle-group>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n          <br>\r\n          <!--<mat-step [stepControl]=\"AgencyFormGroup\">-->\r\n          <ng-template matStepLabel>Agency</ng-template>\r\n          <!--<mat-step [stepControl]=\"GeneralDataGroup\">-->\r\n          <ng-template matStepLabel>General Data</ng-template>\r\n          <div class='row'>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-3'>\r\n              <mat-label #matlabel>Agency Name</mat-label>\r\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"AgencyName\" [(ngModel)]=\"Agency.AgencyName\" name=\"AgencyName\">\r\n              <mat-error>Required</mat-error> \r\n              <!--<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>-->\r\n              <mat-hint>As it appear on P&C License*</mat-hint>\r\n            </mat-form-field>\r\n  \r\n            <section class='col-md-5' style=\"text-align: center;\">\r\n              <label class=\"agency-margin\"></label>\r\n              <mat-radio-group  formControlName=\"AgencyType\" name=\"radioOptAgencyType\" [(ngModel)]=\"Agency.AgencyType\">\r\n                <mat-radio-button class=\"agency-margin\" name=\"radioOptAgencyType\" *ngFor=\"let Type of this.CatlogsAgencyType;let i = index\" [value]=\"Type.CatlogsId\">\r\n                  {{Type.CatlogsName}}\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n            </section>\r\n  \r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-4'>\r\n              <mat-label>TIN</mat-label>\r\n              <input matInput placeholder=\"#\" mask=\"000000000\" minlength=\"9\" class=\"form-control\" formControlName=\"AgencyTIN\" [(ngModel)]=\"Agency.AgencyTin\" name=\"AgencyTin\">\r\n              <mat-error>TIN Type 000000000</mat-error>\r\n            </mat-form-field>\r\n  \r\n          </div>\r\n  \r\n          <div class='row'>\r\n  \r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Street(Primary Location)*</mat-label>\r\n              <input matInput placeholder=\"location\" class=\"form-control\" formControlName=\"AgencyStreet\" [(ngModel)]=\"Agency.AgencyStreet\" name=\"AgencyStreet\">\r\n              <mat-error>Required</mat-error> \r\n              <!--<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>-->\r\n              <mat-hint>(Primary Location)*</mat-hint>\r\n            </mat-form-field>\r\n  \r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-1'>\r\n              <mat-label>City *</mat-label>\r\n              <input matInput placeholder=\"\" [(ngModel)]=\"Agency.AgencyCity\" class=\"form-control\" formControlName=\"AgencyCity\" name=\"AgencyCity\">\r\n              <mat-error>Required</mat-error> \r\n              <!--<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>-->\r\n              <!--<mat-hint>*</mat-hint>-->\r\n            </mat-form-field>\r\n  \r\n            <mat-form-field #matformfield appearance=\"fill\" class='col-md-2'>\r\n              <mat-label>State</mat-label>\r\n              <mat-select [(ngModel)]=\"Agency.AgencyState\" name=\"AgencyState\" formControlName=\"AgencyState\" placeholder=\"State\">\r\n                <mat-option *ngFor=\"let State of this.States\" [value]=\"State.StateId\">\r\n                  {{State.StatePrefix}} - {{State.StateName}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error>Required</mat-error> \r\n            </mat-form-field>\r\n  \r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-1'>\r\n              <mat-label>Zip *</mat-label>\r\n              <input matInput placeholder=\"\" [dropSpecialCharacters]=\"false\" mask=\"00000\" [(ngModel)]=\"Agency.AgencyZip\" class=\"form-control\" formControlName=\"AgencyZip\" name=\"AgencyZip\">\r\n              <mat-error>Zip Code Type 00000</mat-error>\r\n            </mat-form-field>\r\n  \r\n            <div class='col-md-3 scroller-container' formArrayName=\"AgencyEmailControl\">\r\n              <div class='row' *ngFor=\"let AgencyEmail of Agency.Abemail; let j = index\" [formGroupName]=\"j\" cdkScrollable>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-12' *ngIf=\"AgencyEmail.ControlUpdate\">\r\n                  <mat-label>Email</mat-label>\r\n                  <input matInput placeholder=\"---@----.---\" [(ngModel)]=\"AgencyEmail.Email\" class=\"form-control\" formControlName=\"AgencyEmail\" name=\"AgencyEmail[{{j}}]\">\r\n                  <mat-error>Email Type ---@----.---</mat-error>\r\n                  <button type=\"button\" type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"j==0?onClickAgencyEmailAdd():onClickAgencyEmailRemove(j)\" [attr.aria-pressed]=\"hide\">\r\n                    <mat-icon *ngIf=\"j==0\">add_circle</mat-icon>\r\n                    <mat-icon *ngIf=\"j>0\">remove_circle</mat-icon>\r\n                  </button>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class='col-md-3 scroller-container' formArrayName=\"AgencyPhoneControl\">\r\n              <div class='row' *ngFor=\"let AgencyPhone of Agency.Abphone; let j = index\" [formGroupName]=\"j\" cdkScrollable>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-12' *ngIf=\"AgencyPhone.ControlUpdate\">\r\n                  <mat-label>Phone</mat-label>\r\n                  <input type=\"text\" matInput placeholder=\"(000) 000-0000\" [(ngModel)]=\"AgencyPhone.Phone\" [dropSpecialCharacters]=\"false\" class=\"form-control\" mask=\"(000) 000 - 0000\" placeHolderCharacter=\"*\" formControlName=\"AgencyPhone\" name=\"AgencyPhone[{{j}}]\">\r\n                  <mat-error>Phone Type (000) 000-0000</mat-error>\r\n                  <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"j==0?onClickAgencyPhoneAdd():onClickAgencyPhoneRemove(j)\" [attr.aria-pressed]=\"hide\">\r\n                    <mat-icon *ngIf=\"j==0\">add_circle</mat-icon>\r\n                    <mat-icon *ngIf=\"j>0\">remove_circle</mat-icon>\r\n                  </button>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\" *ngIf=\"currentUser\">\r\n            <div class='col-md-6'>\r\n              <mat-slide-toggle [(ngModel)]=\"Agency.AgencyGeneralDataIsCorrect\" formControlName=\"AgencyGeneralDataIsCorrect\" name=\"AgencyGeneralDataIsCorrect\" [checked]=\"Agency.AgencyGeneralDataIsCorrect\">\r\n                Data in this section is correct?\r\n              </mat-slide-toggle>\r\n              <mat-form-field #matformfield appearance=\"outline\" *ngIf=\"!Agency.AgencyGeneralDataIsCorrect\" class='col-md-6'>\r\n                <input matInput placeholder=\"Describe WRONG or MISSING Information\" class=\"form-control\" formControlName=\"AgencyGeneralDataIsCorrectData\" [(ngModel)]=\"Agency.AgencyGeneralDataIsCorrectData\" name=\"AgencyGeneralDataIsCorrectData\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n  \r\n          <br><hr /><br>\r\n  \r\n          <!--<mat-step [stepControl]=\"CompanyDataGroup\">-->\r\n  \r\n          <ng-template matStepLabel>Company Data</ng-template>\r\n          <div class='row'>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Annual P&C Business:</mat-label>\r\n              \r\n              <input matInput type=\"text\" maxlength=\"10\" prefix=\"$ \" placeholder=\"$\" [(ngModel)]=\"Agency.AgencyAnnualB\" placeholder=\"$ 0-9.0-9\"  mask=\"separator.2\" thousandSeparator=\",\" class=\"form-control\" formControlName=\"AgencyAnnualB\" name=\"AgencyAnnualB\">            \r\n              \r\n              <mat-error>Money Type $ 0-9.0-9</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Annual Premium Finance Business:</mat-label>\r\n             \r\n              <input matInput placeholder=\"$ 0-9.0-9\" maxlength=\"12\" prefix=\"$ \" [(ngModel)]=\"Agency.AgencyAnnualP\" placeholder=\"$ 0-9.0-9\"  mask=\"separator.2\" thousandSeparator=\",\" name=\"AgencyAnnualP\" class=\"form-control\" formControlName=\"AgencyAnnualP\">            \r\n              \r\n              <mat-error>Money Type $ 0-9.0-9</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Number of Years in Business:</mat-label>\r\n              <input matInput placeholder=\"#\" maxlength=\"3\"  [(ngModel)]=\"Agency.AgencyNumberYear\" placeholder=\"0-9\" mask=\"0*\" name=\"AgencyNumberYear\" class=\"form-control\" formControlName=\"AgencyNumberYear\">\r\n              <mat-error>Only Digit 0-9</mat-error>\r\n            </mat-form-field>\r\n  \r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Number of Employees:</mat-label>\r\n              <input matInput placeholder=\"#\"  maxlength=\"4\"   [(ngModel)]=\"Agency.AgencyNumberEmployee\" placeholder=\"0-9\" mask=\"0*\" name=\"AgencyNumberEmployee\" class=\"form-control\" formControlName=\"AgencyNumberEmployee\">\r\n              <mat-error>Only Digit 0-9</mat-error>\r\n            </mat-form-field>\r\n  \r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Average Size of Premium:</mat-label>\r\n              <input matInput placeholder=\"\" maxlength=\"7\"  [(ngModel)]=\"Agency.AgencyAverageSize\" placeholder=\"0-9\" mask=\"0*\"  name=\"AgencyAverageSize\" class=\"form-control\" formControlName=\"AgencyAverageSize\">\r\n              <mat-error>Only Digit 0-9</mat-error>\r\n            </mat-form-field>\r\n  \r\n            <div class='col-md-2'>\r\n              <div class='row'>\r\n                <mat-form-field #matformfield appearance=\"fill\">\r\n                <mat-label style=\"font-size: 9px; padding: 0px;\">Primary/Specialty Product Written:</mat-label>\r\n                <mat-select matTooltip=\"Primary/Specialty Product Written:\" #ProductWrittenSelect multiple [compareWith]=\"compareObjects\" (selectionChange)=\"ProductWrittenOtherChanged($event.value)\" formControlName=\"AbagencyProductWritten\" [(ngModel)]=\"Agency.AbagencyProductWritten\" name=\"ProductWritten\" placeholder=\"Product Written\">\r\n                    <mat-option *ngFor=\"let Catlog of this.CatlogsProductWritten\"\r\n                                [value]=\"Catlog\">\r\n                      {{Catlog.ProductWrittenCatlogsName}}\r\n                    </mat-option>\r\n                </mat-select>      \r\n                <mat-error>Required</mat-error>            \r\n                </mat-form-field>\r\n              </div>\r\n              <div class='row'>\r\n                <mat-form-field #matformfield *ngIf=\"this.SatusProductWrittenOther\" appearance=\"outline\">\r\n                  <mat-label>Please Specify If Ohter</mat-label>\r\n                  <input matInput placeholder=\"Other\" [(ngModel)]=\"Agency.AbagencyProductWritten[this.IndexOther].ProductWrittenAgencyOther\" class=\"form-control\" formControlName=\"ProductWrittenOther\" name=\"ProductWrittenOther\">              \r\n                </mat-form-field>\r\n              </div>            \r\n                  \r\n              <!--<div class='col-md-6'>   \r\n              <p mat-line>Primary/Specialty Product Written:</p>       \r\n              <ng-multiselect-dropdown\r\n                [placeholder]=\"''\"\r\n                [data]=\"this.CatlogsProductWritten\"\r\n                formControlName=\"AbagencyProductWritten\"\r\n                [(ngModel)]=\"Agency.AbagencyProductWritten\"\r\n                [settings]=\"dropdownSettings\"\r\n                (onSelect)=\"onItemSelect($event)\"\r\n                (onSelectAll)=\"onSelectAll($event)\"\r\n              >\r\n              </ng-multiselect-dropdown>\r\n              </div>\r\n              <div class='col-md-3'>               \r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-3'>\r\n                  <mat-label>Other</mat-label>\r\n                  <input matInput placeholder=\"Other\" [(ngModel)]=\"Agency.AgencyCity\" class=\"form-control\" formControlName=\"AgencyCity\" name=\"AgencyCity\">              \r\n                </mat-form-field>\r\n              </div>-->\r\n            </div>\r\n          </div> \r\n  \r\n          <mat-card formArrayName=\"AgencyCarrierControl\" >\r\n            <p mat-line>Insurance Company or General Agents Used:</p>\r\n            <div class=\"scroller-container-carrier col-md-10\">\r\n            <div *ngFor=\"let Carrier of Agency.Abcarrier; let i = index\" class='row' [formGroupName]=\"i\" cdkScrollable>            \r\n              <div *ngIf=\"Carrier.ControlUpdate\" class='col-md-12'>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-4'>\r\n                  <mat-label>Carrier Name:</mat-label>\r\n                  <input matInput placeholder=\"\" class=\"form-control\" formControlName=\"CarrierName\" [(ngModel)]=\"Carrier.CarrierName\" name=\"CarrierName[{{i}}]\">\r\n                </mat-form-field>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-4'>\r\n                  <mat-label>General Agent Name:</mat-label>\r\n                  <input matInput placeholder=\"\" class=\"form-control\" formControlName=\"AgentName\" [(ngModel)]=\"Carrier.AgentName\" name=\"AgentName[{{i}}]\">\r\n                </mat-form-field>\r\n  \r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-3'>\r\n                  <mat-label>Appointed Since:</mat-label>                \r\n                  <input type=\"hidden\" (dateChange)=\"SetDataPickerAppointedSince($event,i)\" [min]=\"minDateAppointedSince\" [max]=\"maxDateAppointedSince\" formControlName=\"AppointedSince_hidden\" [matDatepicker]=\"pickerAppointedSince\" [(ngModel)]=\"Carrier.AppointedSince\">             \r\n                  <input matInput (change)='ngModelDataPickerAppointedSince(i)' class=\"form-control\" [dropSpecialCharacters]=\"false\" name=\"AppointedSince\" mask=\"00/00/0000\" formControlName=\"AppointedSince\" placeholder=\"MMDDYYYY\" >                              \r\n                  <mat-datepicker-toggle matSuffix [for]=\"pickerAppointedSince\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #pickerAppointedSince></mat-datepicker>\r\n                  <mat-error>Change date value MM/DD/YYYY</mat-error>              \r\n                </mat-form-field>\r\n  \r\n                <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"i==0?onClickCarrierAdd():onClickCarrierRemove(i)\" [attr.aria-pressed]=\"hide\">\r\n                  <mat-icon *ngIf=\"i==0\">add_circle</mat-icon>\r\n                  <mat-icon *ngIf=\"i>0\">remove_circle</mat-icon>\r\n                </button>\r\n              </div>\r\n              </div>\r\n  \r\n            </div>\r\n          </mat-card>\r\n          <br><hr /><br>\r\n  \r\n          \r\n  \r\n  \r\n  \r\n          <ng-template matStepLabel>Owner</ng-template>\r\n  \r\n  \r\n          <ng-template matStepLabel>Owner Officer</ng-template>\r\n          <p mat-line>Owner Officer(s):</p>\r\n          <div formArrayName=\"AgencyOwnerControl\" >    \r\n            <div class=\"scroller-container col-md-10\">      \r\n            <div *ngFor=\"let OwnerOfficer of Agency.AbownerOfficer;  let i = index\" [formGroupName]=\"i\"  cdkScrollable>\r\n              <div *ngIf=\"OwnerOfficer.ControlUpdate\" class='col-md-12'>\r\n                <mat-form-field #matformfield appearance=\"fill\" class='col-md-2'>\r\n                  <mat-label>Title:</mat-label>\r\n                  <mat-select required formControlName=\"OwnerOfficerAgencyTittle\" [value]=\"OwnerOfficer.AgencyTittle\" [(ngModel)]=\"OwnerOfficer.AgencyTittle\" name=\"OwnerOfficerTitle\" placeholder=\"State\">\r\n                    <mat-option *ngFor=\"let Catlog of this.CatlogsTitle\" [value]=\"Catlog.CatlogsId\">\r\n                      {{Catlog.CatlogsName}}\r\n                    </mat-option>                    \r\n                  </mat-select>\r\n                  <mat-error>Required</mat-error> \r\n                </mat-form-field>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n                  <mat-label>First Name:</mat-label>\r\n                  <input matInput required placeholder=\"\" class=\"form-control\" formControlName=\"OwnerOfficerFirstName\" [(ngModel)]=\"OwnerOfficer.FirstName\" name=\"OwnerOfficerFirstName[{{i}}]\">\r\n                  <mat-error>Required</mat-error> \r\n                </mat-form-field>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n                  <mat-label>Last Name:</mat-label>\r\n                  <input matInput required placeholder=\"\" [(ngModel)]=\"OwnerOfficer.LastName\" class=\"form-control\" formControlName=\"OwnerOfficerLastName\" name=\"OwnerOfficerLastName[{{i}}]\">\r\n                  <mat-error>Required</mat-error> \r\n                </mat-form-field>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n                  <mat-label>Tax ID:</mat-label>\r\n                  <input matInput placeholder=\"00-0000000\" [(ngModel)]=\"OwnerOfficer.TaxId\" [dropSpecialCharacters]=\"false\" mask=\"00-0000000\" class=\"form-control\" formControlName=\"OwnerOfficerTaxId\" name=\"OwnerOfficerTaxId[{{i}}]\">\r\n                  <mat-error>Value Invalid 00-0000000</mat-error>  \r\n                </mat-form-field>\r\n                <mat-form-field #matformfield appearance=\"outline\" class='col-md-3'>\r\n                  <mat-label>DOB:</mat-label>\r\n                  <input type=\"hidden\" (dateChange)=\"SetDataPickerOwnerOfficerDob($event,i)\"  [min]=\"minDateOwnerOfficerDob\" [max]=\"maxDateOwnerOfficerDob\" formControlName=\"OwnerOfficerDob_hidden\" [matDatepicker]=\"pickerOwnerOfficerDob\" [(ngModel)]=\"OwnerOfficer.Dob\">                \r\n                  <input  matInput (change)='ngModelDataPickerOwnerOfficerDob(i)' class=\"form-control\" [dropSpecialCharacters]=\"false\" name=\"OwnerOfficerDob\" mask=\"00/00/0000\" formControlName=\"OwnerOfficerDob\" placeholder=\"MMDDYYYY\" >                                                \r\n                  <mat-datepicker-toggle matSuffix [for]=\"pickerOwnerOfficerDob\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #pickerOwnerOfficerDob></mat-datepicker>  \r\n                  <mat-error>Change date value MM/DD/YYYY</mat-error>                            \r\n                </mat-form-field>\r\n                <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"i==0?onClickOwnerOfficerAdd():onClickOwnerOfficerRemove(i)\">\r\n                  <mat-icon *ngIf=\"i==0\">add_circle</mat-icon>\r\n                  <mat-icon *ngIf=\"i>0\">remove_circle</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"currentUser\">\r\n            <div class='col-md-6 float-right' *ngIf=\"currentUser\">\r\n              <mat-slide-toggle [(ngModel)]=\"Agency.AgencyOwnerOfficerisCorrect\" formControlName=\"AgencyOwnerOfficerisCorrect\" name=\"AgencyOwnerOfficerisCorrect\" [checked]=\"Agency.AgencyOwnerOfficerisCorrect\">\r\n                Data in this section is correct?                \r\n              </mat-slide-toggle>\r\n              <mat-form-field #matformfield appearance=\"outline\" class='col-md-6' *ngIf=\"!Agency.AgencyOwnerOfficerisCorrect\">\r\n                  <input matInput placeholder=\"Describe WRONG or MISSING Information\" [(ngModel)]=\"Agency.AgencyOwnerOfficerisCorrectData\" class=\"form-control\" formControlName=\"AgencyOwnerOfficerisCorrectData\" name=\"AgencyOwnerOfficerisCorrectData\">\r\n                </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <br><hr /><br>\r\n  \r\n          <ng-template matStepLabel>Broker Trust Account Information</ng-template>\r\n          <p mat-line>Broker Trust Account Information.<br />This Information Will Be Used In Order For The Broker To Make Payments On Client's Behalf</p>\r\n          <div class='row'>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Bank Name:</mat-label>\r\n              <input matInput placeholder=\"\" class=\"form-control\" formControlName=\"AgencyAccountBankName\" [(ngModel)]=\"Agency.AgencyAccountBankName\" name=\"AgencyAccountBankName\">\r\n            </mat-form-field>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Routing Number:</mat-label>\r\n              <input matInput placeholder=\"Only Digit 0-9\" maxlength=\"9\" mask=\"0*\" class=\"form-control\" formControlName=\"AgencyAccountRoutingNumber\" [(ngModel)]=\"Agency.AgencyAccountRoutingNumber\" name=\"AgencyAccountRoutingNumber\">\r\n              <mat-error>Only Digit 0-9</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Account Number:</mat-label>\r\n              <input matInput placeholder=\"Only Digit 0-9\" maxlength=\"12\" mask=\"0*\" class=\"form-control\" formControlName=\"AgencyAccountAccountNumber\" [(ngModel)]=\"Agency.AgencyAccountAccountNumber\" name=\"AgencyAccountAccountNumber\">\r\n              <mat-error>Only Digit 0-9</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field #matformfield appearance=\"outline\" class='col-md-2'>\r\n              <mat-label>Account Holders Name:</mat-label>\r\n              <input matInput placeholder=\"\" class=\"form-control\" formControlName=\"AgencyAccountHoldersName\" [(ngModel)]=\"Agency.AgencyAccountHoldersName\" name=\"AgencyAccountHoldersName\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"currentUser\">\r\n            <div class='col-md-4 float-right' *ngIf=\"currentUser\">\r\n              <mat-slide-toggle [(ngModel)]=\"Agency.AgencyTrustAccountIsCorrect\" formControlName=\"AgencyTrustAccountIsCorrect\" name=\"AgencyTrustAccountIsCorrect\" [checked]=\"Agency.AgencyTrustAccountIsCorrect\">\r\n                Data in this section is correct?                \r\n              </mat-slide-toggle>\r\n              <mat-form-field #matformfield appearance=\"outline\" class='col-md-6' *ngIf=\"!Agency.AgencyTrustAccountIsCorrect\">\r\n                <input matInput placeholder=\"Describe WRONG or MISSING Information\" [(ngModel)]=\"Agency.AgencyTrustAccountIsCorrectData\" class=\"form-control\" formControlName=\"AgencyTrustAccountIsCorrectData\" name=\"AgencyTrustAccountIsCorrectData\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <br><hr /><br>\r\n  \r\n          <ng-template matStepLabel>Authorized Agency</ng-template>\r\n          <p mat-line>Please Provide Authorized Agency Contact Information Below. At Least One Contact Is Required</p>\r\n          <div class='row'>\r\n            <mat-form-field #matformfield appearance=\"fill\" class='col-md-2'>\r\n              <mat-label>How many Authorized Contact?</mat-label>\r\n              <input matInput type=\"number\" [(ngModel)]=\"this.contactAutCount\" formControlName=\"contactAutCount\" name=\"contactAutCount\" (change)=\"onChangecontactAut($event)\" placeholder=\"\">\r\n            </mat-form-field>\r\n          </div>        \r\n          <mat-card formArrayName=\"AgencyAutContactControl\">\r\n            <p mat-line>Authorized Contact</p>\r\n            <div class=\"scroller-container-authorized\">\r\n            <div *ngFor=\"let ContactAut of Agency.AbcontAut; let i = index;\" [formGroupName]=\"i\" cdkScrollable>\r\n              \r\n              <mat-card *ngIf=\"ContactAut.ControlUpdate\" class='col-md-12' >\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <p mat-line class='form-group'># {{i + 1}}</p>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"onClickcontactAutRemoved(i)\" class=\"contactAutRemoved float-right\">\r\n                      <mat-icon>clear</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" >     \r\n                  <mat-form-field #matformfield appearance=\"outline\" class=\"col-md-2 form-group\">\r\n                    <mat-label>First Name:</mat-label>\r\n                    <input matInput placeholder=\"\" Required class=\"form-control\" formControlName=\"ContactAutFirstName\" [(ngModel)]=\"ContactAut.FirstName\" name=\"ContactAutFirstName[{{i}}]\">\r\n                    <mat-error>Required</mat-error>  \r\n                  </mat-form-field>\r\n                  <mat-form-field #matformfield appearance=\"outline\" class=\"col-md-2 form-group\">\r\n                    <mat-label>Middle Name:</mat-label>\r\n                    <input matInput Required placeholder=\"\" class=\"form-control\" formControlName=\"ContactAutMiddleName\" [(ngModel)]=\"ContactAut.MiddleName\" name=\"ContactAutMiddleName[{{i}}]\">\r\n                    <mat-error>Required</mat-error>  \r\n                  </mat-form-field>\r\n                  <mat-form-field #matformfield appearance=\"outline\" class=\"col-md-2 form-group\">\r\n                    <mat-label>Last Name:</mat-label>\r\n                    <input matInput [(ngModel)]=\"ContactAut.LastName\" class=\"form-control\" formControlName=\"ContactAutLastName\" placeholder=\"\" name=\"ContactAutLastName[{{i}}]\">\r\n                    <mat-error>Required</mat-error> \r\n                  </mat-form-field>\r\n  \r\n                  <mat-form-field #matformfield appearance=\"fill\" class=\"col-md-2 form-group\">\r\n                    <mat-label>Title:</mat-label>\r\n                    <mat-select formControlName=\"ContactAutTitle\" [(ngModel)]=\"ContactAut.Title\" name=\"ContactAutTitle\" placeholder=\"Title\">\r\n                      <mat-option *ngFor=\"let Catlog of this.CatlogsTitle\" [value]=\"Catlog.CatlogsId\">\r\n                        {{Catlog.CatlogsName}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-error>Required</mat-error> \r\n                  </mat-form-field>\r\n  \r\n                  <div class='col-md-2 scroller-container' formArrayName=\"AgencyAutContactPhoneControl\">\r\n                    <div class='row' *ngFor=\"let ContactAutPhone of ContactAut.Abphone; let j = index\" [formGroupName]=\"j\" cdkScrollable>\r\n                      <mat-form-field #matformfield appearance=\"outline\" class=\"col-md-12\" *ngIf=\"ContactAutPhone.ControlUpdate\">\r\n                        <mat-label>Phone:</mat-label>                      \r\n                        <input matInput placeholder=\"(000) 000-0000\" class=\"form-control\" [dropSpecialCharacters]=\"false\" formControlName=\"ContactAutPhone\" mask=\"(000) 000 - 0000\"   [(ngModel)]=\"ContactAutPhone.Phone\" name=\"ContactAutPhone[{{i}}][{{j}}]\">\r\n                        <mat-error>Phone Type (000) 000-0000</mat-error>\r\n                        <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"j==0?onClickcontactAutPhoneAdd(i):onClickcontactAutPhoneRemove(i,j)\" [attr.aria-pressed]=\"hide\">\r\n                          <mat-icon *ngIf=\"j==0\">add_circle</mat-icon>\r\n                          <mat-icon *ngIf=\"j>0\">remove_circle</mat-icon>\r\n                        </button>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class='col-md-2 scroller-container' formArrayName=\"AgencyAutContactEmailControl\">\r\n                    <div class='row' *ngFor=\"let ContactAutEmail of ContactAut.Abemail; let j = index\" [formGroupName]=\"j\" cdkScrollable>\r\n                      <mat-form-field #matformfield appearance=\"outline\" class=\"col-md-12\" *ngIf=\"ContactAutEmail.ControlUpdate\">\r\n                        <mat-label>Email:</mat-label>\r\n                        <input matInput placeholder=\"\" class=\"form-control\" formControlName=\"ContactAutEmail\" [(ngModel)]=\"ContactAutEmail.Email\" name=\"ContactAutEmail[{{i}}][{{j}}]\">\r\n                        <mat-error>Email Type ---@----.---</mat-error>\r\n                        <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"j==0?onClickcontactAutEmailAdd(i):onClickcontactAutEmailRemove(i,j)\" [attr.aria-pressed]=\"hide\">\r\n                          <mat-icon *ngIf=\"j==0\">add_circle</mat-icon>\r\n                          <mat-icon *ngIf=\"j>0\">remove_circle</mat-icon>\r\n                        </button>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n              </mat-card>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n          <div class=\"row\" *ngIf=\"currentUser\">\r\n            <div class='col-md-6'>\r\n              <mat-slide-toggle [(ngModel)]=\"Agency.AgencyAuthorizedContcatIsCorrect\" formControlName=\"AgencyAuthorizedContcatIsCorrect\" name=\"AgencyAuthorizedContcatIsCorrect\" [checked]=\"Agency.AgencyAuthorizedContcatIsCorrect\">\r\n                Data in this section is correct?                  \r\n              </mat-slide-toggle>\r\n              <mat-form-field #matformfield class='col-md-6' appearance=\"outline\" *ngIf=\"!Agency.AgencyAuthorizedContcatIsCorrect\">\r\n                <input matInput placeholder=\"Describe WRONG or MISSING Information\" class=\"form-control\" formControlName=\"AgencyAuthorizedContcatIsCorrectData\" [(ngModel)]=\"Agency.AgencyAuthorizedContcatIsCorrectData\" name=\"AgencyAuthorizedContcatIsCorrectData\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>         \r\n          <br><hr /><br>  \r\n          <ng-template matStepLabel>Documents must be submitted</ng-template>\r\n          <p mat-line>The following documents must be submitted with your application</p>\r\n          <div class=\"row\">\r\n            <div class='col-md-4'>\r\n              <mat-label>✓ P&C License</mat-label>\r\n              <input hidden (change)=\"onFileSelected('PCLicense')\" multiple #filePCLicense type=\"file\" id=\"filePCLicense\">\r\n  \r\n              <button type=\"button\" mat-icon-button\r\n                      mat-raised-button\r\n                      matSuffix\r\n                      color=\"primary\"\r\n                      [matBadgeHidden]=\"this.PCLicense_files.length > 0 || this.DocumentsFiles.PCLicense.length > 0\"\r\n                      matBadge=\"{{this.PCLicense_files.length}}\"\r\n                      matBadgePosition=\"before\"\r\n                      matBadgeColor=\"warn\"\r\n                      (click)=\"filePCLicense.click()\">\r\n                <mat-icon>cloud_upload</mat-icon>\r\n              </button>\r\n              <mat-error *ngIf=\"this.PCLicense_files.length == 0 && this.DocumentsFiles.PCLicense.length == 0\">Enter at least one document</mat-error>\r\n              <div class=\"row scroller-container\">\r\n                <mat-list role=\"list\" class='col-md-12' cdkScrollable>\r\n                  <mat-list-item role=\"listitem\" *ngFor=\"let Element of this.PCLicense_files; let j = index\">\r\n                    {{Element.name}}\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDelete('PCLicense',j)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                  <mat-list-item role=\"listitem\" *ngFor=\"let Element of this.DocumentsFiles.PCLicense; let j = index\">\r\n                    {{Element}}\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDelete('Repo_PCLicense',j)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>remove</mat-icon>\r\n                    </button>\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDownload('FileUpload',Agency.AgencyDocumentId,'PCLicense[]',Element)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>cloud_download</mat-icon>\r\n                    </button>\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileView('FileUpload',Agency.AgencyDocumentId,'PCLicense[]',Element)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>pageview</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                </mat-list>\r\n              </div>\r\n            </div>\r\n            <div class='col-md-4'>\r\n              <mat-label>✓ Current E&O</mat-label>\r\n              <input hidden (change)=\"onFileSelected('CurrentEO')\" multiple #fileCurrentEO type=\"file\" id=\"fileCurrentEO\">\r\n              <button type=\"button\" mat-icon-button\r\n                      mat-raised-button\r\n                      matSuffix\r\n                      color=\"primary\"\r\n                      [matBadgeHidden]=\"this.CurrentEO_files.length > 0 || this.DocumentsFiles.CurrentEO.length > 0\"\r\n                      matBadge=\"{{this.CurrentEO_files.length}}\"\r\n                      matBadgePosition=\"before\"\r\n                      matBadgeColor=\"warn\"\r\n                      (click)=\"fileCurrentEO.click()\">\r\n                <mat-icon>cloud_upload</mat-icon>\r\n              </button>\r\n              <mat-error *ngIf=\"this.CurrentEO_files.length == 0 && this.DocumentsFiles.CurrentEO.length == 0\">Enter at least one document</mat-error>\r\n              <div class=\"row scroller-container\">\r\n                <mat-list role=\"list\" class='col-md-12' cdkScrollable>\r\n                  <mat-list-item role=\"listitem\" *ngFor=\"let Element of this.CurrentEO_files; let j = index\">\r\n                    {{Element.name}}\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDelete('CurrentEO',j)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                </mat-list>\r\n                <mat-list role=\"list\" class='col-md-12'>\r\n                  <mat-list-item role=\"listitem\" *ngFor=\"let Element of this.DocumentsFiles.CurrentEO; let j = index\">\r\n                    {{Element}}\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDelete('Repo_CurrentEO',j)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>remove</mat-icon>\r\n                    </button>\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDownload('FileUpload',Agency.AgencyDocumentId,'CurrentEO[]',Element)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>cloud_download</mat-icon>\r\n                    </button>\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileView('FileUpload',Agency.AgencyDocumentId,'CurrentEO[]',Element)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>pageview</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                </mat-list>\r\n              </div>\r\n            </div>\r\n            <div class='col-md-4'>\r\n              <mat-label>✓ W9</mat-label>\r\n              <input hidden (change)=\"onFileSelected('W9')\" multiple #fileW9 type=\"file\" id=\"fileW9\">\r\n              <button type=\"button\" mat-icon-button\r\n                      mat-raised-button\r\n                      matSuffix\r\n                      color=\"primary\"\r\n                      [matBadgeHidden]=\"this.W9_files.length > 0 || this.DocumentsFiles.W9.length > 0\"\r\n                      matBadge=\"{{this.W9_files.length}}\"\r\n                      matBadgePosition=\"before\"\r\n                      matBadgeColor=\"warn\"\r\n                      (click)=\"fileW9.click()\">\r\n                <mat-icon>cloud_upload</mat-icon>\r\n              </button>\r\n              <mat-error *ngIf=\"this.W9_files.length == 0 && this.DocumentsFiles.W9.length == 0\">Enter at least one document</mat-error>\r\n              <div class=\"row scroller-container\">\r\n                <mat-list role=\"list\" class='col-md-12' cdkScrollable>\r\n                  <mat-list-item role=\"listitem\" *ngFor=\"let Element of this.W9_files; let j = index\">\r\n                    {{Element.name}}\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDelete('W9',j)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                  <mat-list-item role=\"listitem\" *ngFor=\"let Element of this.DocumentsFiles.W9; let j = index\">\r\n                    {{Element}}\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDelete('Repo_W9',j)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>remove</mat-icon>\r\n                    </button>\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileDownload('FileUpload',Agency.AgencyDocumentId,'W9[]',Element)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>cloud_download</mat-icon>\r\n                    </button>\r\n                    <button type=\"button\" mat-icon-button mat-raised-button matSuffix (click)=\"fileView('FileUpload',Agency.AgencyDocumentId,'W9[]',Element)\" class=\"icon-button-medium agency-button-row\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>pageview</mat-icon>\r\n                    </button>\r\n                  </mat-list-item>\r\n                </mat-list>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br><hr /><br>\r\n  \r\n         \r\n          <div class=\"row\" *ngIf=\"currentUser\">\r\n            <div class='col-md-12 example-full-width'>\r\n              <mat-form-field #matformfield appearance=\"outline\" class=\"example-full-width col-md-12\">\r\n                <mat-label>Remarks</mat-label>\r\n                <textarea matInput rows=\"4\" class=\"form-control\" formControlName=\"AgencyRemarks\" name=\"AgencyRemarks\" [(ngModel)]=\"Agency.AgencyRemarks\" name=\"AgencyRemarks\" placeholder=\"Remarks\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          \r\n          <mat-card>\r\n            <div class='row'>\r\n              <div class='col-md-6 float-left'>\r\n                <button (click)=\"onClickSaveAgency(Agency.AgencyId)\" class=\"mat-fab-bottom-right mat-color\" mat-fab>\r\n                  <mat-icon>save</mat-icon>\r\n                </button>                \r\n                Save\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n  \r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\r\n<block-ui>\r\n  <app-nav-menu *ngIf=\"currentUser\"></app-nav-menu>\r\n  \r\n  <!--<nav class='navbar navbar-expand-lg navbar-dark flex-row' style=\"background-color:#6E594A;\" *ngIf=\"currentUser\">\r\n      <div class=\"navbar-header p-0\">\r\n        <a class='navbar-brand' [routerLink]='[\"/\"]'>Avian.Web</a>\r\n        <button type='button' class='navbar-toggler' data-toggle='collapse' data-target='#navbarNav' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n          <span class='sr-only'>Toggle navigation</span>\r\n          <span class='navbar-toggler-icon'></span>\r\n        </button>\r\n      </div>\r\n      <div class='clearfix p-2'></div>\r\n      <div id=\"navbarNav\" class='navbar-collapse collapse p-12' [ngClass]='{ \"in\": isExpanded }'>\r\n        <ul class='nav navbar-nav flex-row mr-auto'>        \r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a [routerLink]='[\"/agency-form\"]' class=\"nav-link\" (click)='collapse()'>\r\n              <span class='fas fa-home'></span> Add Agency\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n            <a [routerLink]='[\"/broker-information\"]' class=\"nav-link\" (click)='collapse()'>\r\n              <span class='fas fa-sort-amount-up'></span> Broker Information\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n            <a [routerLink]='[\"/manage-user\"]' class=\"nav-link\" (click)='collapse()'>\r\n              <span class='fas fa-database'></span> Manage User\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n            <a [routerLink]='[\"/manage-catlogs\"]' class=\"nav-link\" (click)='collapse()'>\r\n              <span class='fas fa-database'></span> Manage Catlogs\r\n            </a>\r\n          </li>    \r\n        </ul>\r\n      </div>    \r\n      <a class=\"nav-item nav-link float-right\" (click)=\"logout()\">Logout</a>    \r\n  </nav>-->\r\n  <!-- main app container -->\r\n  <!--<div class=\"container\">-->\r\n      <router-outlet></router-outlet>\r\n  <!--</div>-->\r\n  </block-ui>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/broker-information/broker-information.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/broker-information/broker-information.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-12'>\r\n      <h3 mat-dialog-title>\r\n        Broker Information\r\n      </h3>\r\n      <div class=\"broker-information-container mat-elevation-z8\">\r\n        <table mat-table [dataSource]=\"dataSource\">\r\n\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"DateTimeCreate\" sticky>\r\n            <th mat-header-cell *matHeaderCellDef> Date Create </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.DateTimeCreate}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"AgencyRequestNumber\">\r\n            <th mat-header-cell *matHeaderCellDef> Request Number </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.AgencyRequestNumber}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Weight Column -->\r\n          <ng-container matColumnDef=\"AgencyName\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.AgencyName}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"Abemail\">\r\n            <th mat-header-cell *matHeaderCellDef> Email </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <table>\r\n                <tr *ngFor=\"let Email of element.Abemail\">\r\n                  <td>{{Email.Email}}</td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"Abphone\">\r\n            <th mat-header-cell *matHeaderCellDef> Phone </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <table>\r\n                <tr *ngFor=\"let Phone of element.Abphone\">\r\n                  <td>{{Phone.Phone}}</td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"AgencyStatus\">\r\n            <th mat-header-cell *matHeaderCellDef> Status </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <table>\r\n                <tr *ngFor=\"let Status of this.CatlogsAgencyStatus\">\r\n                  <td *ngIf=\"element.AgencyStatus==Status.CatlogsId\">{{Status.CatlogsName}}</td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Star Column -->\r\n          <ng-container matColumnDef=\"star\" stickyEnd>\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n\r\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"viewAgency(element.AgencyId)\">\r\n                  <mat-icon>pageview</mat-icon>\r\n                  <span>View</span>\r\n                </button>\r\n                <button mat-menu-item (click)=\"deleteAgency(element.AgencyId)\" *ngIf=\"checkPermissions('Delete')\">\r\n                  <mat-icon>delete_forever</mat-icon>\r\n                  <span>Delete</span>\r\n                </button>\r\n                <button *ngIf=\"element.DocumentGenerateStatus\" mat-menu-item (click)=\"viewDocument(element.AgencyRequestNumber)\">\r\n                  <mat-icon>attach_file</mat-icon>\r\n                  <span>File</span>\r\n                </button>\r\n              </mat-menu>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/catlogs-form/catlogs-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/catlogs-form/catlogs-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>\n    <div class='container-fluid'>\n      <div class='row'>\n        <div class='col-sm-12'>\n          <h3 mat-dialog-title>\n            Catlogs\n          </h3>\n          <div class=\"broker-information-container mat-elevation-z8\">\n            <table #tableCatlogs mat-table [dataSource]=\"dataSourceCatlogs\">\n    \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"CatlogsName\" sticky>\n                <th mat-header-cell *matHeaderCellDef> Catlog Name</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.CatlogsName}} </td>\n              </ng-container>\n    \n              <!-- Position Column -->\n              <ng-container matColumnDef=\"CatlogsPrefix\">\n                <th mat-header-cell *matHeaderCellDef> Catlog Prefix </th>              \n                <td mat-cell *matCellDef=\"let element\"> {{element.CatlogsPrefix}} </td>\n              </ng-container>\n    \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"CatlogsType\">\n                <th mat-header-cell *matHeaderCellDef> Catlog Type </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.CatlogsType}} </td>\n              </ng-container>           \n    \n              <!-- Star Column -->\n              <ng-container matColumnDef=\"star\" stickyEnd>\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td mat-cell *matCellDef=\"let element;index as i;\">\n    \n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"viewCatlogs(i)\">\n                      <mat-icon>pageview</mat-icon>\n                      <span>View</span>\n                    </button>\n                  </mat-menu>\n                </td>\n              </ng-container>\n    \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsCatlogs\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumnsCatlogs;\"></tr>\n            </table>\n            <mat-paginator #MatPaginatorCatlogs=\"matPaginator\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n          </div>\n    \n        </div>\n      </div>\n    </div>   \n  </mat-grid-tile>\n  <mat-grid-tile>\n    <div class='container-fluid'>\n      <div class='row'>\n        <div class='col-sm-12'>\n          <h3 mat-dialog-title>\n            States\n          </h3>\n          <div class=\"broker-information-container mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSourceStates\">        \n    \n              <!-- Position Column -->\n              <ng-container matColumnDef=\"StateName\">\n                <th mat-header-cell *matHeaderCellDef> State Name </th>              \n                <td mat-cell *matCellDef=\"let element\"> {{element.StateName}} </td>\n              </ng-container>\n    \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"StatePrefix\">\n                <th mat-header-cell *matHeaderCellDef> State Prefix </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.StatePrefix}} </td>\n              </ng-container>           \n    \n              <!-- Star Column -->\n              <ng-container matColumnDef=\"star\" stickyEnd>\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td mat-cell *matCellDef=\"let element;index as i;\">\n    \n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"State\">\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"viewCatlog(i)\">\n                      <mat-icon>pageview</mat-icon>\n                      <span>View</span>\n                    </button>\n                  </mat-menu>\n                </td>\n              </ng-container>\n    \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsStates\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumnsStates;\"></tr>\n            </table>\n            <mat-paginator #MatPaginatorStates=\"matPaginator\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n          </div>\n    \n        </div>\n      </div>\n    </div>     \n  </mat-grid-tile>\n  <mat-grid-tile>\n    <div class='container-fluid'>\n      <div class='row'>\n        <div class='col-sm-12'>\n          <h3 mat-dialog-title>\n            Product Written\n          </h3>\n          <div class=\"broker-information-container mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSourceCatlogsProductWritten\">        \n    \n              <!-- Position Column -->\n              <ng-container matColumnDef=\"ProductWrittenCatlogsName\">\n                <th mat-header-cell *matHeaderCellDef> ProductWritten Name </th>              \n                <td mat-cell *matCellDef=\"let element\"> {{element.ProductWrittenCatlogsName}} </td>\n              </ng-container>\n    \n              <!-- Star Column -->\n              <ng-container matColumnDef=\"star\" stickyEnd>\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td mat-cell *matCellDef=\"let element;index as i;\">\n    \n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Product Written\">\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"viewCatlog(i)\">\n                      <mat-icon>pageview</mat-icon>\n                      <span>View</span>\n                    </button>\n                  </mat-menu>\n                </td>\n              </ng-container>\n    \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsProductWritten\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumnsProductWritten;\"></tr>\n            </table>\n            <mat-paginator #MatPaginatorProductWritten=\"matPaginator\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n          </div>\n    \n        </div>\n      </div>\n    </div>   \n  </mat-grid-tile>\n  <mat-grid-tile>\n    <div class='container-fluid'>\n      <div class='row'>\n        <div class='col-sm-12'>\n          <h3 mat-dialog-title>\n            Profile\n          </h3>\n          <div class=\"broker-information-container mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSourceProfile\">        \n    \n              <!-- Position Column -->\n              <ng-container matColumnDef=\"ProfileName\">\n                <th mat-header-cell *matHeaderCellDef> Profile Name </th>              \n                <td mat-cell *matCellDef=\"let element\"> {{element.ProfileName}} </td>\n              </ng-container>\n    \n              <!-- Star Column -->\n              <ng-container matColumnDef=\"star\" stickyEnd>\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td mat-cell *matCellDef=\"let element;index as i;\">\n    \n                  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Profile\">\n                    <mat-icon>more_vert</mat-icon>\n                  </button>\n                  <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"viewCatlog(i)\">\n                      <mat-icon>pageview</mat-icon>\n                      <span>View</span>\n                    </button>\n                  </mat-menu>\n                </td>\n              </ng-container>\n    \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsProfile\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumnsProfile;\"></tr>\n            </table>\n            <mat-paginator #MatPaginatorProfile=\"matPaginator\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n          </div>\n    \n        </div>\n      </div>\n    </div>   \n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-catlogs-form/dialog-catlogs-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-catlogs-form/dialog-catlogs-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-document/dialog-document.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-document/dialog-document.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <mat-list role=\"list\">\r\n    <mat-list-item role=\"listitem\" *ngFor=\"let Element of data.Document; let j = index\">      \r\n      <button mat-raised-button (click)=\"DownloadFile(Element)\" class='col-md-12'><mat-icon>cloud_download</mat-icon>{{Element.NameDisplay}}</button>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close] cdkFocusInitial>Close</button>    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-follow/dialog-follow.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-follow/dialog-follow.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dialog-follow works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-statusemail/dialog-statusemail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-statusemail/dialog-statusemail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n      <mat-card-header>\n        <mat-card-title *ngIf='this.IsNullOrGuidEmpty(EmailStatus.EmailStatusId)'>Add Status Email</mat-card-title>\n        <mat-card-title *ngIf='!this.IsNullOrGuidEmpty(EmailStatus.EmailStatusId)'>Edit Status Email</mat-card-title>\n      </mat-card-header>\n  \n      <form [formGroup]=\"EmailStatusForm\">\n  \n        <mat-card-content>\n          <mat-card class='col-md-12'>\n            <div class='row' >\n               <div class=\"col-md-6\">\n                <mat-button-toggle-group class=\"float-left\" appearance=\"legacy\" class=\"form-control\" formControlName=\"EmailStatus\" [(ngModel)]=\"EmailStatus.Status\" [value]=\"EmailStatus.Status\" name=\"fontStyle\" class='float-right' aria-label=\"Font Style\" #group=\"matButtonToggleGroup\">                \n                    <mat-button-toggle class=\"col-md-6\" [value]=\"true\">Active</mat-button-toggle>                  \n                    <mat-button-toggle class=\"col-md-6\" [value]=\"false\">Inactive</mat-button-toggle>                                  \n                </mat-button-toggle-group>\n              </div>\n              <div class=\"col-md-6\">\n                <mat-form-field appearance=\"fill\" class='float-right'>\n                  <mat-label>Type Send</mat-label>\n                  <input matInput type=\"number\" readonly [(ngModel)]=\"EmailStatus.TypeSend\" formControlName=\"TypeSend\" name=\"TypeSend\" placeholder=\"\">\n                </mat-form-field>\n              </div>\n            </div>\n          </mat-card>\n          <mat-form-field appearance=\"fill\" class='col-md-12'>\n            <mat-label>Status</mat-label>\n            <mat-select [(ngModel)]=\"EmailStatus.StatusCatlogsId\" name=\"StatusCatlogs\" formControlName=\"StatusCatlogs\" placeholder=\"Status\">\n              <mat-option *ngFor=\"let Status of this.CatlogsAgencyStatus\" [value]=\"Status.CatlogsId\">\n                {{Status.CatlogsName}}\n              </mat-option>\n            </mat-select>\n            <mat-error>Required</mat-error> \n          </mat-form-field>\n          <div class=\"scroller-container\" formArrayName=\"EmailToControl\">\n            <mat-card class='col-md-12' *ngFor=\"let EmailTo of EmailStatus.EmailTo; let i = index;trackBy:trackByIdx\" [formGroupName]=\"i\" cdkScrollable>\n                <mat-form-field class=\"col-sm-10\">\n                    <input matInput [(ngModel)]=\"EmailStatus.EmailTo[i]\" formControlName=\"EmailTo\" name=\"EmailTo\" placeholder=\"Email To\">\n                </mat-form-field>\n                <button class='col-md-2' type=\"button\"  mat-icon-button mat-raised-button matSuffix (click)=\"i==0?onClickEmailToAdd(i):onClickEmailToRemove(i)\" [attr.aria-pressed]=\"hide\">\n                    <mat-icon *ngIf=\"i==0\">add_circle</mat-icon>\n                    <mat-icon *ngIf=\"i>0\">remove_circle</mat-icon>\n                </button>\n            </mat-card>\n          </div>\n          <div class=\"scroller-container\" formArrayName=\"EmailCcControl\">\n            <mat-card class='col-md-12' *ngFor=\"let EmailCc of EmailStatus.EmailCc; let j = index;trackBy:trackByIdx\" [formGroupName]=\"j\" cdkScrollable>\n                <mat-form-field class=\"col-sm-10\" >\n                    <input matInput [(ngModel)]=\"EmailStatus.EmailCc[j]\" formControlName=\"EmailCc\" name=\"EmailCc\" placeholder=\"Email Cc\">\n                </mat-form-field>\n                <button class='col-md-2' type=\"button\"  mat-icon-button mat-raised-button matSuffix (click)=\"j==0?onClickEmailCcAdd(j):onClickEmailCcRemove(j)\" [attr.aria-pressed]=\"hide\">\n                    <mat-icon *ngIf=\"j==0\">add_circle</mat-icon>\n                    <mat-icon *ngIf=\"j>0\">remove_circle</mat-icon>\n                </button>\n            </mat-card>\n          </div>\n        </mat-card-content>              \n  \n        <button type=\"button\" *ngIf=\"this.IsNullOrGuidEmpty(EmailStatus.EmailStatusId)\" color=\"accent\" (click)=\"SaveEmailStatus()\" class=\"btn-block\">Add</button>\n        <button type=\"button\" *ngIf=\"!this.IsNullOrGuidEmpty(EmailStatus.EmailStatusId)\" color=\"accent\" (click)=\"SaveEmailStatus()\" class=\"btn-block\">Edit</button>\n  \n      </form>\n    </mat-card>\n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close] cdkFocusInitial>Close</button>    \n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-user-permissions/dialog-user-permissions.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-user-permissions/dialog-user-permissions.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n        <mat-card-header>\n        <mat-card-title>Add Permissions</mat-card-title>\n        </mat-card-header>\n    \n        <form [formGroup]=\"PermissionsForm\">\n        \n        <mat-card >\n            <div class='row' >\n                <div class='col-md-12'>\n                <mat-button-toggle-group class=\"float-right\" appearance=\"legacy\" class=\"form-control\" formControlName=\"PermissionsType\" [(ngModel)]=\"Catlogs.CatlogsType\" [value]=\"Catlogs.CatlogsType\" name=\"fontStyle\" class='float-right' aria-label=\"Font Style\" #group=\"matButtonToggleGroup\">                \n                    <mat-button-toggle [value]=\"'Permissions'\">Permissions Form</mat-button-toggle>                  \n                    <mat-button-toggle [value]=\"'PermissionsCRUD'\">Permissions CRUD</mat-button-toggle>                                  \n                </mat-button-toggle-group>\n                </div>\n            </div>\n        </mat-card>\n    \n        <mat-card-content>\n            <mat-form-field class=\"col-sm-12\">\n            <input matInput [(ngModel)]=\"Catlogs.CatlogsName\" formControlName=\"PermissionsName\" name=\"PermissionsName\" placeholder=\"Permissions Name\">\n            </mat-form-field>          \n            <mat-form-field class=\"col-sm-12\">\n                <input matInput [(ngModel)]=\"Catlogs.CatlogsPrefix\" formControlName=\"PermissionsPrefix\" name=\"PermissionsPrefix\" placeholder=\"Permissions Prefix\">\n            </mat-form-field>  \n        </mat-card-content>  \n        <button type=\"button\" color=\"accent\" (click)=\"SavePermissions()\" class=\"btn-block\">Add</button>  \n        </form>\n    </mat-card>\n    </div>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-user-profile/dialog-user-profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-user-profile/dialog-user-profile.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n        <mat-card-header>\n        <mat-card-title>Add Profile</mat-card-title>\n        </mat-card-header>\n    \n        <form [formGroup]=\"ProfileForm\">\n    \n        <mat-card-content>\n            <mat-form-field class=\"col-sm-12\">\n            <input matInput [(ngModel)]=\"Profile.ProfileName\" formControlName=\"ProfileName\" name=\"Profile\" placeholder=\"Profile\">\n            </mat-form-field>          \n        </mat-card-content>  \n        <button type=\"button\" color=\"accent\" (click)=\"SaveProfile()\" class=\"btn-block\">Add</button>  \n        </form>\n    </mat-card>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-user/dialog-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-user/dialog-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n      <mat-card-header>\n        <mat-card-title *ngIf='this.IsNullOrGuidEmpty(User.UserId)'>Add User</mat-card-title>\n        <mat-card-title *ngIf='!this.IsNullOrGuidEmpty(User.UserId)'>Edit User</mat-card-title>\n      </mat-card-header>\n  \n      <form [formGroup]=\"UserForm\">\n  \n        <mat-card-content>\n          <mat-card class='col-md-12'>\n            <div class='row' >\n                <div>\n                <mat-button-toggle-group class=\"float-right\" appearance=\"legacy\" class=\"form-control\" formControlName=\"UserStatus\" [(ngModel)]=\"User.Status\" [value]=\"User.Status\" name=\"fontStyle\" class='float-right' aria-label=\"Font Style\" #group=\"matButtonToggleGroup\">                \n                    <mat-button-toggle class=\" col-md-6\" [value]=\"true\">Active</mat-button-toggle>                  \n                    <mat-button-toggle class=\" col-md-6\" [value]=\"false\">Inactive</mat-button-toggle>                                  \n                </mat-button-toggle-group>\n                </div>\n            </div>\n          </mat-card>\n          <mat-form-field class=\"col-sm-12\">\n            <input matInput [(ngModel)]=\"User.FirstName\" formControlName=\"FirstName\" name=\"FirstName\" placeholder=\"FirstName\">\n          </mat-form-field>\n          <mat-form-field class=\"col-sm-12\">\n            <input matInput [(ngModel)]=\"User.LastName\" formControlName=\"LastName\" name=\"LastName\" placeholder=\"LastName\">\n          </mat-form-field>\n          <mat-form-field class=\"col-sm-12\">\n            <input matInput [(ngModel)]=\"User.UserName\" formControlName=\"UserName\" name=\"UserName\" placeholder=\"User Name\">\n          </mat-form-field>\n  \n          <mat-form-field class=\"col-sm-12\">\n            <input matInput [(ngModel)]=\"User.Email\" formControlName=\"Email\" name=\"Email\" placeholder=\"Email\">\n          </mat-form-field>\n  \n          <mat-form-field class=\"col-sm-12\">\n            <input matInput type=\"password\" [(ngModel)]=\"User.Password\" formControlName=\"Password\" name=\"Password\" placeholder=\"Password\">\n          </mat-form-field>  \n          \n          <div class=\"scroller-container\">\n          <mat-card formArrayName=\"ProfileControl\" *ngFor=\"let ProfileUser of User.ProfileUser; let i = index\" cdkScrollable>                 \n              <div *ngFor=\"let Profile of ProfileUser.Profile; let j = index\" [formGroupName]=\"j\" class='col-md-12'>    \n               <div class='row' *ngIf=\"this.User.ProfileUser[i].Profile[j].ControlUpdate\">               \n                <div class='col-md-12'>\n                  <mat-form-field  class='col-md-10'>\n                    <mat-label>Profile</mat-label>\n                    <mat-select [(ngModel)]=\"this.User.ProfileUser[i].Profile[j].CatlogsId\" [compareWith]=\"compareProfile\" name=\"Profile\" #Profile formControlName=\"Profile\" placeholder=\"Profile\" (selectionChange)=\"profileChanged(i,j,$event.value)\">\n                      <mat-option *ngFor=\"let Profile of data.Profile;let j = index\" [value]=\"Profile.ProfileId\">\n                        {{Profile.ProfileName}}\n                      </mat-option>\n                    </mat-select>                \n                  </mat-form-field>\n                  <button class='col-md-2' type=\"button\"  mat-icon-button mat-raised-button matSuffix (click)=\"j==0?onClickProfileAdd(i,j):onClickProfileRemove(i,j)\" [attr.aria-pressed]=\"hide\">\n                    <mat-icon *ngIf=\"j==0\">add_circle</mat-icon>\n                    <mat-icon *ngIf=\"j>0\">remove_circle</mat-icon>\n                  </button>\n                </div> \n                <div class='col-md-12'>              \n                    <mat-form-field class='col-md-12'>\n                      <mat-label>Permission:</mat-label>\n                      <mat-select  #PermissionSelect multiple required [compareWith]=\"compareObjects\" formControlName=\"Permission\" [(ngModel)]=\"this.User.ProfileUser[i].Profile[j].Permissions\" name=\"Permission\" placeholder=\"Permission\">\n                        <mat-option  *ngFor=\"let Catlog of this.data.Permission\"\n                                    [value]=\"Catlog\">\n                          {{Catlog.CatlogsName}}\n                        </mat-option>\n                        <mat-option  *ngFor=\"let Catlog of this.data.PermissionCRUD\"\n                                    [value]=\"Catlog\">\n                          {{Catlog.CatlogsName}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div> \n              </div>             \n            </div>          \n          </mat-card>\n          </div>\n        </mat-card-content>\n  \n        <button type=\"button\" *ngIf=\"this.IsNullOrGuidEmpty(User.UserId)\" color=\"accent\" (click)=\"SaveUser()\" class=\"btn-block\">Add</button>\n        <button type=\"button\" *ngIf=\"!this.IsNullOrGuidEmpty(User.UserId)\" color=\"accent\" (click)=\"SaveUser()\" class=\"btn-block\">Edit</button>\n  \n      </form>\n    </mat-card>\n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close] cdkFocusInitial>Close</button>    \n  </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog/dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class='row'>\r\n    <div class='col-md-12' style=\"text-align: center;\">\r\n      <mat-icon [ngStyle]=\"{'color': '#F4FC1F', 'transform': 'scale(2)'}\">warning</mat-icon>\r\n    </div>\r\n</div>\r\n<br>\r\n<h4 style=\"text-align: center;\">{{data.Action}}</h4>\r\n<mat-dialog-content>\r\n<h5 style=\"text-align: center;\">{{data.Message}}</h5>    \r\n</mat-dialog-content>\r\n<mat-dialog-actions><button mat-button [mat-dialog-close] cdkFocusInitial>Close</button>    \r\n</mat-dialog-actions>-->\r\n\r\n<mat-dialog-content>\r\n  <mat-card style=\"margin:0em;padding-top:0;padding-left:0;padding-right:0\" class=\"example-card\">\r\n    <mat-card-title style=\"background:rgba(0,0,0,.06); padding:20px 20px;\">\r\n      {{data.Message}}\r\n      <mat-icon [ngStyle]=\"{'float':'right', 'transform':'scale(2)','padding':'3px'}\">warning</mat-icon>\r\n    </mat-card-title>\r\n    <mat-card-content style=\"padding:1em;\">\r\n      <p>\r\n        {{data.Action}}\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions >    \r\n     \r\n    </mat-card-actions>\r\n  </mat-card>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions><button mat-button [mat-dialog-close] cdkFocusInitial>Close</button>\r\n  </mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">You're logged in with Angular 8 & Basic HTTP Authentication!!</h4>\n    <div class=\"card-body\">\n        <h6>Users from secure api end point</h6>\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\n        <ul *ngIf=\"users\">\n            <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor\">\r\n\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-card class=\"tarjeta\">\r\n      <mat-card-header>\r\n\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"assets/img/avian-bap.png\" alt=\"Photo of a Shiba Inu\">\r\n\r\n\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Username\" class=\"form-control\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n        <mat-error>Username is required</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"Password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n        <mat-error>Password is required</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-card-actions>\r\n        <button mat-button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n          <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n          Login\r\n        </button>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class='main-nav'>-->\r\n  <nav class='navbar navbar-expand-lg navbar-dark flex-row' style=\"background-color:#6E594A;\">\r\n    <div class=\"navbar-header p-0\">\r\n      <a class='navbar-brand' [routerLink]='[\"/\"]'>Avian.Web</a>\r\n      <button type='button' class='navbar-toggler' data-toggle='collapse' data-target='#navbarNav' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='navbar-toggler-icon'></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"contenedor\">\r\n      <mat-card class=\"tarjeta\">\r\n        <mat-card-header>\r\n  \r\n        </mat-card-header>\r\n        <img mat-card-image src=\"assets/img/avian-bap.png\" alt=\"Avian Web\">\r\n  \r\n      </mat-card>\r\n    </div>\r\n    <div class='clearfix p-2'></div>\r\n    <!--<div id=\"navbarNav\" class='navbar-collapse collapse p-12' [ngClass]='{ \"in\": isExpanded }'>\r\n      <ul class='nav navbar-nav flex-row mr-auto'>\r\n        <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' *ngFor=\"let Permissions of this.CatlogsPermissions; let j = index\">\r\n          <a [routerLink]='[Permissions.CatlogsPrefix]' class=\"nav-link\" (click)='collapse()'>\r\n            <span class='fas fa-home'></span> {{Permissions.CatlogsName}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>-->\r\n  \r\n    <div id=\"navbarNav\" class='navbar-collapse collapse p-12' [ngClass]='{ \"in\": isExpanded }'>\r\n      <ul class='nav navbar-nav flex-row mr-auto'>\r\n        <li *ngFor=\"let Profile of this.currentUser.Data.ProfileUser; let j = index\">\r\n          <ul class='nav navbar-nav flex-row mr-auto'>\r\n            <li *ngFor=\"let ProfileArray of Profile.Profile; let k = index\">\r\n              <ul class='nav navbar-nav flex-row mr-auto'>\r\n                <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' *ngFor=\"let Permissions of ProfileArray.Permissions; let l = index\">\r\n                    <a *ngIf=\"Permissions.CatlogsType=='Permissions'\" [routerLink]='[Permissions.CatlogsPrefix]' class=\"nav-link\" (click)='collapse()'>\r\n                      <span class='fas fa-home'></span> {{Permissions.CatlogsName}}\r\n                    </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>  \r\n  \r\n    <div class='nav-item nav-link float-right text-light'>\r\n      <button (click)=\"logout()\" class=\"mat-fab-bottom-right mat-color\" mat-fab style=\"background-color: white;\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n      </button>\r\n      Logout\r\n    </div>\r\n    <button class=\"text-light\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"ViewAgencyForm('agency-form-plain')\">\r\n        <mat-icon>list</mat-icon>\r\n        <span>View Plain</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"ViewAgencyForm('agency-form')\">\r\n        <mat-icon>view_list</mat-icon>\r\n        <span>View Stepper</span>\r\n      </button>\r\n    </mat-menu>\r\n  </nav>  \r\n  <!--</div>-->\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/status-email/status-email.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/status-email/status-email.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n    <div class='row'>\n      <div class='col-sm-12'>\n        <h3 mat-dialog-title>\n          Email Status\n        </h3>\n        <div class=\"broker-information-container mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\">\n  \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"EmailStatus\" sticky>\n              <th mat-header-cell *matHeaderCellDef> Email Status </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.EmailStatus}} </td>\n            </ng-container>\n  \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"EmailTo\">\n              <th mat-header-cell *matHeaderCellDef> Email To </th>              \n              <td mat-cell *matCellDef=\"let element\"> \n                <mat-list *ngFor=\"let EmailTo of element.EmailTo\">\n                  <mat-list-item > {{EmailTo}}  </mat-list-item>                  \n                </mat-list>\n                <!--<table>\n                 <tr *ngFor=\"let EmailTo of element.EmailTo\">\n                   <td> {{EmailTo}}  </td>                  \n                 </tr>                \n                </table>-->\n              </td>\n            </ng-container>\n  \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"EmailCc\">\n              <th mat-header-cell *matHeaderCellDef> Email Cc </th>\n              <td mat-cell *matCellDef=\"let element\">                 \n              <!--{{element.EmailCc}}-->\n                 <mat-list *ngFor=\"let EmailCc of element.EmailCc\">\n                   <mat-list-item > {{EmailCc}}  </mat-list-item>                  \n                 </mat-list>\n              </td>\n            </ng-container>           \n  \n            <!-- Star Column -->\n            <ng-container matColumnDef=\"star\" stickyEnd>\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element;index as i;\">\n  \n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item (click)=\"viewEmailStatus(i)\">\n                    <mat-icon>pageview</mat-icon>\n                    <span>View</span>\n                  </button>\n                </mat-menu>\n              </td>\n            </ng-container>\n  \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n  \n      </div>\n    </div>\n  </div>\n  \n  \n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-form/user-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-form/user-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>  \n  <div class='row'>\n    <div class='col-sm-12'>\n      <h3 mat-dialog-title>\n        Manager User\n      </h3>\n    </div>\n  </div>\n  <div class='row'>  \n    <div class='col-sm-2'>        \n        <button mat-menu-item class=\"float-left\" (click)=\"AddUser()\">\n          <mat-icon>add_circle_outline</mat-icon>\n          <span>Add User</span>\n        </button>        \n    </div>\n    <div class='col-sm-2'>        \n      <button mat-menu-item class=\"float-left\" (click)=\"AddProfile()\">\n        <mat-icon>add_circle_outline</mat-icon>\n        <span>Add Profile</span>\n      </button>        \n    </div>\n    <div class='col-sm-2'>        \n      <button mat-menu-item class=\"float-left\" (click)=\"AddPermissions()\">\n        <mat-icon>add_circle_outline</mat-icon>\n        <span>Add Permissions</span>\n      </button>        \n    </div>\n    <div class='col-sm-6'>\n      <mat-form-field class=\"float-right col-sm-3\">\n        <mat-label>Filter</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n      </mat-form-field>\n    </div>\n  </div>\n  <div class='row'>  \n    <div class='col-sm-12'>\n      <div class=\"user-form-container mat-elevation-z8\">          \n        <table mat-table [dataSource]=\"dataSource\">  \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"UserName\" sticky>\n            <th mat-header-cell *matHeaderCellDef> User Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.UserName}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Password\" sticky>\n            <th mat-header-cell *matHeaderCellDef> Password </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Password}} </td>\n          </ng-container>            \n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"FirstName\">\n            <th mat-header-cell *matHeaderCellDef> First Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.FirstName}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"LastName\">\n            <th mat-header-cell *matHeaderCellDef> Last Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.LastName}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"Email\">\n            <th mat-header-cell *matHeaderCellDef> Email </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Email}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"ProfileUser\">\n            <th mat-header-cell *matHeaderCellDef> Profile </th>\n            <td mat-cell *matCellDef=\"let element\">                \n              <table *ngFor=\"let ProfileUser of element.ProfileUser; index as i\">\n                <tr *ngFor=\"let Profile of ProfileUser.Profile; index as j\">\n                  <td>\n                    {{Profile.ProfileName}}\n                    <table>                        \n                      <tr>\n                        <td>               \n                          <mat-accordion>                              \n                            <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                                 (closed)=\"panelOpenState = false\">\n                              <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                  Permissions\n                                </mat-panel-title>\n                              </mat-expansion-panel-header>\n                              <button mat-menu-item *ngFor=\"let Permissions of Profile.Permissions; index as i\">\n                                <mat-icon>perm_identity</mat-icon>\n                                <span>{{Permissions.CatlogsName}}</span>\n                              </button>\n                            </mat-expansion-panel>\n                          </mat-accordion>                           \n                        </td>                                      \n                      </tr>                                 \n                    </table>\n                  </td>                                      \n                </tr>                                              \n              </table>\n            </td>\n          </ng-container>           \n          \n\n          <!-- Star Column -->\n          <ng-container matColumnDef=\"star\" stickyEnd>\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\">\n\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)=\"viewUser(element.UserId)\">\n                  <mat-icon>pageview</mat-icon>\n                  <span>View</span>\n                </button>\n                <button mat-menu-item>\n                  <mat-icon>attach_file</mat-icon>\n                  <span>File</span>\n                </button>\n              </mat-menu>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");
/* harmony import */ var _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/StatesGet.service */ "./src/app/_services/StatesGet.service.ts");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");








let AuthGuard = class AuthGuard {
    constructor(router, authenticationService, AgencyService, StatesGetService, CatlogsGetService, ProfileGetService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.AgencyService = AgencyService;
        this.StatesGetService = StatesGetService;
        this.CatlogsGetService = CatlogsGetService;
        this.ProfileGetService = ProfileGetService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true     
            if (this.CatlogsGetService.CatlogsAgencyStatusValue == null) {
                this.CatlogsGetService.setCatlogs();
                this.StatesGetService.setStates();
                //this.ProfileGetService.setProfile();
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.AgencyService.setGuid("00000000-0000-0000-0000-000000000000");
        this.router.navigate(['/agency-form'] /*, { queryParams: { returnUrl: state.url, setGuid: "00000000-0000-0000-0000-000000000000" } }*/);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_3__["AgencyService"] },
    { type: _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_4__["StatesGetService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_5__["CatlogsGetService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        _services_agency_service__WEBPACK_IMPORTED_MODULE_3__["AgencyService"],
        _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_4__["StatesGetService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_5__["CatlogsGetService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/basic-auth.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/basic-auth.interceptor.ts ***!
  \****************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



let BasicAuthInterceptor = class BasicAuthInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.Data.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.Data.authdata}`
                }
            });
        }
        return next.handle(request);
    }
};
BasicAuthInterceptor.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
BasicAuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], BasicAuthInterceptor);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
        }
    }
};
FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, BasicAuthInterceptor, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-auth.interceptor */ "./src/app/_helpers/basic-auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["BasicAuthInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });







/***/ }),

/***/ "./src/app/_models/agency-model-data.ts":
/*!**********************************************!*\
  !*** ./src/app/_models/agency-model-data.ts ***!
  \**********************************************/
/*! exports provided: EmailStatusModel, ContactAutPhoneModel, FilesSaveModel, FilesModel, FileDataModel, AgencyPhoneModel, ContactAutEmailModel, AgencyEmailModel, AgencyDocumentModel, AgencyModel, ProductWrittenModel, ContactAutSendModel, ContactAutModel, CarrierModel, AbagencyProductWrittenModel, CatlogProductWrittenModel, OwnerOfficerModel, StatusModel, ErrorModel, MigrateAgencyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailStatusModel", function() { return EmailStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAutPhoneModel", function() { return ContactAutPhoneModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesSaveModel", function() { return FilesSaveModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesModel", function() { return FilesModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDataModel", function() { return FileDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyPhoneModel", function() { return AgencyPhoneModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAutEmailModel", function() { return ContactAutEmailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyEmailModel", function() { return AgencyEmailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDocumentModel", function() { return AgencyDocumentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyModel", function() { return AgencyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWrittenModel", function() { return ProductWrittenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAutSendModel", function() { return ContactAutSendModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAutModel", function() { return ContactAutModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierModel", function() { return CarrierModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbagencyProductWrittenModel", function() { return AbagencyProductWrittenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatlogProductWrittenModel", function() { return CatlogProductWrittenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerOfficerModel", function() { return OwnerOfficerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModel", function() { return StatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModel", function() { return ErrorModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrateAgencyModel", function() { return MigrateAgencyModel; });
class EmailStatusModel {
    constructor() {
        this.EmailStatusId = "00000000-0000-0000-0000-000000000000";
        this.StatusCatlogsId = "00000000-0000-0000-0000-000000000000";
        this.EmailStatus = null;
        this.EmailTo = [];
        this.EmailCc = [];
        this.TypeSend = -1;
        this.Status = true;
    }
}
class ContactAutPhoneModel {
    constructor() {
        this.PhoneId = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.ContAuId = "00000000-0000-0000-0000-000000000000";
        this.Phone = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class FilesSaveModel {
    constructor() {
        this.PCLicense = [];
        this.CurrentEO = [];
        this.W9 = [];
    }
}
class FilesModel {
    constructor() {
        this.FilePCLicense = new FileDataModel();
        this.FileCurrentEO = new FileDataModel();
        this.FileW9 = new FileDataModel();
    }
}
class FileDataModel {
    constructor() {
        this.FileData = null;
    }
}
class AgencyPhoneModel {
    constructor() {
        this.PhoneId = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.ContAuId = "00000000-0000-0000-0000-000000000000";
        this.Phone = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class ContactAutEmailModel {
    constructor() {
        this.EmailId = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.ContAuId = "00000000-0000-0000-0000-000000000000";
        this.Email = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class AgencyEmailModel {
    constructor() {
        this.EmailId = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.ContAuId = "00000000-0000-0000-0000-000000000000";
        this.Email = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class AgencyDocumentModel {
    constructor() {
        this.DocumentId = 0;
        this.DocumentFile = null;
        this.DocumentAgencyId = "00000000-0000-0000-0000-000000000000";
    }
}
class AgencyModel {
    constructor() {
        this.AbagencyProductWritten = [];
        this.Abdocument = [];
        this.Abphone = [];
        this.Abemail = [];
        this.AbownerOfficer = [];
        this.Abcarrier = [];
        this.AbcontAut = [];
        this.AbagencyMigrate = [];
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.AgencyStatus = "00000000-0000-0000-0000-000000000000";
        this.AgencyType = "00000000-0000-0000-0000-000000000000";
        this.UserIdCreate = "00000000-0000-0000-0000-000000000000";
        this.UserIdModify = "00000000-0000-0000-0000-000000000000";
        this.ResendStatus = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.AgencyName = null;
        this.AgencyTin = null;
        this.AgencyStreet = null;
        this.AgencyCity = null;
        this.AgencyState = null;
        this.AgencyZip = null;
        this.AgencyAnnualB = null;
        this.AgencyAnnualP = null;
        this.AgencyNumberYear = null;
        this.AgencyRemarks = null;
        this.AgencyNumberEmployee = null;
        this.AgencyAverageSize = null;
        this.AgencyAccountBankName = null;
        this.AgencyAccountRoutingNumber = null;
        this.AgencyAccountAccountNumber = null;
        this.AgencyAccountHoldersName = null;
        this.AgencyDocumentId = 0;
        this.AgencyGeneralDataIsCorrect = false;
        this.AgencyOwnerOfficerisCorrect = false;
        this.AgencyTrustAccountIsCorrect = false;
        this.AgencyAuthorizedContcatIsCorrect = false;
        this.DocumentGenerateStatus = false;
        this.Token = null;
        this.Abdocument.push(new AgencyDocumentModel);
        this.Abphone.push(new AgencyPhoneModel);
        this.Abemail.push(new AgencyEmailModel);
        this.AbownerOfficer.push(new OwnerOfficerModel);
        this.Abcarrier.push(new CarrierModel);
        this.AbcontAut.push(new ContactAutModel);
        this.AbagencyMigrate.push(new MigrateAgencyModel);
        //this.AbagencyProductWritten.push(new AbagencyProductWrittenModel);
    }
}
class ProductWrittenModel {
    constructor() {
        this.ProductWrittenAgencyId = null;
        this.ProductWrittenCatlogsId = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class ContactAutSendModel {
    constructor() {
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.Title = null;
        this.FirstName = null;
        this.MiddleName = null;
        this.LastName = null;
        this.Abemail = new ContactAutEmailModel();
        this.Abphone = new ContactAutPhoneModel();
    }
}
class ContactAutModel {
    constructor() {
        this.Abemail = [];
        this.Abphone = [];
        this.ContAutId = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.Title = null;
        this.FirstName = null;
        this.MiddleName = null;
        this.LastName = null;
        this.Abemail.push(new ContactAutEmailModel);
        this.Abphone.push(new ContactAutPhoneModel);
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class CarrierModel {
    constructor() {
        this.CarrierId = "00000000-0000-0000-0000-000000000000";
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.CarrierName = null;
        this.AgentName = null;
        this.AppointedSince = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class AbagencyProductWrittenModel {
    constructor() {
        this.ProductWrittenId = "00000000-0000-0000-0000-000000000000";
        this.ProductWrittenAgencyId = "00000000-0000-0000-0000-000000000000";
        this.ProductWrittenCatlogsId = "00000000-0000-0000-0000-000000000000";
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
        this.ProductWrittenAgencyOther = null;
    }
}
class CatlogProductWrittenModel {
}
class OwnerOfficerModel {
    constructor() {
        this.OwnerOfficerId = "00000000-0000-0000-0000-000000000000";
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.AgencyTittle = null;
        this.DateTimeCreate = null;
        this.DateTimeModify = null;
        this.Title = null;
        this.FirstName = null;
        this.LastName = null;
        this.TaxId = null;
        this.Dob = null;
        this.ControlUpdate = true;
        this.DateTimeUpdate = null;
    }
}
class StatusModel {
    constructor() {
        this.StatuslId = "00000000-0000-0000-0000-000000000000";
        this.Status = null;
    }
}
class ErrorModel {
    constructor() {
        this.Seccion = null;
        this.NameControl = null;
        this.Name = null;
        this.Index = -1;
    }
}
class MigrateAgencyModel {
    constructor() {
        this.AgencyMigrateId = "00000000-0000-0000-0000-000000000000";
        this.AgencyId = "00000000-0000-0000-0000-000000000000";
        this.AgencyRequestNumber = 0;
    }
}


/***/ }),

/***/ "./src/app/_models/users-model-data.ts":
/*!*********************************************!*\
  !*** ./src/app/_models/users-model-data.ts ***!
  \*********************************************/
/*! exports provided: CurrentUserModel, UserModel, ProfileUserModel, ProfileModel, PermissionsModel, CatlogsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserModel", function() { return CurrentUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserModel", function() { return ProfileUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModel", function() { return ProfileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModel", function() { return PermissionsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatlogsModel", function() { return CatlogsModel; });
class CurrentUserModel {
    constructor() {
        this.Status = null;
        this.Message = null;
        this.Data = new UserModel();
    }
}
class UserModel {
    constructor() {
        this.ProfileUser = [];
        this.UserId = "00000000-0000-0000-0000-000000000000";
        this.UserName = null;
        this.FirstName = null;
        this.LastName = null;
        this.Email = null;
        this.Password = null;
        this.Salt = null;
        this.ProfileUser.push(new ProfileUserModel());
        this.ControlUpdate = true;
        this.Status = true;
    }
}
class ProfileUserModel {
    constructor() {
        this.Profile = [];
        this.ProfileUserId = "00000000-0000-0000-0000-000000000000";
        this.ControlUpdate = true;
        this.Profile.push(new ProfileModel());
    }
}
class ProfileModel {
    constructor() {
        this.Permissions = [];
        this.ProfileId = "00000000-0000-0000-0000-000000000000";
        this.ProfileName = null;
        this.Permissions.push(new PermissionsModel());
        this.ControlUpdate = true;
    }
}
class PermissionsModel {
    constructor() {
        this.PermissionsId = "00000000-0000-0000-0000-000000000000";
        this.CatlogsId = null;
        this.CatlogsType = null;
        this.CatlogsName = null;
        this.CatlogsPrefix = null;
        this.ControlUpdate = true;
    }
}
class CatlogsModel {
}


/***/ }),

/***/ "./src/app/_services/AgencyDocument.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/AgencyDocument.service.ts ***!
  \*****************************************************/
/*! exports provided: AgencyDocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDocumentService", function() { return AgencyDocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AgencyDocumentService = class AgencyDocumentService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
        //Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json;charset=utf-8'
            })
        };
        this.httpOptionsPicture = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'multipart/form-data; boundary=something',
                'reportProgress': 'true',
                'observe': 'events'
            })
        };
        this.getUploadOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers.set('Accept', 'application/json');
            headers.delete('Content-Type');
            return headers;
        };
        this.setController('DocumentUpload');
    }
    PostAgencyDocumentDelete(id) {
        return this.http.post(this.endPoint('Delete'), id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    PostAgencyDocumentUpload(file, Id) {
        return this.http.post(this.endPointValue('Upload', Id), file, { headers: this.getUploadOptions() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    PostAgencyDocumentFiles(files) {
        return this.http.post(this.endPoint(''), JSON.stringify(files), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
AgencyDocumentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AgencyDocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AgencyDocumentService);



/***/ }),

/***/ "./src/app/_services/CatlogsGet.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/CatlogsGet.service.ts ***!
  \*************************************************/
/*! exports provided: CatlogsGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatlogsGetService", function() { return CatlogsGetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/users-model-data */ "./src/app/_models/users-model-data.ts");
/* harmony import */ var _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/StatesGet.service */ "./src/app/_services/StatesGet.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_models/agency-model-data */ "./src/app/_models/agency-model-data.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");







//import { EncrDecrService } from '../_services/EncrDecrService.service';



let CatlogsGetService = class CatlogsGetService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http, StatesGetService) {
        super();
        this.http = http;
        this.StatesGetService = StatesGetService;
        this.getCatlogs = () => this.http.get(this.endPoint());
        this.CatlogsTitleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('CatlogsTitle')));
        this.CatlogsTitle = this.CatlogsTitleSubject.asObservable();
        this.CatlogsAgencyStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('CatlogsAgencyStatus')));
        this.CatlogsAgencyStatus = this.CatlogsAgencyStatusSubject.asObservable();
        this.CatlogsAgencyTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('CatlogsAgencyType')));
        this.CatlogsAgencyType = this.CatlogsAgencyTypeSubject.asObservable();
        this.CatlogsProductWrittenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('CatlogsProductWritten')));
        this.CatlogsProductWritten = this.CatlogsProductWrittenSubject.asObservable();
        this.CatlogsPermissionsCRUDSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('CatlogsPermissionsCRUD')));
        this.CatlogsPermissionsCRUD = this.CatlogsPermissionsCRUDSubject.asObservable();
        this.CatlogsPermissionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('CatlogsPermissions')));
        this.CatlogsPermissions = this.CatlogsPermissionsSubject.asObservable();
        this.CatlogsProfileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('Profile')));
        this.CatlogsProfile = this.CatlogsProfileSubject.asObservable();
        this.setController('CatlogsGet');
    }
    get CatlogsTitleValue() {
        return this.CatlogsTitleSubject.value;
    }
    get CatlogsAgencyStatusValue() {
        return this.CatlogsAgencyStatusSubject.value;
    }
    get CatlogsAgencyTypeValue() {
        return this.CatlogsAgencyTypeSubject.value;
    }
    get CatlogsProductWrittenValue() {
        return this.CatlogsProductWrittenSubject.value;
    }
    get CatlogsPermissionsCRUDValue() {
        return this.CatlogsPermissionsCRUDSubject.value;
    }
    get CatlogsPermissionsValue() {
        return this.CatlogsPermissionsSubject.value;
    }
    get CatlogsProfileValue() {
        return this.CatlogsProfileSubject.value;
    }
    AddCatlog(Catlog) {
        return this.http.post(`${this.endPoint('Add')}`, Catlog)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(Catlog => {
            return Catlog;
        }));
    }
    setCatlogs() {
        if (localStorage.getItem('CatlogsAgencyStatus') == null) {
            let CatlogsTitle_ = [];
            let CatlogsAgencyStatus_ = [];
            let CatlogsAgencyType_ = [];
            let CatlogsProductWritten_ = [];
            let CatlogsPermissionsCRUD_ = [];
            let CatlogsPermissions_ = [];
            let CatlogsProfile_ = [];
            let CatlogProductWritten_ = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["CatlogProductWrittenModel"];
            this.BloackUIStart('Loadind Catlogs');
            this.getCatlogs().subscribe(res => {
                for (let element of Object(res)) {
                    if (element.CatlogsType == 'ProductWritten') {
                        CatlogProductWritten_ = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["CatlogProductWrittenModel"]();
                        CatlogProductWritten_.ProductWrittenCatlogsId = element.CatlogsId;
                        CatlogProductWritten_.ProductWrittenCatlogsName = element.CatlogsName;
                        CatlogProductWritten_.ProductWrittenAgencyId = "00000000-0000-0000-0000-000000000000";
                        CatlogProductWritten_.ProductWrittenId = "00000000-0000-0000-0000-000000000000";
                        CatlogProductWritten_.ControlUpdate = true;
                        CatlogProductWritten_.DateTimeUpdate = null;
                        CatlogsProductWritten_.push(CatlogProductWritten_);
                    }
                    if (element.CatlogsType == 'Title') {
                        CatlogsTitle_.push(element);
                    }
                    if (element.CatlogsType == 'AgencyStatus') {
                        CatlogsAgencyStatus_.push(element);
                    }
                    if (element.CatlogsType == 'AgencyType') {
                        CatlogsAgencyType_.push(element);
                    }
                    if (element.CatlogsType == 'PermissionsCRUD') {
                        element.ControlUpdate = true;
                        CatlogsPermissionsCRUD_.push(element);
                    }
                    if (element.CatlogsType == 'Permissions') {
                        element.ControlUpdate = true;
                        CatlogsPermissions_.push(element);
                    }
                    if (element.CatlogsType == 'Profile') {
                        let Profile;
                        let Permissions_;
                        Profile = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["ProfileModel"]();
                        Profile.ProfileId = element.CatlogsId;
                        Profile.ProfileName = element.CatlogsName;
                        element.AbcatlogsProfileCatlogsIdProfileNavigation.forEach(Permissions => {
                            if (Permissions.CatlogsIdPermissions != null) {
                                Permissions_ = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["PermissionsModel"]();
                                Permissions_.CatlogsId = Permissions.CatlogsIdPermissions;
                                Profile.Permissions.push(Permissions_);
                            }
                        });
                        let indexNull = Profile.Permissions.findIndex(a => a.CatlogsId == null);
                        if (indexNull > -1) {
                            Profile.Permissions.splice(indexNull, 1);
                        }
                        CatlogsProfile_.push(Profile);
                    }
                }
                localStorage.setItem('CatlogsProductWritten', JSON.stringify(CatlogsProductWritten_));
                localStorage.setItem('CatlogsTitle', JSON.stringify(CatlogsTitle_));
                localStorage.setItem('CatlogsAgencyType', JSON.stringify(CatlogsAgencyType_));
                localStorage.setItem('CatlogsAgencyStatus', JSON.stringify(CatlogsAgencyStatus_));
                localStorage.setItem('CatlogsPermissionsCRUD', JSON.stringify(CatlogsPermissionsCRUD_));
                localStorage.setItem('CatlogsPermissions', JSON.stringify(CatlogsPermissions_));
                localStorage.setItem('Profile', JSON.stringify(CatlogsProfile_));
                this.CatlogsTitleSubject.next(CatlogsTitle_);
                this.CatlogsAgencyStatusSubject.next(CatlogsAgencyStatus_);
                this.CatlogsAgencyTypeSubject.next(CatlogsAgencyType_);
                this.CatlogsProductWrittenSubject.next(CatlogsProductWritten_);
                this.CatlogsPermissionsCRUDSubject.next(CatlogsPermissionsCRUD_);
                this.CatlogsPermissionsSubject.next(CatlogsPermissions_);
                this.CatlogsProfileSubject.next(CatlogsProfile_);
                this.BloackUIStop();
            });
        }
    }
    setNull() {
        this.CatlogsTitleSubject.next(null);
        this.CatlogsAgencyStatusSubject.next(null);
        this.CatlogsAgencyTypeSubject.next(null);
        this.CatlogsProductWrittenSubject.next(null);
        this.CatlogsPermissionsCRUDSubject.next(null);
        this.CatlogsPermissionsSubject.next(null);
        this.CatlogsProfileSubject.next(null);
    }
    getCatlogsProfile() {
        return this.CatlogsProfileValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsProductWritten'))));
    }
    getCatlogsProductWritten() {
        return this.CatlogsProductWrittenValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsProductWritten'))));
    }
    getCatlogsTitle() {
        return this.CatlogsTitleValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsTitle'))));
    }
    getCatlogsAgencyStatus() {
        return this.CatlogsAgencyStatusValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyStatus'))));
    }
    getCatlogsAgencyType() {
        return this.CatlogsAgencyTypeValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyType'))));
    }
    getCatlogsPermissionsCRUD() {
        return this.CatlogsPermissionsCRUDValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyStatus'))));
    }
    getCatlogsPermissions() {
        return this.CatlogsPermissionsValue;
        //return JSON.parse(this.getEncrypt(localStorage.getItem(this.setEncrypt('CatlogsAgencyType'))));
    }
    setEncrypt(data) {
        //return this.EncrDecr.set(data);
        return data;
    }
    getEncrypt(data) {
        //return this.EncrDecr.get(data);
        return data;
    }
    BloackUIStart(message) {
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
CatlogsGetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_6__["StatesGetService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_9__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CatlogsGetService.prototype, "blockUI", void 0);
CatlogsGetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_6__["StatesGetService"]])
], CatlogsGetService);



/***/ }),

/***/ "./src/app/_services/StatesGet.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/StatesGet.service.ts ***!
  \************************************************/
/*! exports provided: StatesGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesGetService", function() { return StatesGetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");





//import { EncrDecrService } from '../_services/EncrDecrService.service';

let StatesGetService = class StatesGetService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
        this.getState = () => this.http.get(this.endPoint());
        this.StatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('States')));
        this.States = this.StatesSubject.asObservable();
        this.setController('StatesGet');
    }
    get StatesValue() {
        return this.StatesSubject.value;
    }
    setStates() {
        if (!localStorage.getItem('States')) {
            this.BloackUIStart('Loading States');
            this.getState().subscribe(res => {
                localStorage.setItem('States', JSON.stringify(res));
                this.StatesSubject.next(res);
                this.BloackUIStop();
            });
        }
    }
    setNull() {
        this.StatesSubject.next(null);
    }
    getStates() {
        return this.StatesValue;
    }
    BloackUIStart(message) {
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
StatesGetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatesGetService.prototype, "blockUI", void 0);
StatesGetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], StatesGetService);



/***/ }),

/***/ "./src/app/_services/agency.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/agency.service.ts ***!
  \*********************************************/
/*! exports provided: AgencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyService", function() { return AgencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let AgencyService = class AgencyService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(http, route, location, router) {
        super();
        this.http = http;
        this.route = route;
        this.location = location;
        this.router = router;
        this.Notify = [
            {
                Description: "",
                Type: "error", Status: "Error", Title: "Error Internal", Message: "Verify An Administrator", Duration: 7000
            },
            {
                Description: "El broker, realiza un registro Tipo Draft, Ya cuenta con una liga para seguir editando el registro. Y se convierte en Tipo New, ya sea que los datos estan complentos o el administrador cambio de tipo el registro. El broker trata de editar la entrada. Y no puede ya que no es draft.",
                Type: "info", Status: "ChangeStatus", Title: "BAP Request status changed", Message: "Your BAP request status has been changed, please contact your customer service representative.", Duration: 7000
            },
            {
                Description: "El Broker presiono guardar, los datos minimos para registro draft Agency Name y Email.",
                Type: "error", Status: "Draft", Title: "BAP Request data validation", Message: "Mandatory fields: Agency Name And Email.", Duration: 7000
            },
            {
                Description: "El broker presiona guardar, el registro cuenta con los datos minimos para draft, pero no puede cambiar a status New, por datos faltantes. Lo mismo aplica para administrador, si los datos no estan completos, no permite registrar la entrada como New o cual quier otro status.",
                Type: "error", Status: "NotDraft", Title: "BAP Request data validation", Message: "Please fill in red highlighted fields.", Duration: 7000
            },
            {
                Description: "El Broker realiza, una nueva entrada, como draft, cuenta con los datos minimos, se envia un correo electronico a el broker con la liga de edicion del registro.",
                Type: "success", Status: "SendDraft", Title: "BAP Request saved as Draft", Message: "Your BAP request has been saved as DRAFT, and an email was sent to you to come back to edit your draft record.", Duration: 7000
            },
            {
                Description: "El Broker ha completado los datos completos para New, y se envia un correo electronico, Al administrador y broker indicando que existe una entrada nueva.",
                Type: "success", Status: "SendNew", Title: "New BAP request", Message: "Your BAP request has been submitted successfully. Thanks for doing business with us.", Duration: 7000
            },
            {
                Description: "El administardor cambia de status New a Accepted, si no se han generado los documentos, se generan, y se envia un correo electronico a los administradores y al broker con los documentos.",
                Type: "success", Status: "Accepted", Title: "BAP status changed", Message: "Your BAP status change has been submitted successfully.", Duration: 7000
            },
            {
                Description: "el administrador cambia a Canceled la entrada, se envia un correo electronico a los administradores y al broker, con notas, se adhieren los comentarios proporcionados en cada una de las secciones, data this is section is correct?.",
                Type: "info", Status: "Canceled", Title: "BAP status changed", Message: "Your BAP status change has been submitted successfully.", Duration: 7000
            },
            {
                Description: "el administrador cambia a Canceled la entrada, se envia un correo electronico a los administradores y al broker, con notas, se adhieren los comentarios proporcionados en cada una de las secciones, data this is section is correct?.",
                Type: "info", Status: "On Hold", Title: "BAP status changed", Message: "Your BAP status change has been submitted successfully.", Duration: 7000
            },
            {
                Description: "el administrador cambia a Canceled la entrada, se envia un correo electronico a los administradores y al broker, con notas, se adhieren los comentarios proporcionados en cada una de las secciones, data this is section is correct?.",
                Type: "info", Status: "Denied", Title: "BAP status changed", Message: "Your BAP status change has been submitted successfully.", Duration: 7000
            },
            {
                Description: "Re Send Status \"Email\", se realiza el proceso del status seleccionado, y se envia el correo.",
                Type: "info", Status: "ReSendStatus", Title: "BAP status changed", Message: "Your BAP status change has been submitted successfully.", Duration: 7000
            },
            {
                Description: "Save Data",
                Type: "success", Status: "Save Data", Title: "Save Data", Message: "Your BAP Save Data has been submitted successfully.", Duration: 7000
            },
            {
                Description: "Missing information is highlighted in red",
                Type: "info", Status: "MissingInformation", Title: "Missing information is highlighted in red.", Message: "Please complete in order to successfully submit your application.", Duration: 7000
            }
        ];
        //public deleteAgency = (id: any) => this.http.get(this.endPointValue('Delete',id));
        this.getAgencyId = (id) => this.http.get(this.endPointValue(id));
        this.getAgency = () => this.http.get(this.endPoint());
        this.getAgencyStatusEmail = () => this.http.get(this.endPoint('GetStatusEmail'));
        this.getProgressDocument = (RequestNumber) => this.http.get(this.endPointValue('ProgressDocument', RequestNumber.toString()));
        this.GuidIdAgencySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](localStorage.getItem('GuidIdAgency'));
        this.GuidIdAgency = this.GuidIdAgencySubject.asObservable();
        this.setController('Agency');
    }
    get GuidIdAgencyValue() {
        return this.GuidIdAgencySubject.value;
    }
    Save(Agency) {
        return this.http.post(`${this.endPoint()}`, Agency)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(agency => {
            return agency;
        }));
    }
    AddEmailStatus(EmailStatus) {
        return this.http.post(`${this.endPoint('EmailStatus')}`, EmailStatus)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(EmailStatus => {
            return EmailStatus;
        }));
    }
    GetAgencyToken(Model) {
        return this.http.post(`${this.endPoint('GetToken')}`, Model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(agency => {
            return agency;
        }));
    }
    deleteAgency(Model) {
        return this.http.post(`${this.endPoint('Delete')}`, Model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(agency => {
            return agency;
        }));
    }
    setGuid(id) { localStorage.setItem('GuidIdAgency', id); }
    getGuid() { return localStorage.getItem('GuidIdAgency'); }
    NotifyMessage(Status) {
        return this.Notify.find(a => a.Status == Status);
    }
    onMessage(Status, Redirect = false, UrlRedirect = '/', queryParameter = {}, TreeMessage = []) {
        let Element = this.NotifyMessage(Status);
        let timerInterval;
        console.log(TreeMessage);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            icon: Element.Type,
            title: Element.Title,
            html: Element.Message,
            timer: Element.Duration,
            timerProgressBar: true,
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.showLoading();
                timerInterval = setInterval(() => {
                    const content = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.getContent();
                    if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                            b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.getTimerLeft().toString();
                        }
                    }
                }, 100);
            },
            onClose: () => {
                if (TreeMessage.length <= 0) {
                    if (Redirect) {
                        if (UrlRedirect == '/') {
                            this.router.navigate([UrlRedirect]);
                        }
                        else {
                            this.router.navigate([queryParameter.Router], {
                                queryParams: {
                                    AgencyId: queryParameter.AgencyId,
                                    Token: queryParameter.Token
                                }
                            });
                        }
                    }
                    else {
                        for (let element of TreeMessage) {
                            this.onMessage(element.Status, element.Redirect, element.UrlRedirect, element.queryParameter);
                        }
                    }
                }
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.DismissReason.timer) {
                if (TreeMessage.length <= 0) {
                    if (UrlRedirect == '/') {
                        this.router.navigate([UrlRedirect]);
                    }
                    else {
                        this.router.navigate([queryParameter.Router], {
                            queryParams: {
                                AgencyId: queryParameter.AgencyId,
                                Token: queryParameter.Token
                            }
                        });
                    }
                }
                else {
                    for (let element of TreeMessage) {
                        this.onMessage(element.Status, element.Redirect, element.UrlRedirect, element.queryParameter);
                    }
                }
            }
        });
    }
};
AgencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AgencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AgencyService);



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");







let AuthenticationService = class AuthenticationService extends _base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] {
    constructor(http, route, router) {
        super();
        this.http = http;
        this.route = route;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.setController('Users');
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`${this.endPointValue('Authentication')}`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(user => {
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
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/base.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class BaseService {
    constructor() {
        this.base_url = '';
        this.base_controller_url = '';
        this.setBaseUrl();
    }
    setBaseUrl() {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            //this.base_url = 'http://localhost:5000/api';
            this.base_url = 'http://avian-bap-api.azurewebsites.net/api';
        }
        else {
            this.base_url = '';
        }
    }
    setController(controller) {
        this.base_controller_url = `${this.base_url}/${controller}`;
    }
    endPoint(action = '') {
        return `${this.base_controller_url}/${action}`;
    }
    endPointValue(action = '', value = '') {
        return `${this.base_controller_url}/${action}/${value}`;
    }
}


/***/ }),

/***/ "./src/app/_services/download.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/download.service.ts ***!
  \***********************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");





let DownloadService = class DownloadService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'multipart/form-data; boundary=something',
                'reportProgress': 'true',
                'observe': 'events'
            })
        };
        this.setController('DownloadFile');
    }
    downloadFile(type, id, root, file) {
        return this.httpClient.request(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.endPoint('Download'), {
            Type: type,
            Id: id,
            Root: root,
            File: file
        }, {
            reportProgress: true,
            responseType: 'blob'
        }));
    }
    getFileList(id) {
        return this.httpClient.post(`${this.endPoint('FileList')}`, id)
            .pipe(res => {
            return res;
        });
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
DownloadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DownloadService);



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/_services/base.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let UserService = class UserService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(http) {
        super();
        this.http = http;
        this.getUsers = () => this.http.get(this.endPoint());
        this.getProfile = () => this.http.get(this.endPoint('Profile'));
        this.setController('Users');
        this.ProfileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('Profile')));
        this.Profile = this.ProfileSubject.asObservable();
    }
    get ProfileValue() {
        return this.ProfileSubject.value;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users`);
    }
    AddUser(User) {
        return this.http.post(`${this.endPoint('Add')}`, User)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(User => {
            return User;
        }));
    }
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
    setNull() {
        this.ProfileSubject.next(null);
    }
    getStates() {
        return this.ProfileValue;
    }
    BloackUIStart(message) {
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserService.prototype, "blockUI", void 0);
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/agency-form/agency-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/agency-form/agency-form.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  font-size: 12px;\n  font-stretch: condensed;\n  padding: 0, 0, 0, 5px;\n}\n\nmat-hint {\n  font-size: 7px;\n}\n\nmat-slide-toggle.mat-slide-toggle {\n  font-size: 10px;\n}\n\nhr {\n  border: 1px solid #a7a3a3;\n}\n\n.scroller-container {\n  max-height: 85px;\n  overflow: auto;\n  border: 0px solid #ccc;\n}\n\n.scroller-container::-webkit-scrollbar {\n  width: 10px;\n}\n\n.scroller-container::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.scroller-container::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n\n.scroller-container-carrier {\n  max-height: 85px;\n  overflow: auto;\n  border: 0px solid #ccc;\n}\n\n.scroller-container-carrier::-webkit-scrollbar {\n  width: 10px;\n}\n\n.scroller-container-carrier::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.scroller-container-carrier::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n\n.scroller-container-authorized {\n  max-height: 175px;\n  overflow: auto;\n  border: 0px solid #ccc;\n}\n\n.scroller-container-authorized::-webkit-scrollbar {\n  width: 10px;\n}\n\n.scroller-container-authorized::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.scroller-container-authorized::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n\nmat-error {\n  font-size: 11px;\n  padding: 0, 0, 0, 0px;\n  height: 13px;\n}\n\nmat-label {\n  font-size: 12px;\n  padding: 0, 0, 0, 0px;\n  height: 13px;\n}\n\n.contactAutRemoved {\n  top: 0px;\n  right: 0px;\n}\n\nmat-list-item.mat-list-item {\n  font-size: 11px;\n}\n\nmat-radio-button.mat-radio-button {\n  font-size: 11px;\n}\n\n.agency-section {\n  font-size: 11px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.tarjeta {\n  min-width: 400px;\n  max-width: 600px;\n}\n\n.circular {\n  border-radius: 50%;\n}\n\n.contenedor {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mat-color {\n  background-color: #673ab7;\n}\n\n.text-area-full-width {\n  width: 100%;\n  height: 250px;\n}\n\np, .styleFont {\n  font-size: 11px;\n}\n\n.agency-margin {\n  margin: 0 10px;\n}\n\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.agency-button-row button,\n.agency-button-row a {\n  margin-right: 8px;\n}\n\nbutton[mat-icon-button].icon-button-large {\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n}\n\nbutton[mat-icon-button].icon-button-large .mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n}\n\nbutton[mat-icon-button].icon-button-large .mat-button-ripple {\n  font-size: inherit;\n  width: inherit;\n  height: inherit;\n  line-height: inherit;\n}\n\nbutton[mat-icon-button].icon-button-small {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n\nbutton[mat-icon-button].icon-button-small .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n\nbutton[mat-icon-button].icon-button-small .mat-button-ripple {\n  font-size: inherit;\n  width: inherit;\n  height: inherit;\n  line-height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmN5LWZvcm0vQzpcXEF2aWFuXFxBdmlhbi5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcYWdlbmN5LWZvcm1cXGFnZW5jeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZ2VuY3ktZm9ybS9hZ2VuY3ktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLG9EQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esb0RBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxvREFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG9EQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBO0VBQ0Usb0RBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxvREFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTs7RUFFRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQkFBQTtBQ0VGOztBRENBOztFQUVFLGlCQUFBO0FDRUY7O0FETUU7RUFDRSxXQUprQjtFQUtsQixZQUxrQjtFQU1sQixpQkFOa0I7QUNHdEI7O0FES0k7RUFDRSxlQVJjO0VBU2QsV0FUYztFQVVkLFlBVmM7RUFXZCxpQkFYYztBQ1FwQjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0pOOztBRFdFO0VBQ0UsV0FKa0I7RUFLbEIsWUFMa0I7RUFNbEIsaUJBTmtCO0FDSHRCOztBRFdJO0VBQ0UsZUFSYztFQVNkLFdBVGM7RUFVZCxZQVZjO0VBV2QsaUJBWGM7QUNFcEI7O0FEWUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL2FnZW5jeS1mb3JtL2FnZW5jeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtc3RyZXRjaDogY29uZGVuc2VkO1xyXG4gIHBhZGRpbmc6IDAsMCwwLDVweDtcclxufVxyXG5cclxubWF0LWhpbnR7XHJcbiAgZm9udC1zaXplOiA3cHg7XHJcbn1cclxuXHJcbm1hdC1zbGlkZS10b2dnbGUubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2NywgMTYzLCAxNjMpO1xyXG59XHJcblxyXG4uc2Nyb2xsZXItY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiA4NXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XHJcbn1cclxuLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTsgXHJcbn1cclxuXHJcbi5zY3JvbGxlci1jb250YWluZXItY2FycmllciB7XHJcbiAgbWF4LWhlaWdodDogODVweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5zY3JvbGxlci1jb250YWluZXItY2Fycmllcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsZXItY29udGFpbmVyLWNhcnJpZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsZXItY29udGFpbmVyLWNhcnJpZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG59XHJcblxyXG4uc2Nyb2xsZXItY29udGFpbmVyLWF1dGhvcml6ZWQge1xyXG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XHJcbn1cclxuLnNjcm9sbGVyLWNvbnRhaW5lci1hdXRob3JpemVkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxlci1jb250YWluZXItYXV0aG9yaXplZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxlci1jb250YWluZXItYXV0aG9yaXplZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTsgXHJcbn1cclxuXHJcbm1hdC1lcnJvcntcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCwgMCwgMCwgMHB4O1xyXG4gIGhlaWdodDogMTNweDtcclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDAsIDAsIDAsIDBweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi5jb250YWN0QXV0UmVtb3ZlZHtcclxuICB0b3A6IC0wcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbS5tYXQtbGlzdC1pdGVtIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYWdlbmN5LXNlY3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLmNpcmN1bGFyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAvL2hlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG59XHJcblxyXG4udGV4dC1hcmVhLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbnAsIC5zdHlsZUZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmFnZW5jeS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uYWdlbmN5LWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uYWdlbmN5LWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcblxyXG5idXR0b25bbWF0LWljb24tYnV0dG9uXSB7XHJcbiAgJGxhcmdlLXNpemUtYnV0dG9uOiA4MHB4O1xyXG4gICRsYXJnZS1zaXplLWljb246IDQ4cHg7XHJcblxyXG4gICYuaWNvbi1idXR0b24tbGFyZ2Uge1xyXG4gICAgd2lkdGg6ICRsYXJnZS1zaXplLWJ1dHRvbjtcclxuICAgIGhlaWdodDogJGxhcmdlLXNpemUtYnV0dG9uO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRsYXJnZS1zaXplLWJ1dHRvbjtcclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6ICRsYXJnZS1zaXplLWljb247XHJcbiAgICAgIHdpZHRoOiAkbGFyZ2Utc2l6ZS1pY29uO1xyXG4gICAgICBoZWlnaHQ6ICRsYXJnZS1zaXplLWljb247XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGFyZ2Utc2l6ZS1pY29uO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtYnV0dG9uLXJpcHBsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkc21hbGwtc2l6ZS1idXR0b246IDI0cHg7XHJcbiAgJHNtYWxsLXNpemUtaWNvbjogMThweDtcclxuXHJcbiAgJi5pY29uLWJ1dHRvbi1zbWFsbCB7XHJcbiAgICB3aWR0aDogJHNtYWxsLXNpemUtYnV0dG9uO1xyXG4gICAgaGVpZ2h0OiAkc21hbGwtc2l6ZS1idXR0b247XHJcbiAgICBsaW5lLWhlaWdodDogJHNtYWxsLXNpemUtYnV0dG9uO1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHNtYWxsLXNpemUtaWNvbjtcclxuICAgICAgd2lkdGg6ICRzbWFsbC1zaXplLWljb247XHJcbiAgICAgIGhlaWdodDogJHNtYWxsLXNpemUtaWNvbjtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRzbWFsbC1zaXplLWljb247XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1idXR0b24tcmlwcGxlIHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3RyZXRjaDogY29uZGVuc2VkO1xuICBwYWRkaW5nOiAwLCAwLCAwLCA1cHg7XG59XG5cbm1hdC1oaW50IHtcbiAgZm9udC1zaXplOiA3cHg7XG59XG5cbm1hdC1zbGlkZS10b2dnbGUubWF0LXNsaWRlLXRvZ2dsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTdhM2EzO1xufVxuXG4uc2Nyb2xsZXItY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogODVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XG59XG5cbi5zY3JvbGxlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5zY3JvbGxlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2Nyb2xsZXItY29udGFpbmVyLWNhcnJpZXIge1xuICBtYXgtaGVpZ2h0OiA4NXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAwcHggc29saWQgI2NjYztcbn1cblxuLnNjcm9sbGVyLWNvbnRhaW5lci1jYXJyaWVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uc2Nyb2xsZXItY29udGFpbmVyLWNhcnJpZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNjcm9sbGVyLWNvbnRhaW5lci1jYXJyaWVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zY3JvbGxlci1jb250YWluZXItYXV0aG9yaXplZCB7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAwcHggc29saWQgI2NjYztcbn1cblxuLnNjcm9sbGVyLWNvbnRhaW5lci1hdXRob3JpemVkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uc2Nyb2xsZXItY29udGFpbmVyLWF1dGhvcml6ZWQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNjcm9sbGVyLWNvbnRhaW5lci1hdXRob3JpemVkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbm1hdC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCwgMCwgMCwgMHB4O1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMCwgMCwgMCwgMHB4O1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbi5jb250YWN0QXV0UmVtb3ZlZCB7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG5tYXQtbGlzdC1pdGVtLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmFnZW5jeS1zZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRhcmpldGEge1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uY2lyY3VsYXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXQtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xufVxuXG4udGV4dC1hcmVhLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxucCwgLnN0eWxlRm9udCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmFnZW5jeS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uYWdlbmN5LWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmFnZW5jeS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0uaWNvbi1idXR0b24tbGFyZ2Uge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbn1cbmJ1dHRvblttYXQtaWNvbi1idXR0b25dLmljb24tYnV0dG9uLWxhcmdlIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG5idXR0b25bbWF0LWljb24tYnV0dG9uXS5pY29uLWJ1dHRvbi1sYXJnZSAubWF0LWJ1dHRvbi1yaXBwbGUge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0uaWNvbi1idXR0b24tc21hbGwge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbmJ1dHRvblttYXQtaWNvbi1idXR0b25dLmljb24tYnV0dG9uLXNtYWxsIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5idXR0b25bbWF0LWljb24tYnV0dG9uXS5pY29uLWJ1dHRvbi1zbWFsbCAubWF0LWJ1dHRvbi1yaXBwbGUge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/agency-form/agency-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agency-form/agency-form.component.ts ***!
  \******************************************************/
/*! exports provided: AgencyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyFormComponent", function() { return AgencyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_models/agency-model-data */ "./src/app/_models/agency-model-data.ts");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");
/* harmony import */ var _services_AgencyDocument_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/AgencyDocument.service */ "./src/app/_services/AgencyDocument.service.ts");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_services/download.service */ "./src/app/_services/download.service.ts");
/* harmony import */ var _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_services/StatesGet.service */ "./src/app/_services/StatesGet.service.ts");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



//import 'material-icons/iconfont/material-icons.scss';


















let AgencyFormComponent = class AgencyFormComponent {
    constructor(formBuilder, formBuilderContactAut, AgencyService, route, router, iconRegistry, CatlogsGetService, StatesGetService, AgencyDocumentService, sanitizer, authenticationService, _snackBar, DownloadService, dialog, Mask) {
        this.formBuilder = formBuilder;
        this.formBuilderContactAut = formBuilderContactAut;
        this.AgencyService = AgencyService;
        this.route = route;
        this.router = router;
        this.CatlogsGetService = CatlogsGetService;
        this.StatesGetService = StatesGetService;
        this.AgencyDocumentService = AgencyDocumentService;
        this.authenticationService = authenticationService;
        this._snackBar = _snackBar;
        this.DownloadService = DownloadService;
        this.dialog = dialog;
        this.Mask = Mask;
        this.checkedReSend = false;
        this.events = [];
        this.loading = false;
        this.ContactAutPhone = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["ContactAutPhoneModel"];
        this.ContactAutEmail = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["ContactAutEmailModel"];
        this.AgencyPhone = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyPhoneModel"];
        this.AgencyEmail = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyEmailModel"];
        this.ContactAut = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["ContactAutModel"]();
        this.Carrier = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["CarrierModel"];
        this.OwnerOfficer = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["OwnerOfficerModel"];
        this.Status = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["StatusModel"];
        this.Agency = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyModel"]();
        this.AgencyAdd = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyModel"]();
        this.CatlogProductWritten = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["CatlogProductWrittenModel"];
        this.DocumentsFiles = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["FilesSaveModel"];
        this.isLinear = true;
        this.CatlogsProductWritten = [];
        this.CatlogsTitle = [];
        this.CatlogsAgencyStatus = [];
        this.CatlogsAgencyType = [];
        this.States = [];
        this.IndexOther = 0;
        this.SatusProductWrittenOther = false;
        this.DirectoryBase = "";
        this.contactAutCount = 0;
        this.AutCountMinMax = 0;
        this.IndexContAut = 0;
        this.flagReturnSave = false;
        this.ArrayAppointedSinceValid = [];
        this.emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.dateRegEx = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
        this.phoneRegEx = /^\(\d{3}\)\s\d{3}\s-\s\d{4}/;
        //public dateRegEx: RegExp = /^(?:(?:(?:0[13578]|1[02])(\/)31)\1|(?:(?:0[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:02(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        this.PCLicense_files = [];
        this.CurrentEO_files = [];
        this.W9_files = [];
        this.selectedAgencyStatus = [];
        this.flagValid = 0;
        this.StatusCurrent = "";
        this.minDateAppointedSince = new Date(1900, 0, 1);
        this.maxDateAppointedSince = new Date(2050, 0, 1);
        this.minDateOwnerOfficerDob = new Date(1900, 0, 1);
        this.maxDateOwnerOfficerDob = new Date(2050, 0, 1);
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.GuidAgency = this.AgencyService.getGuid();
        /*this.CatlogsProductWritten = this.CatlogsGetService.getCatlogsProductWritten();
        this.CatlogsTitle = this.CatlogsGetService.getCatlogsTitle();
        this.CatlogsAgencyStatus = this.CatlogsGetService.getCatlogsAgencyStatus();
        this.CatlogsAgencyType = this.CatlogsGetService.getCatlogsAgencyType();
        this.States = this.StatesGetService.getStates();*/
        this.CatlogsProductWritten = this.CatlogsGetService.CatlogsProductWrittenValue;
        this.CatlogsTitle = this.CatlogsGetService.CatlogsTitleValue;
        this.CatlogsAgencyStatus = this.CatlogsGetService.CatlogsAgencyStatusValue;
        this.CatlogsAgencyType = this.CatlogsGetService.CatlogsAgencyTypeValue;
        this.States = this.StatesGetService.StatesValue;
    }
    ProductWrittenOtherChanged(value) {
        this.CheckStatusProductWrittenOther(value);
    }
    CheckStatusProductWrittenOther(CatlogsModel, Set = false) {
        if (Set) {
            let Id = this.CatlogsProductWritten.find(a => a.ProductWrittenCatlogsName == 'Other').ProductWrittenCatlogsId;
            this.IndexOther = this.Agency.AbagencyProductWritten.findIndex(a => a.ProductWrittenCatlogsId == Id);
            this.SatusProductWrittenOther = (this.IndexOther >= 0) ? true : false;
        }
        else {
            this.IndexOther = CatlogsModel.findIndex(a => a.ProductWrittenCatlogsName == 'Other');
            this.SatusProductWrittenOther = (this.IndexOther >= 0) ? true : false;
        }
    }
    onItemSelect(item) {
        console.log(this.Agency.AbagencyProductWritten);
    }
    onSelectAll(items) {
        console.log(items);
    }
    ngOnInit() {
        //this.intValidForm();
        let typeForm = 0;
        let paramsOut = null;
        let IsNullOrGuidEmpty = this.IsNullOrGuidEmpty(this.GuidAgency);
        if (IsNullOrGuidEmpty) {
            this.route.queryParams.subscribe(params => {
                if (params.hasOwnProperty("AgencyId") && params.hasOwnProperty("Token")) {
                    paramsOut = params;
                }
                console.log(paramsOut);
            });
            if (paramsOut != null) {
                if (this.currentUser) {
                    this.CatlogsGetService.setNull();
                    this.StatesGetService.setNull();
                    this.authenticationService.logoutToken();
                }
                typeForm = 1;
            }
            else {
                typeForm = 2;
            }
        }
        else {
            typeForm = 3;
        }
        switch (typeForm) {
            case 1: {
                this.SetLocalCatlogs(paramsOut);
                break;
            }
            case 2: {
                this.setAgencyNew();
                break;
            }
            case 3: {
                this.setAgencyCurrentUser(this.GuidAgency);
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
        this.intValidForm();
    }
    get f() { return this.AgencyForm.controls; }
    openSnackBar(message, action, duration) {
        this._snackBar.open(message, action, {
            duration: duration,
        });
    }
    openDialog(message, action, duration = 5000) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"], {
            width: '450px',
            data: {
                Message: message,
                Action: action,
                Duration: duration
            }
        });
        setTimeout(() => {
            dialogRef.close();
        }, duration);
    }
    intAddFormGroup(Model) {
        let index = 0;
        let indexEmail = 0;
        let indexPhone = 0;
        for (let element of Model.Abemail) {
            if (index > 0) {
                this.addAgencyEmailControl();
            }
            index++;
        }
        index = 0;
        for (let element of Model.Abphone) {
            if (index > 0) {
                this.addAgencyPhoneControl();
            }
            index++;
        }
        index = 0;
        for (let element of Model.Abcarrier) {
            if (index > 0) {
                this.addAgencyCarrierControl();
            }
            index++;
        }
        index = 0;
        for (let element of Model.AbownerOfficer) {
            if (index > 0) {
                this.addAgencyOwnerControl();
            }
            index++;
        }
        index = 0;
        for (let element of Model.AbcontAut) {
            if (index > 0) {
                this.addAgencyAutContactControl();
                indexEmail = 0;
                for (let elementAbemail of element.Abemail) {
                    if (indexEmail > 0) {
                        this.addAgencyAutContactEmailControl(index);
                    }
                    indexEmail++;
                }
                indexPhone = 0;
                for (let elementAbemail of element.Abemail) {
                    if (indexPhone > 0) {
                        this.addAgencyAutContactPhoneControl(index);
                    }
                    indexPhone++;
                }
            }
            index++;
        }
    }
    intValidForm() {
        this.AgencyForm = this.formBuilder.group({
            AgencyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AgencyType: [''],
            AgencyStatus: [''],
            checkedReSend: [''],
            AgencyTIN: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AgencyCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AgencyState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AgencyZip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AgencyStreet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AgencyAnnualB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            AgencyAnnualP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            AgencyNumberYear: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)
                ]
            ],
            AgencyNumberEmployee: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)
                ]
            ],
            AgencyAverageSize: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(7)
                ]
            ],
            AbagencyProductWritten: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ProductWrittenOther: [''],
            AgencyGeneralDataIsCorrect: [''],
            AgencyOwnerOfficerisCorrect: [''],
            AgencyAccountBankName: [''],
            AgencyAccountRoutingNumber: [''],
            AgencyAccountAccountNumber: [''],
            AgencyAccountHoldersName: [''],
            AgencyTrustAccountIsCorrect: [''],
            contactAutCount: [''],
            AgencyAuthorizedContcatIsCorrectData: [''],
            AgencyAuthorizedContcatIsCorrect: [''],
            AgencyGeneralDataIsCorrectData: [''],
            AgencyOwnerOfficerisCorrectData: [''],
            AgencyTrustAccountIsCorrectData: [''],
            AgencyRemarks: [''],
            AgencyCarrierControl: this.formBuilder.array([
                this.createAgencyCarrierFormGroup()
            ], []),
            AgencyEmailControl: this.formBuilder.array([
                this.createAgencyEmailFormGroup()
            ], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            AgencyPhoneControl: this.formBuilder.array([
                this.createAgencyPhoneFormGroup()
            ], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            AgencyOwnerControl: this.formBuilder.array([
                this.createAgencyOwnerFormGroup()
            ], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            AgencyAutContactControl: this.formBuilder.array([
                this.createAgencyAutContactFormGroup()
            ], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    //Agency - AutContact ArrayControl Valid////////////////
    createAgencyAutContactFormGroup() {
        return this.formBuilder.group({
            ContactAutTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ContactAutFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ContactAutMiddleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ContactAutLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AgencyAutContactEmailControl: this.formBuilder.array([
                this.createAgencyAutContactEmailFormGroup()
            ], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            AgencyAutContactPhoneControl: this.formBuilder.array([
                this.createAgencyAutContactPhoneFormGroup()
            ], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    get AgencyAutContactControl() {
        return this.AgencyForm.get('AgencyAutContactControl');
    }
    addAgencyAutContactControl() {
        let fg = this.createAgencyAutContactFormGroup();
        this.AgencyAutContactControl.push(fg);
    }
    removeAgencyAutContactControl(idx) {
        this.AgencyAutContactControl.removeAt(idx);
    }
    //Agency - AutContactEmail ArrayControl Valid////////////////
    createAgencyAutContactEmailFormGroup() {
        return this.formBuilder.group({
            ContactAutEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailregex /*"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"*/)]],
        });
    }
    get AgencyAutContactEmailControl() {
        return this.AgencyAutContactControl.controls[this.IndexContAut].get('AgencyAutContactEmailControl');
    }
    addAgencyAutContactEmailControl(idp) {
        this.IndexContAut = idp;
        let fg = this.createAgencyAutContactEmailFormGroup();
        this.AgencyAutContactEmailControl.push(fg);
    }
    removeAgencyAutContactEmailControl(idxp, idx) {
        this.IndexContAut = idxp;
        this.AgencyAutContactEmailControl.controls.splice(idx, 1);
    }
    //Agency - AutContactEmail ArrayControl Valid////////////////
    //Agency - AutContactPhone ArrayControl Valid////////////////
    createAgencyAutContactPhoneFormGroup() {
        return this.formBuilder.group({
            ContactAutPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.phoneRegEx)]],
        });
    }
    get AgencyAutContactPhoneControl() {
        return this.AgencyAutContactControl.controls[this.IndexContAut].get('AgencyAutContactPhoneControl');
    }
    addAgencyAutContactPhoneControl(idp) {
        this.IndexContAut = idp;
        let fg = this.createAgencyAutContactPhoneFormGroup();
        this.AgencyAutContactPhoneControl.push(fg);
    }
    removeAgencyAutContactPhoneControl(idxp, idx) {
        this.IndexContAut = idxp;
        this.AgencyAutContactPhoneControl.controls.splice(idx, 1);
    }
    //Agency - AutContactPhone ArrayControl Valid////////////////
    //Agency - AutContact ArrayControl Valid////////////////
    //Agency - Owner ArrayControl Valid////////////////
    createAgencyOwnerFormGroup() {
        return this.formBuilder.group({
            OwnerOfficerAgencyTittle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            OwnerOfficerFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            OwnerOfficerLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            OwnerOfficerTaxId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            //OwnerOfficerDob: ['', [Validators.required]],
            OwnerOfficerDob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.dateRegEx)]],
            OwnerOfficerDob_hidden: ['', []]
        });
    }
    get AgencyOwnerControl() {
        return this.AgencyForm.get('AgencyOwnerControl');
    }
    addAgencyOwnerControl() {
        let fg = this.createAgencyOwnerFormGroup();
        this.AgencyOwnerControl.push(fg);
    }
    removeAgencyOwnerControl(idx) {
        this.AgencyOwnerControl.removeAt(idx);
    }
    //Agency - Owner ArrayControl Valid////////////////
    //Agency - Carrier ArrayControl Valid////////////////
    createAgencyCarrierFormGroup() {
        return this.formBuilder.group({
            CarrierName: [''],
            AgentName: [''],
            AppointedSince: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.dateRegEx)],
            AppointedSince_hidden: ['']
            //AppointedSince: ['', [Validators.pattern("^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$"),Validators.date]]
        });
    }
    get AgencyCarrierControl() {
        return this.AgencyForm.get('AgencyCarrierControl');
    }
    addAgencyCarrierControl() {
        let fg = this.createAgencyCarrierFormGroup();
        this.AgencyCarrierControl.push(fg);
    }
    removeAgencyCarrierControl(idx) {
        this.AgencyCarrierControl.removeAt(idx);
    }
    //Agency - Carrier ArrayControl Valid////////////////
    //AgencyEmail ArrayControl Valid////////////////
    createAgencyEmailFormGroup() {
        return this.formBuilder.group({
            AgencyEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailregex /*"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"*/)]]
        });
    }
    get AgencyEmailControl() {
        return this.AgencyForm.get('AgencyEmailControl');
    }
    addAgencyEmailControl() {
        let fg = this.createAgencyEmailFormGroup();
        this.AgencyEmailControl.push(fg);
    }
    removeAgencyEmailControl(idx) {
        this.AgencyEmailControl.removeAt(idx);
    }
    //AgencyEmail ArrayControl Valid////////////////
    //AgencyPhone ArrayControl Valid////////////////
    createAgencyPhoneFormGroup() {
        return this.formBuilder.group({
            AgencyPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.phoneRegEx)]]
        });
    }
    get AgencyPhoneControl() {
        return this.AgencyForm.get('AgencyPhoneControl');
    }
    addAgencyPhoneControl() {
        let fg = this.createAgencyPhoneFormGroup();
        this.AgencyPhoneControl.push(fg);
    }
    removeAgencyPhoneControl(idx) {
        this.AgencyPhoneControl.removeAt(idx);
    }
    //AgencyPhone ArrayControl Valid//////////////// 
    SetLocalCatlogs(Model) {
        let CatlogsProductWritten_ = [];
        let CatlogsTitle_ = [];
        let CatlogsAgencyStatus_ = [];
        let CatlogsAgencyType_ = [];
        this.BloackUIStart("Loading Catlogs");
        this.StatesGetService.getState().subscribe(res => {
            this.BloackUIStop();
            this.States = JSON.parse(JSON.stringify(res));
        });
        this.CatlogsGetService.getCatlogs().subscribe(res => {
            for (let element of Object(res)) {
                if (element.CatlogsType == 'ProductWritten') {
                    this.CatlogProductWritten = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["CatlogProductWrittenModel"]();
                    this.CatlogProductWritten.ProductWrittenCatlogsId = element.CatlogsId;
                    this.CatlogProductWritten.ProductWrittenCatlogsName = element.CatlogsName;
                    this.CatlogProductWritten.ProductWrittenAgencyId = "00000000-0000-0000-0000-000000000000";
                    this.CatlogProductWritten.ProductWrittenId = "00000000-0000-0000-0000-000000000000";
                    this.CatlogProductWritten.ControlUpdate = true;
                    this.CatlogProductWritten.DateTimeUpdate = null;
                    CatlogsProductWritten_.push(this.CatlogProductWritten);
                }
                if (element.CatlogsType == 'Title') {
                    CatlogsTitle_.push(element);
                }
                if (element.CatlogsType == 'AgencyStatus') {
                    CatlogsAgencyStatus_.push(element);
                }
                if (element.CatlogsType == 'AgencyType') {
                    CatlogsAgencyType_.push(element);
                }
            }
            this.CatlogsProductWritten = CatlogsProductWritten_;
            this.CatlogsAgencyStatus = CatlogsAgencyStatus_;
            this.CatlogsAgencyType = CatlogsAgencyType_;
            this.CatlogsTitle = CatlogsTitle_;
            this.Agency.AgencyType = this.CatlogsAgencyType.find(e => e.CatlogsName === 'None').CatlogsId;
            this.BloackUIStop();
            if (Model != null) {
                this.BloackUIStart("Loading Data");
                this.setAgencyOut(Model);
            }
            else {
                this.StatusCurrent = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'Draft').CatlogsId;
            }
        });
    }
    setAgencyNew() {
        this.Agency = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyModel"]();
        this.contactAutCount = this.Agency.AbcontAut.length;
        this.AutCountMinMax = this.Agency.AbcontAut.length;
        this.SetLocalCatlogs(null);
    }
    setAgencyCurrentUser(Id) {
        this.BloackUIStart("Loading Data");
        this.AgencyService.getAgencyId(Id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(objAgency => {
            this.BloackUIStop();
            if (objAgency) {
                this.intAddFormGroup(objAgency[0]);
                this.Agency = objAgency[0];
                this.contactAutCount = this.Agency.AbcontAut.length;
                this.AutCountMinMax = this.Agency.AbcontAut.length;
                this.SetInitDataPickerAppointedSince(this.Agency);
                this.SetInitDataPickerOwnerOfficerDob(this.Agency);
                for (let ele of this.Agency.Abdocument) {
                    if (ele.DocumentFile != null) {
                        this.DocumentsFiles = JSON.parse(ele.DocumentFile);
                    }
                }
                this.CheckStatusProductWrittenOther(this.Agency.AbagencyProductWritten, true);
                this.StatusCurrent = this.Agency.AgencyStatus;
            }
            else {
                this.loading = false;
            }
        }, error => {
            this.loading = false;
        });
    }
    setAgencyOut(ModelToken) {
        return this.AgencyService.GetAgencyToken(ModelToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(objAgency => {
            this.BloackUIStop();
            if (objAgency[0]) {
                this.intAddFormGroup(objAgency[0]);
                this.Agency = objAgency[0];
                this.contactAutCount = this.Agency.AbcontAut.length;
                this.AutCountMinMax = this.Agency.AbcontAut.length;
                this.SetInitDataPickerAppointedSince(this.Agency);
                this.SetInitDataPickerOwnerOfficerDob(this.Agency);
                for (let ele of this.Agency.Abdocument) {
                    if (ele.DocumentFile != null) {
                        this.DocumentsFiles = JSON.parse(ele.DocumentFile);
                    }
                }
                this.CheckStatusProductWrittenOther(this.Agency.AbagencyProductWritten, true);
                this.StatusCurrent = this.Agency.AgencyStatus;
            }
            else {
                this.AgencyService.onMessage("ChangeStatus");
                this.loading = false;
            }
        }, error => {
            this.AgencyService.onMessage("Error");
            this.loading = false;
        });
    }
    fileDownload(Type, Id, Root, Name) {
        this.BloackUIStart("Load File");
        this.DownloadService.downloadFile(Type, Id, Root, Name).subscribe(data => {
            switch (data.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response:
                    this.BloackUIStop();
                    const downloadedFile = new Blob([data.body], { type: data.body.type });
                    const a = document.createElement('a');
                    a.setAttribute('style', 'display:none;');
                    document.body.appendChild(a);
                    a.download = Name;
                    a.href = URL.createObjectURL(downloadedFile);
                    a.target = '_blank';
                    a.click();
                    document.body.removeChild(a);
                    break;
            }
        }, error => {
        });
    }
    onChangecontactAut(e) {
        if (e.target.value < this.AutCountMinMax) {
            this.contactAutCount = this.AutCountMinMax;
        }
        else {
            const numberOfcontactAut = e.target.value || 0;
            if (this.Agency.AbcontAut.length < numberOfcontactAut) {
                for (let i = this.Agency.AbcontAut.length; i < numberOfcontactAut; i++) {
                    this.Agency.AbcontAut.push(new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["ContactAutModel"]);
                    this.addAgencyAutContactControl();
                }
            }
            else {
                for (let i = this.Agency.AbcontAut.length; i >= numberOfcontactAut; i--) {
                    this.removeAgencyAutContactControl(i);
                    this.Agency.AbcontAut.splice(i, 1);
                }
            }
        }
    }
    onClickcontactAutRemoved(index) {
        this.removeAgencyAutContactControl(index);
        if (!this.IsNullOrGuidEmpty(this.Agency.AbcontAut[index].ContAutId)) {
            for (let element of this.Agency.AbcontAut[index].Abemail) {
                element.ControlUpdate = false;
            }
            let iPhone = this.Agency.AbcontAut[index].Abphone.length - 1;
            for (let element of this.Agency.AbcontAut[index].Abphone) {
                element.ControlUpdate = false;
            }
            this.Agency.AbcontAut[index].ControlUpdate = false;
        }
        else {
            this.Agency.AbcontAut.splice(index, 1);
            this.contactAutCount--;
        }
    }
    onFileSelected(type) {
        const inputNode = document.querySelector('#file' + type);
        for (let file of inputNode.files) {
            if (typeof (FileReader) !== 'undefined') {
                const reader = new FileReader();
                reader.onload = (e) => {
                };
                reader.readAsArrayBuffer(file);
            }
            if (type == 'PCLicense') {
                this.PCLicense_files.push(file);
            }
            if (type == 'CurrentEO') {
                this.CurrentEO_files.push(file);
            }
            if (type == 'W9') {
                this.W9_files.push(file);
            }
        }
    }
    fileDelete(type, index) {
        if (type == 'PCLicense') {
            this.PCLicense_files.splice(index, 1);
        }
        if (type == 'CurrentEO') {
            this.CurrentEO_files.splice(index, 1);
        }
        if (type == 'W9') {
            this.W9_files.splice(index, 1);
        }
        if (type == 'Repo_PCLicense') {
            this.DocumentsFiles.PCLicense.splice(index, 1);
        }
        if (type == 'Repo_CurrentEO') {
            this.DocumentsFiles.CurrentEO.splice(index, 1);
        }
        if (type == 'Repo_W9') {
            this.DocumentsFiles.W9.splice(index, 1);
        }
    }
    IsNullOrGuidEmpty(Data) {
        return (Data == null || Data == '00000000-0000-0000-0000-000000000000') ? true : false;
    }
    onClickcontactAutPhoneAdd(Index) {
        this.ContactAutPhone = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["ContactAutPhoneModel"]();
        this.Agency.AbcontAut[Index].Abphone.push(Object.assign({}, this.ContactAutPhone));
        this.addAgencyAutContactPhoneControl(Index);
    }
    onClickcontactAutEmailAdd(Index) {
        this.ContactAutEmail = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["ContactAutEmailModel"]();
        this.Agency.AbcontAut[Index].Abemail.push(Object.assign({}, this.ContactAutEmail));
        this.addAgencyAutContactEmailControl(Index);
    }
    onClickAgencyEmailAdd(e) {
        this.AgencyEmail = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyEmailModel"]();
        this.Agency.Abemail.push(Object.assign({}, this.AgencyEmail));
        this.addAgencyEmailControl();
    }
    onClickAgencyPhoneAdd(e) {
        this.AgencyPhone = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyPhoneModel"]();
        this.Agency.Abphone.push(Object.assign({}, this.AgencyPhone));
        this.addAgencyPhoneControl();
    }
    onClickCarrierAdd(e) {
        this.Carrier = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["CarrierModel"]();
        this.Agency.Abcarrier.push(Object.assign({}, this.Carrier));
        this.addAgencyCarrierControl();
    }
    onClickOwnerOfficerAdd(e) {
        this.OwnerOfficer = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["OwnerOfficerModel"]();
        this.Agency.AbownerOfficer.push(Object.assign({}, this.OwnerOfficer));
        this.addAgencyOwnerControl();
    }
    onClickcontactAutPhoneRemove(parentIndex, childrenIndex) {
        this.removeAgencyAutContactPhoneControl(parentIndex, childrenIndex);
        if (!this.IsNullOrGuidEmpty(this.Agency.AbcontAut[parentIndex].Abphone[childrenIndex].PhoneId)) {
            this.Agency.AbcontAut[parentIndex].Abphone[childrenIndex].ControlUpdate = false;
        }
        else {
            this.Agency.AbcontAut[parentIndex].Abphone.splice(childrenIndex, 1);
        }
    }
    onClickcontactAutEmailRemove(parentIndex, childrenIndex) {
        this.removeAgencyAutContactEmailControl(parentIndex, childrenIndex);
        if (!this.IsNullOrGuidEmpty(this.Agency.AbcontAut[parentIndex].Abemail[childrenIndex].EmailId)) {
            this.Agency.AbcontAut[parentIndex].Abemail[childrenIndex].ControlUpdate = false;
        }
        else {
            this.Agency.AbcontAut[parentIndex].Abemail.splice(childrenIndex, 1);
        }
    }
    onClickAgencyEmailRemove(childrenIndex) {
        this.removeAgencyEmailControl(childrenIndex);
        if (!this.IsNullOrGuidEmpty(this.Agency.Abemail[childrenIndex].EmailId)) {
            this.Agency.Abemail[childrenIndex].ControlUpdate = false;
        }
        else {
            this.Agency.Abemail.splice(childrenIndex, 1);
        }
        //https://www.concretepage.com/angular/angular-formarray-validation
    }
    onClickAgencyPhoneRemove(childrenIndex) {
        this.removeAgencyPhoneControl(childrenIndex);
        if (!this.IsNullOrGuidEmpty(this.Agency.Abphone[childrenIndex].PhoneId)) {
            this.Agency.Abphone[childrenIndex].ControlUpdate = false;
        }
        else {
            this.Agency.Abphone.splice(childrenIndex, 1);
        }
    }
    onClickCarrierRemove(childrenIndex) {
        this.removeAgencyCarrierControl(childrenIndex);
        if (!this.IsNullOrGuidEmpty(this.Agency.Abcarrier[childrenIndex].CarrierId)) {
            this.Agency.Abcarrier[childrenIndex].ControlUpdate = false;
        }
        else {
            this.Agency.Abcarrier.splice(childrenIndex, 1);
        }
    }
    onClickOwnerOfficerRemove(childrenIndex) {
        this.removeAgencyOwnerControl(childrenIndex);
        if (!this.IsNullOrGuidEmpty(this.Agency.AbownerOfficer[childrenIndex].OwnerOfficerId)) {
            this.Agency.AbownerOfficer[childrenIndex].ControlUpdate = false;
        }
        else {
            this.Agency.AbownerOfficer.splice(childrenIndex, 1);
        }
    }
    validForm() {
        let ValidDocument = JSON.parse(this.getDocumentFile());
        let StausFiles = (ValidDocument.PCLicense.length > 0 && ValidDocument.CurrentEO.length > 0 && ValidDocument.W9.length > 0);
        let StatusDraft = this.AgencyForm.get('AgencyName').valid && this.AgencyForm.get('AgencyEmailControl').valid;
        let IdAgencyStatusDraft = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'Draft').CatlogsId;
        let IdAgencyStatusNew = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'New').CatlogsId;
        let IdAgencyStatusAccept = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'Accepted').CatlogsId;
        let ErrorsAgency = [];
        if (!this.currentUser) {
            if (this.AgencyForm.invalid || !StausFiles) {
                if (!StatusDraft) {
                    this.AgencyService.onMessage("Draft");
                    return false;
                }
                else {
                    this.flagValid = 1;
                    this.Agency.AgencyStatus = IdAgencyStatusDraft;
                }
            }
            else {
                this.flagValid = 2;
                this.Agency.AgencyStatus = IdAgencyStatusNew;
            }
        }
        else {
            if (this.Agency.AgencyStatus == IdAgencyStatusNew || this.Agency.AgencyStatus == IdAgencyStatusAccept) {
                if ((this.AgencyForm.invalid || !StausFiles)) {
                    this.AgencyService.onMessage("NotDraft");
                    return false;
                }
            }
        }
        return true;
    }
    stopProgressDocument() {
    }
    onClickSaveAgency(id) {
        this.flagReturnSave = false;
        this.Agency.ResendStatus = "00000000-0000-0000-0000-000000000000";
        this.flagValid = 0;
        let statusMigrate = (this.Agency.AbagencyMigrate.length > 0) ? ((this.Agency.AbagencyMigrate[0].AgencyRequestNumber != 0) ? true : false) : false;
        let constvalid = (!statusMigrate) ? this.validForm() : true;
        if (!constvalid) {
            return;
        }
        if (this.currentUser) {
            this.Agency.UserIdModify = this.currentUser.Data.UserId;
        }
        let Redirect = false;
        var formData = new FormData();
        for (let file of this.PCLicense_files) {
            formData.append('PCLicense[]', file);
        }
        for (let file of this.CurrentEO_files) {
            formData.append('CurrentEO[]', file);
        }
        for (let file of this.W9_files) {
            formData.append('W9[]', file);
        }
        if (this.checkedReSend) {
            this.Agency.ResendStatus = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'ResendStatus').CatlogsId;
        }
        this.BloackUIStart('Upload File');
        this.AgencyDocumentService.PostAgencyDocumentUpload(formData, this.Agency.AgencyDocumentId).subscribe((res) => {
            this.BloackUIStop();
            this.BloackUIStart('Saving Agency');
            this.Agency.AgencyDocumentId = res.DocumentDirectory;
            this.Agency.Abdocument[0].DocumentFile = this.getDocumentFile();
            this.loading = true;
            let StatusChenge = this.StatusCurrent != this.Agency.AgencyStatus;
            //if(StatusChenge){this.StatusCurrent = this.Agency.AgencyStatus;}    
            let IdAgencyStatusAccept = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'Accepted').CatlogsId;
            let IdAgencyStatusNew = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'New').CatlogsId;
            let IdAgencyStatusDraft = this.CatlogsAgencyStatus.find(e => e.CatlogsName === 'Draft').CatlogsId;
            let NameAgencyStatus = this.CatlogsAgencyStatus.find(e => e.CatlogsId === this.StatusCurrent).CatlogsName;
            let timerIntervalDocument;
            let countDocumentGenerate = 0;
            let limitDocumentGenerate = 4;
            if (this.flagValid == 0 && (StatusChenge || !this.IsNullOrGuidEmpty(this.Agency.ResendStatus)) && IdAgencyStatusAccept === this.Agency.AgencyStatus) {
                timerIntervalDocument = setInterval(() => {
                    this.BloackUIStop();
                    if (!this.flagReturnSave) {
                        this.BloackUIStart('Document Generate ' + countDocumentGenerate.toString() + ' Of ' + limitDocumentGenerate);
                        this.AgencyService.getProgressDocument(this.Agency.AgencyRequestNumber)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                            .subscribe(data => {
                            countDocumentGenerate = Object(data).length;
                            if (countDocumentGenerate >= limitDocumentGenerate) {
                                this.BloackUIStop();
                                this.BloackUIStart('Document Generate ' + countDocumentGenerate.toString() + ' Of ' + limitDocumentGenerate);
                                clearInterval(timerIntervalDocument);
                            }
                            else {
                                this.BloackUIStop();
                                this.BloackUIStart('Document Generate ' + countDocumentGenerate.toString() + ' Of ' + limitDocumentGenerate);
                            }
                        }, error => {
                        });
                    }
                    else {
                        clearInterval(timerIntervalDocument);
                    }
                }, 1000);
            }
            this.AgencyService.Save(this.Agency)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(data => {
                this.flagReturnSave = true;
                this.BloackUIStop();
                if (this.flagValid == 1) {
                    if (data.Save.Status) {
                        if (!this.currentUser) {
                            if (data.Email != null) {
                                this.EmptyFormAgency();
                                this.setAgencyOut({ AgencyId: data.Email.ModelRedirect.AgencyId, Token: data.Email.ModelRedirect.Token });
                            }
                            this.AgencyService.onMessage("SendDraft", true, "ModelRedirect", (data.Email) ? data.Email.ModelRedirect : {
                                Router: "/agency-form",
                                AgencyId: this.Agency.AgencyId,
                                Token: this.Agency.Token
                            }, [{
                                    Status: "MissingInformation",
                                    Redirect: true,
                                    UrlRedirect: "ModelRedirect",
                                    queryParameter: (data.Email) ? data.Email.ModelRedirect : {
                                        Router: "/agency-form",
                                        AgencyId: this.Agency.AgencyId,
                                        Token: this.Agency.Token
                                    }
                                }]);
                        }
                    }
                }
                if (this.flagValid == 2) {
                    this.AgencyService.onMessage("SendNew");
                }
                if (this.flagValid == 0 && StatusChenge && IdAgencyStatusAccept == this.StatusCurrent) {
                    this.AgencyService.onMessage("Accepted", true);
                    Redirect = true;
                    clearInterval(timerIntervalDocument);
                }
                else {
                    if (this.flagValid == 0 && StatusChenge && (IdAgencyStatusNew == this.StatusCurrent || IdAgencyStatusDraft == this.StatusCurrent)) {
                        this.AgencyService.onMessage("ReSendStatus", true);
                        Redirect = true;
                    }
                    else {
                        if (this.flagValid == 0 && StatusChenge && IdAgencyStatusAccept != this.StatusCurrent) {
                            this.AgencyService.onMessage(NameAgencyStatus, true);
                            Redirect = true;
                        }
                        else {
                            if (this.flagValid == 0 && !StatusChenge) {
                                this.AgencyService.onMessage("Save Data", true);
                                Redirect = true;
                            }
                        }
                    }
                }
                this.StatusCurrent = this.Agency.AgencyStatus;
                if (data.Save.Status) {
                    if (this.currentUser) {
                        /*if(Redirect){
                          //this.EmptyFormAgency();
                          let timerInterval;
                          timerInterval = setInterval(() => {
                              this.router.navigate(['/']);
                              clearInterval(timerInterval);
                          }, 7000);
                        }*/
                    }
                }
            }, error => {
                this.BloackUIStop();
                this.loading = false;
            });
        });
    }
    EmptyFormAgency() {
        this.Agency = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["AgencyModel"]();
        this.DocumentsFiles = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_8__["FilesSaveModel"]();
        this.PCLicense_files = [];
        this.CurrentEO_files = [];
        this.W9_files = [];
    }
    getDocumentFile() {
        const PCLicense = [];
        const CurrentEO = [];
        const W9 = [];
        for (let element of this.DocumentsFiles.PCLicense) {
            PCLicense.push(element);
        }
        for (let element of this.DocumentsFiles.CurrentEO) {
            CurrentEO.push(element);
        }
        for (let element of this.DocumentsFiles.W9) {
            W9.push(element);
        }
        for (let element of this.PCLicense_files) {
            PCLicense.push(element.name);
        }
        for (let element of this.CurrentEO_files) {
            CurrentEO.push(element.name);
        }
        for (let element of this.W9_files) {
            W9.push(element.name);
        }
        return JSON.stringify({ PCLicense, CurrentEO, W9 });
    }
    compareObjects(o1, o2) {
        let statusCompare = o1.ProductWrittenCatlogsId === o2.ProductWrittenCatlogsId;
        if (statusCompare) {
            o1.ProductWrittenAgencyId = o2.ProductWrittenAgencyId;
            o1.ProductWrittenId = o2.ProductWrittenId;
            o1.ControlUpdate = o2.ControlUpdate;
        }
        return statusCompare;
    }
    BloackUIStart(message) {
        console.log(message);
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
    SetDataPickerAppointedSince(event, i) {
        let ValidDate = new Date(event.value);
        if (ValidDate.toString() != 'Invalid Date') {
            this.AgencyCarrierControl.controls[i].get("AppointedSince").setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["formatDate"])(ValidDate, 'MM/dd/yyyy', 'en-US'));
        }
    }
    ngModelDataPickerAppointedSince(i) {
        let ValidDate = new Date(this.AgencyCarrierControl.controls[i].get("AppointedSince").value);
        if (ValidDate.toString() != 'Invalid Date') {
            this.Agency.Abcarrier[i].AppointedSince = Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["formatDate"])(ValidDate, 'yyyy-MM-dd', 'en-US') + "T00:00:00";
        }
    }
    SetInitDataPickerAppointedSince(Model) {
        for (let index in Model.Abcarrier) {
            if (Model.Abcarrier[index].AppointedSince != null) {
                let ValidDate = new Date(Model.Abcarrier[index].AppointedSince);
                if (ValidDate.toString() != 'Invalid Date') {
                    this.AgencyCarrierControl.controls[index].get("AppointedSince").setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["formatDate"])(ValidDate, 'MM/dd/yyyy', 'en-US'));
                }
            }
        }
    }
    SetDataPickerOwnerOfficerDob(event, i) {
        let ValidDate = new Date(event.value);
        if (ValidDate.toString() != 'Invalid Date') {
            this.AgencyOwnerControl.controls[i].get("OwnerOfficerDob").setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["formatDate"])(ValidDate, 'MM/dd/yyyy', 'en-US'));
        }
    }
    ngModelDataPickerOwnerOfficerDob(i) {
        let ValidDate = new Date(this.AgencyOwnerControl.controls[i].get("OwnerOfficerDob").value);
        if (ValidDate.toString() != 'Invalid Date') {
            this.Agency.AbownerOfficer[i].Dob = Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["formatDate"])(ValidDate, 'yyyy-MM-dd', 'en-US') + "T00:00:00";
        }
    }
    SetInitDataPickerOwnerOfficerDob(Model) {
        for (let index in Model.AbownerOfficer) {
            if (Model.AbownerOfficer[index].Dob != null) {
                let ValidDate = new Date(Model.AbownerOfficer[index].Dob);
                if (ValidDate.toString() != 'Invalid Date') {
                    this.AgencyOwnerControl.controls[index].get("OwnerOfficerDob").setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["formatDate"])(ValidDate, 'MM/dd/yyyy', 'en-US'));
                }
            }
        }
    }
};
AgencyFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_9__["AgencyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_13__["CatlogsGetService"] },
    { type: _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_12__["StatesGetService"] },
    { type: _services_AgencyDocument_service__WEBPACK_IMPORTED_MODULE_10__["AgencyDocumentService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"] },
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_11__["DownloadService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"] },
    { type: ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_16__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AgencyFormComponent.prototype, "blockUI", void 0);
AgencyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agency-form',
        template: __webpack_require__(/*! raw-loader!./agency-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/agency-form/agency-form.component.html"),
        styles: [__webpack_require__(/*! ./agency-form.component.scss */ "./src/app/agency-form/agency-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_agency_service__WEBPACK_IMPORTED_MODULE_9__["AgencyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_13__["CatlogsGetService"],
        _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_12__["StatesGetService"],
        _services_AgencyDocument_service__WEBPACK_IMPORTED_MODULE_10__["AgencyDocumentService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
        _services__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBar"],
        _services_download_service__WEBPACK_IMPORTED_MODULE_11__["DownloadService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"]])
], AgencyFormComponent);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");





//import { StatesGetService } from './_services/StatesGet.service';
//import { CatlogsGetService } from './_services/CatlogsGet.service';
let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.isExpanded = false;
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
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    BloackUIStart(message) {
        console.log(message);
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AppComponent.prototype, "blockUI", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"), styles: [__webpack_require__(/*! ./nav-menu/nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _broker_information_broker_information_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./broker-information/broker-information.component */ "./src/app/broker-information/broker-information.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./agency-form/agency-form.component */ "./src/app/agency-form/agency-form.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialog-document/dialog-document.component */ "./src/app/dialog-document/dialog-document.component.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialog-user/dialog-user.component */ "./src/app/dialog-user/dialog-user.component.ts");
/* harmony import */ var _dialog_user_profile_dialog_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog-user-profile/dialog-user-profile.component */ "./src/app/dialog-user-profile/dialog-user-profile.component.ts");
/* harmony import */ var _dialog_user_permissions_dialog_user_permissions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog-user-permissions/dialog-user-permissions.component */ "./src/app/dialog-user-permissions/dialog-user-permissions.component.ts");
/* harmony import */ var _status_email_status_email_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./status-email/status-email.component */ "./src/app/status-email/status-email.component.ts");
/* harmony import */ var _dialog_statusemail_dialog_statusemail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialog-statusemail/dialog-statusemail.component */ "./src/app/dialog-statusemail/dialog-statusemail.component.ts");
/* harmony import */ var _catlogs_form_catlogs_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./catlogs-form/catlogs-form.component */ "./src/app/catlogs-form/catlogs-form.component.ts");
/* harmony import */ var _dialog_catlogs_form_dialog_catlogs_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialog-catlogs-form/dialog-catlogs-form.component */ "./src/app/dialog-catlogs-form/dialog-catlogs-form.component.ts");
/* harmony import */ var _dialog_follow_dialog_follow_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialog-follow/dialog-follow.component */ "./src/app/dialog-follow/dialog-follow.component.ts");





// used to create fake backend


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            ng_block_ui__WEBPACK_IMPORTED_MODULE_20__["BlockUIModule"].forRoot(),
            ngx_mask__WEBPACK_IMPORTED_MODULE_16__["NgxMaskModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _broker_information_broker_information_component__WEBPACK_IMPORTED_MODULE_10__["BrokerInformationComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_11__["NavMenuComponent"],
            _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_12__["AgencyFormComponent"],
            _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__["UserFormComponent"],
            _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_19__["DialogDocumentComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
            _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_22__["DialogUserComponent"],
            _dialog_user_profile_dialog_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["DialogUserProfileComponent"],
            _dialog_user_permissions_dialog_user_permissions_component__WEBPACK_IMPORTED_MODULE_24__["DialogUserPermissionsComponent"],
            _status_email_status_email_component__WEBPACK_IMPORTED_MODULE_25__["StatusEmailComponent"],
            _dialog_statusemail_dialog_statusemail_component__WEBPACK_IMPORTED_MODULE_26__["DialogStatusEmailComponent"],
            _catlogs_form_catlogs_form_component__WEBPACK_IMPORTED_MODULE_27__["CatlogsFormComponent"],
            _dialog_catlogs_form_dialog_catlogs_form_component__WEBPACK_IMPORTED_MODULE_28__["DialogCatlogsFormComponent"],
            _dialog_follow_dialog_follow_component__WEBPACK_IMPORTED_MODULE_29__["DialogFollowComponent"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["BasicAuthInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
            // provider used to create fake backend
            _helpers__WEBPACK_IMPORTED_MODULE_5__["fakeBackendProvider"]
        ],
        entryComponents: [
            _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_19__["DialogDocumentComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
            _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_22__["DialogUserComponent"],
            _dialog_user_profile_dialog_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["DialogUserProfileComponent"],
            _dialog_user_permissions_dialog_user_permissions_component__WEBPACK_IMPORTED_MODULE_24__["DialogUserPermissionsComponent"],
            _dialog_statusemail_dialog_statusemail_component__WEBPACK_IMPORTED_MODULE_26__["DialogStatusEmailComponent"],
            _dialog_catlogs_form_dialog_catlogs_form_component__WEBPACK_IMPORTED_MODULE_28__["DialogCatlogsFormComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _broker_information_broker_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broker-information/broker-information.component */ "./src/app/broker-information/broker-information.component.ts");
/* harmony import */ var _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agency-form/agency-form.component */ "./src/app/agency-form/agency-form.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _status_email_status_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-email/status-email.component */ "./src/app/status-email/status-email.component.ts");
/* harmony import */ var _catlogs_form_catlogs_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catlogs-form/catlogs-form.component */ "./src/app/catlogs-form/catlogs-form.component.ts");








const routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: '', component: BrokerInformationComponent, canActivate: [AuthGuard] },
    { path: 'agency-form', component: _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__["AgencyFormComponent"] },
    //{ path: 'agency-form/:AgencyId/:Token', component: AgencyFormComponent },
    { path: 'user-form', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__["UserFormComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'status-email', component: _status_email_status_email_component__WEBPACK_IMPORTED_MODULE_6__["StatusEmailComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'catlogs-form', component: _catlogs_form_catlogs_form_component__WEBPACK_IMPORTED_MODULE_7__["CatlogsFormComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '', component: _broker_information_broker_information_component__WEBPACK_IMPORTED_MODULE_3__["BrokerInformationComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'agency-form/:id', component: _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__["AgencyFormComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/broker-information/broker-information.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/broker-information/broker-information.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".broker-information-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJva2VyLWluZm9ybWF0aW9uL0M6XFxBdmlhblxcQXZpYW4uV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXGJyb2tlci1pbmZvcm1hdGlvblxcYnJva2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9icm9rZXItaW5mb3JtYXRpb24vYnJva2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Jyb2tlci1pbmZvcm1hdGlvbi9icm9rZXItaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tc3RhciB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG4iLCIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZC5tYXQtY29sdW1uLXN0YXIge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLm1hdC10YWJsZS1zdGlja3k6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/broker-information/broker-information.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/broker-information/broker-information.component.ts ***!
  \********************************************************************/
/*! exports provided: BrokerInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerInformationComponent", function() { return BrokerInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog-document/dialog-document.component */ "./src/app/dialog-document/dialog-document.component.ts");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_services/download.service */ "./src/app/_services/download.service.ts");
















let BrokerInformationComponent = class BrokerInformationComponent {
    constructor(AgencyService, DownloadService, AuthenticationService, CatlogsGetService, matIconRegistry, domSanitizer, route, router, dialog) {
        this.AgencyService = AgencyService;
        this.DownloadService = DownloadService;
        this.AuthenticationService = AuthenticationService;
        this.CatlogsGetService = CatlogsGetService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['DateTimeCreate', 'AgencyRequestNumber', 'AgencyName', 'Abemail', 'Abphone', 'AgencyStatus', 'star'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.CatlogsAgencyStatus = [];
        this.User = [];
        this.PermissionsCRUD = [];
        this.User = this.AuthenticationService.currentUserValue;
        this.User.Data.ProfileUser.forEach(UserP => {
            UserP.Profile.forEach(Profile => {
                Profile.Permissions.forEach(Permissions => {
                    if (Permissions.CatlogsType == 'PermissionsCRUD') {
                        this.PermissionsCRUD.push(Permissions.CatlogsName);
                    }
                });
            });
        });
    }
    viewAgency(Index) {
        this.AgencyService.setGuid(Index);
        this.router.navigate(['agency-form/']);
    }
    deleteAgency(Index) {
        this.BloackUIStart("Deleting...");
        this.AgencyService.deleteAgency({ AgencyId: Index, UserId: this.User.Data.UserId }).subscribe(res => {
            this.BloackUIStop();
            if (Object(res).Status) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.dataSource.data.splice(this.dataSource.data.findIndex(a => a.AgencyId == Index), 1));
            }
        });
    }
    checkPermissions(Permissions_) {
        return this.PermissionsCRUD.findIndex(a => a == Permissions_) > -1;
    }
    viewDocument(Index) {
        this.DownloadService.getFileList(Index).subscribe(res => {
            const dialogRef = this.dialog.open(_dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_11__["DialogDocumentComponent"], {
                width: '650px',
                data: {
                    Document: res
                }
            });
        });
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.BloackUIStart("Loading Catlogs");
        this.CatlogsGetService.getCatlogs().subscribe(res => {
            for (let element of Object(res)) {
                if (element.CatlogsType == 'AgencyStatus') {
                    this.CatlogsAgencyStatus.push(element);
                }
            }
            this.BloackUIStop();
            this.BloackUIStart("Loading Data");
            this.AgencyService.getAgency()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
                .subscribe(data => {
                this.BloackUIStop();
                this.dataSource.data = Object(data);
                if (data) {
                }
                else {
                }
            }, error => {
            });
        });
    }
    BloackUIStart(message) {
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
BrokerInformationComponent.ctorParameters = () => [
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_12__["AgencyService"] },
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_15__["DownloadService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_14__["CatlogsGetService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], BrokerInformationComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], BrokerInformationComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
], BrokerInformationComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_9__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BrokerInformationComponent.prototype, "blockUI", void 0);
BrokerInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broker-information',
        template: __webpack_require__(/*! raw-loader!./broker-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/broker-information/broker-information.component.html"),
        styles: [__webpack_require__(/*! ./broker-information.component.scss */ "./src/app/broker-information/broker-information.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_agency_service__WEBPACK_IMPORTED_MODULE_12__["AgencyService"],
        _services_download_service__WEBPACK_IMPORTED_MODULE_15__["DownloadService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_14__["CatlogsGetService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], BrokerInformationComponent);

const ELEMENT_DATA = [];


/***/ }),

/***/ "./src/app/catlogs-form/catlogs-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/catlogs-form/catlogs-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".broker-information-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0bG9ncy1mb3JtL0M6XFxBdmlhblxcQXZpYW4uV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNhdGxvZ3MtZm9ybVxcY2F0bG9ncy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRsb2dzLWZvcm0vY2F0bG9ncy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGxvZ3MtZm9ybS9jYXRsb2dzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tc3RhciB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG4iLCIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZC5tYXQtY29sdW1uLXN0YXIge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLm1hdC10YWJsZS1zdGlja3k6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/catlogs-form/catlogs-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/catlogs-form/catlogs-form.component.ts ***!
  \********************************************************/
/*! exports provided: CatlogsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatlogsFormComponent", function() { return CatlogsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/download.service */ "./src/app/_services/download.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_catlogs_form_dialog_catlogs_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialog-catlogs-form/dialog-catlogs-form.component */ "./src/app/dialog-catlogs-form/dialog-catlogs-form.component.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_services/StatesGet.service */ "./src/app/_services/StatesGet.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");

















let CatlogsFormComponent = class CatlogsFormComponent {
    constructor(DownloadService, AgencyService, CatlogsGetService, StatesGetService, UserService, matIconRegistry, domSanitizer, route, router, dialog) {
        //this.CatlogsAgencyStatus = this.CatlogsGetService.getCatlogsAgencyStatus();
        this.DownloadService = DownloadService;
        this.AgencyService = AgencyService;
        this.CatlogsGetService = CatlogsGetService;
        this.StatesGetService = StatesGetService;
        this.UserService = UserService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumnsCatlogs = ['CatlogsName', 'CatlogsPrefix', 'CatlogsType', 'star'];
        this.displayedColumnsStates = ['StateName', 'StatePrefix', 'star'];
        this.displayedColumnsProductWritten = ['ProductWrittenCatlogsName', 'star'];
        this.displayedColumnsProfile = ['ProfileName', 'star'];
        this.dataSourceCatlogs = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.dataSourceStates = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.dataSourceCatlogsProductWritten = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.dataSourceProfile = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        //dataSource = ELEMENT_DATA;
        this.CatlogsTitle = [];
        this.CatlogsAgencyStatus = [];
        this.CatlogsAgencyType = [];
        this.CatlogsPermissionsCRUD = [];
        this.CatlogsPermissions = [];
        this.Profile = [];
        this.States = [];
        this.CatlogsProductWritten = [];
        this.Catlogs = [];
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
        const dialogRef = this.dialog.open(_dialog_catlogs_form_dialog_catlogs_form_component__WEBPACK_IMPORTED_MODULE_12__["DialogCatlogsFormComponent"], {
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
        this.dataSourceCatlogsProductWritten.paginator = this.paginatorProductWritten;
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
    BloackUIStart(message) {
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
CatlogsFormComponent.ctorParameters = () => [
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"] },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_5__["AgencyService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_8__["CatlogsGetService"] },
    { type: _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_14__["StatesGetService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorCatlogs', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], CatlogsFormComponent.prototype, "paginatorCatlogs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatSortCatlogs', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], CatlogsFormComponent.prototype, "sortCatlogs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatTableCatlogs', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTable"])
], CatlogsFormComponent.prototype, "tableCatlogs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorStates', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], CatlogsFormComponent.prototype, "paginatorStates", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatSortStates', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], CatlogsFormComponent.prototype, "sortStates", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatTableStates', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTable"])
], CatlogsFormComponent.prototype, "tableStates", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorProductWritten', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], CatlogsFormComponent.prototype, "paginatorProductWritten", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatSortProductWritten', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], CatlogsFormComponent.prototype, "sortProductWritten", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatTableProductWritten', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTable"])
], CatlogsFormComponent.prototype, "tableProductWritten", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatPaginatorProfile', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], CatlogsFormComponent.prototype, "paginatorProfile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatSortProfile', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], CatlogsFormComponent.prototype, "sortProfile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MatTableProfile', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTable"])
], CatlogsFormComponent.prototype, "tableProfile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_13__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CatlogsFormComponent.prototype, "blockUI", void 0);
CatlogsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catlogs-form',
        template: __webpack_require__(/*! raw-loader!./catlogs-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/catlogs-form/catlogs-form.component.html"),
        styles: [__webpack_require__(/*! ./catlogs-form.component.scss */ "./src/app/catlogs-form/catlogs-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_download_service__WEBPACK_IMPORTED_MODULE_9__["DownloadService"],
        _services_agency_service__WEBPACK_IMPORTED_MODULE_5__["AgencyService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_8__["CatlogsGetService"],
        _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_14__["StatesGetService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
], CatlogsFormComponent);



/***/ }),

/***/ "./src/app/dialog-catlogs-form/dialog-catlogs-form.component.less":
/*!************************************************************************!*\
  !*** ./src/app/dialog-catlogs-form/dialog-catlogs-form.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1jYXRsb2dzLWZvcm0vZGlhbG9nLWNhdGxvZ3MtZm9ybS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog-catlogs-form/dialog-catlogs-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialog-catlogs-form/dialog-catlogs-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogCatlogsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCatlogsFormComponent", function() { return DialogCatlogsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_agency_model_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/agency-model-data */ "./src/app/_models/agency-model-data.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");








let DialogCatlogsFormComponent = class DialogCatlogsFormComponent {
    constructor(formBuilder, dialog, CatlogsGetService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.CatlogsGetService = CatlogsGetService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    intAddFormGroup(Model) {
        let index = 0;
        for (let element of Model.EmailTo) {
            if (index > 0) {
                this.addEmailToControl();
            }
            index++;
        }
        index = 0;
        for (let element of Model.EmailCc) {
            if (index > 0) {
                this.addEmailCcControl();
            }
            index++;
        }
    }
    intValidForm() {
        this.CatlogsForm = this.formBuilder.group({
            EmailStatus: [''],
            TypeSend: [''],
            StatusCatlogs: [''],
            EmailCcControl: this.formBuilder.array([
                this.createEmailCcFormGroup()
            ], []),
            EmailToControl: this.formBuilder.array([
                this.createEmailToFormGroup()
            ], []),
        });
    }
    //Agency - Carrier ArrayControl Valid////////////////
    createEmailToFormGroup() {
        return this.formBuilder.group({
            EmailTo: ['']
        });
    }
    get EmailToControl() {
        return this.CatlogsForm.get('EmailToControl');
    }
    addEmailToControl() {
        let fg = this.createEmailToFormGroup();
        this.EmailToControl.push(fg);
    }
    removeEmailToControl(idx) {
        this.EmailToControl.removeAt(idx);
    }
    createEmailCcFormGroup() {
        return this.formBuilder.group({
            EmailCc: ['']
        });
    }
    get EmailCcControl() {
        return this.CatlogsForm.get('EmailCcControl');
    }
    addEmailCcControl() {
        let fg = this.createEmailCcFormGroup();
        this.EmailCcControl.push(fg);
    }
    removeEmailCcControl(idx) {
        this.EmailCcControl.removeAt(idx);
    }
    ngOnInit() {
        this.intValidForm();
        this.EmailStatus = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_4__["EmailStatusModel"]();
        if (this.data.EmailStatus != null) {
            this.intAddFormGroup(this.data.EmailStatus);
            this.EmailStatus = this.data.EmailStatus;
        }
    }
    SaveEmailStatus() {
        this.BloackUIStart('Update Data');
        this.CatlogsGetService.AddCatlog(this.EmailStatus)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            this.BloackUIStop();
            if (data.Status) {
                this.closeDialog();
            }
        }, error => {
            this.BloackUIStop();
        });
    }
    closeDialog( /*obj: any*/) {
        this.dialogRef.close( /*obj*/);
    }
    IsNullOrGuidEmpty(Data) {
        return (Data == null || Data == '00000000-0000-0000-0000-000000000000') ? true : false;
    }
    trackByIdx(index, obj) {
        return index;
    }
    onClickEmailToAdd() {
        this.EmailStatus.EmailTo.push("");
        this.addEmailToControl();
    }
    onClickEmailToRemove(i) {
        this.removeEmailToControl(i);
        this.EmailStatus.EmailTo.splice(i, 1);
    }
    onClickEmailCcAdd() {
        this.EmailStatus.EmailCc.push("");
        this.addEmailCcControl();
    }
    onClickEmailCcRemove(i) {
        this.removeEmailCcControl(i);
        this.EmailStatus.EmailCc.splice(i, 1);
    }
    BloackUIStart(message) {
        console.log(message);
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
DialogCatlogsFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_7__["CatlogsGetService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DialogCatlogsFormComponent.prototype, "blockUI", void 0);
DialogCatlogsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-catlogs-form',
        template: __webpack_require__(/*! raw-loader!./dialog-catlogs-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-catlogs-form/dialog-catlogs-form.component.html"),
        styles: [__webpack_require__(/*! ./dialog-catlogs-form.component.less */ "./src/app/dialog-catlogs-form/dialog-catlogs-form.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_7__["CatlogsGetService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogCatlogsFormComponent);



/***/ }),

/***/ "./src/app/dialog-document/dialog-document.component.less":
/*!****************************************************************!*\
  !*** ./src/app/dialog-document/dialog-document.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1kb2N1bWVudC9kaWFsb2ctZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog-document/dialog-document.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog-document/dialog-document.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDocumentComponent", function() { return DialogDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/download.service */ "./src/app/_services/download.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let DialogDocumentComponent = class DialogDocumentComponent {
    constructor(dialog, DownloadService, dialogRef, data) {
        this.dialog = dialog;
        this.DownloadService = DownloadService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DownloadFile(Model) {
        this.DownloadService.downloadFile("DocumentGenerate", Model.Id, Model.Root, Model.File).subscribe(data => {
            switch (data.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                    const downloadedFile = new Blob([data.body], { type: data.body.type });
                    const a = document.createElement('a');
                    a.setAttribute('style', 'display:none;');
                    document.body.appendChild(a);
                    a.download = Model.File;
                    a.href = URL.createObjectURL(downloadedFile);
                    a.target = '_blank';
                    a.click();
                    document.body.removeChild(a);
                    break;
            }
        }, error => {
        });
    }
    closeDialog( /*obj: any*/) {
        this.dialogRef.close( /*obj*/);
    }
};
DialogDocumentComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-document',
        template: __webpack_require__(/*! raw-loader!./dialog-document.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-document/dialog-document.component.html"),
        styles: [__webpack_require__(/*! ./dialog-document.component.less */ "./src/app/dialog-document/dialog-document.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogDocumentComponent);



/***/ }),

/***/ "./src/app/dialog-follow/dialog-follow.component.less":
/*!************************************************************!*\
  !*** ./src/app/dialog-follow/dialog-follow.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1mb2xsb3cvZGlhbG9nLWZvbGxvdy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog-follow/dialog-follow.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dialog-follow/dialog-follow.component.ts ***!
  \**********************************************************/
/*! exports provided: DialogFollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFollowComponent", function() { return DialogFollowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DialogFollowComponent = class DialogFollowComponent {
    constructor() { }
    ngOnInit() {
    }
};
DialogFollowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-follow',
        template: __webpack_require__(/*! raw-loader!./dialog-follow.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-follow/dialog-follow.component.html"),
        styles: [__webpack_require__(/*! ./dialog-follow.component.less */ "./src/app/dialog-follow/dialog-follow.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DialogFollowComponent);



/***/ }),

/***/ "./src/app/dialog-statusemail/dialog-statusemail.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/dialog-statusemail/dialog-statusemail.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroller-container {\n  max-height: 95px;\n  overflow: auto;\n  border: 0px solid #ccc;\n}\n.scroller-container::-webkit-scrollbar {\n  width: 10px;\n}\n.scroller-container::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.scroller-container::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLXN0YXR1c2VtYWlsL0M6L0F2aWFuL0F2aWFuLldlYi9DbGllbnRBcHAvc3JjL2FwcC9kaWFsb2ctc3RhdHVzZW1haWwvZGlhbG9nLXN0YXR1c2VtYWlsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9kaWFsb2ctc3RhdHVzZW1haWwvZGlhbG9nLXN0YXR1c2VtYWlsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxvREFBQTtFQUNBLG1CQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0VBQ0Esb0RBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1zdGF0dXNlbWFpbC9kaWFsb2ctc3RhdHVzZW1haWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsZXItY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA5NXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XG4gIH1cbiAgLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIFxuICAuc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpOyBcbiAgfSIsIi5zY3JvbGxlci1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA5NXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAwcHggc29saWQgI2NjYztcbn1cbi5zY3JvbGxlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEwcHg7XG59XG4uc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dialog-statusemail/dialog-statusemail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialog-statusemail/dialog-statusemail.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogStatusEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusEmailComponent", function() { return DialogStatusEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_agency_model_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/agency-model-data */ "./src/app/_models/agency-model-data.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");









let DialogStatusEmailComponent = class DialogStatusEmailComponent {
    constructor(formBuilder, dialog, AgencyService, CatlogsGetService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.AgencyService = AgencyService;
        this.CatlogsGetService = CatlogsGetService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.CatlogsAgencyStatus = [];
        this.CatlogsAgencyStatus = this.CatlogsGetService.CatlogsAgencyStatusValue;
    }
    intAddFormGroup(Model) {
        let index = 0;
        for (let element of Model.EmailTo) {
            if (index > 0) {
                this.addEmailToControl();
            }
            index++;
        }
        index = 0;
        for (let element of Model.EmailCc) {
            if (index > 0) {
                this.addEmailCcControl();
            }
            index++;
        }
    }
    intValidForm() {
        this.EmailStatusForm = this.formBuilder.group({
            EmailStatus: [''],
            TypeSend: [''],
            StatusCatlogs: [''],
            EmailCcControl: this.formBuilder.array([
                this.createEmailCcFormGroup()
            ], []),
            EmailToControl: this.formBuilder.array([
                this.createEmailToFormGroup()
            ], []),
        });
    }
    //Agency - Carrier ArrayControl Valid////////////////
    createEmailToFormGroup() {
        return this.formBuilder.group({
            EmailTo: ['']
        });
    }
    get EmailToControl() {
        return this.EmailStatusForm.get('EmailToControl');
    }
    addEmailToControl() {
        let fg = this.createEmailToFormGroup();
        this.EmailToControl.push(fg);
    }
    removeEmailToControl(idx) {
        this.EmailToControl.removeAt(idx);
    }
    createEmailCcFormGroup() {
        return this.formBuilder.group({
            EmailCc: ['']
        });
    }
    get EmailCcControl() {
        return this.EmailStatusForm.get('EmailCcControl');
    }
    addEmailCcControl() {
        let fg = this.createEmailCcFormGroup();
        this.EmailCcControl.push(fg);
    }
    removeEmailCcControl(idx) {
        this.EmailCcControl.removeAt(idx);
    }
    ngOnInit() {
        this.intValidForm();
        this.EmailStatus = new _models_agency_model_data__WEBPACK_IMPORTED_MODULE_4__["EmailStatusModel"]();
        if (this.data.EmailStatus != null) {
            this.intAddFormGroup(this.data.EmailStatus);
            this.EmailStatus = this.data.EmailStatus;
        }
    }
    SaveEmailStatus() {
        this.BloackUIStart('Update Data');
        this.AgencyService.AddEmailStatus(this.EmailStatus)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            this.BloackUIStop();
            if (data.Status) {
                this.closeDialog();
            }
        }, error => {
            this.BloackUIStop();
        });
    }
    closeDialog( /*obj: any*/) {
        this.dialogRef.close( /*obj*/);
    }
    IsNullOrGuidEmpty(Data) {
        return (Data == null || Data == '00000000-0000-0000-0000-000000000000') ? true : false;
    }
    trackByIdx(index, obj) {
        return index;
    }
    onClickEmailToAdd() {
        this.EmailStatus.EmailTo.push("");
        this.addEmailToControl();
    }
    onClickEmailToRemove(i) {
        this.removeEmailToControl(i);
        this.EmailStatus.EmailTo.splice(i, 1);
    }
    onClickEmailCcAdd() {
        this.EmailStatus.EmailCc.push("");
        this.addEmailCcControl();
    }
    onClickEmailCcRemove(i) {
        this.removeEmailCcControl(i);
        this.EmailStatus.EmailCc.splice(i, 1);
    }
    BloackUIStart(message) {
        console.log(message);
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
DialogStatusEmailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_8__["AgencyService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_7__["CatlogsGetService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DialogStatusEmailComponent.prototype, "blockUI", void 0);
DialogStatusEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-statusemail',
        template: __webpack_require__(/*! raw-loader!./dialog-statusemail.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-statusemail/dialog-statusemail.component.html"),
        styles: [__webpack_require__(/*! ./dialog-statusemail.component.less */ "./src/app/dialog-statusemail/dialog-statusemail.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_agency_service__WEBPACK_IMPORTED_MODULE_8__["AgencyService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_7__["CatlogsGetService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogStatusEmailComponent);



/***/ }),

/***/ "./src/app/dialog-user-permissions/dialog-user-permissions.component.less":
/*!********************************************************************************!*\
  !*** ./src/app/dialog-user-permissions/dialog-user-permissions.component.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy11c2VyLXBlcm1pc3Npb25zL2RpYWxvZy11c2VyLXBlcm1pc3Npb25zLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/dialog-user-permissions/dialog-user-permissions.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialog-user-permissions/dialog-user-permissions.component.ts ***!
  \******************************************************************************/
/*! exports provided: DialogUserPermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserPermissionsComponent", function() { return DialogUserPermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/users-model-data */ "./src/app/_models/users-model-data.ts");






let DialogUserPermissionsComponent = class DialogUserPermissionsComponent {
    constructor(formBuilder, dialog, UserService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.UserService = UserService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ProfileUser = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["ProfileUserModel"];
    }
    intValidForm() {
        this.PermissionsForm = this.formBuilder.group({
            PermissionsType: [''],
            PermissionsName: [''],
            PermissionsPrefix: ['']
        });
    }
    ngOnInit() {
        this.intValidForm();
        this.Catlogs = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["CatlogsModel"]();
        this.Catlogs = Object.assign({}, this.Catlogs);
    }
    SavePermissions() {
    }
    SaveProfile() {
        console.log(this.User);
        return;
        /*this.UserService.AddUser().subscribe(
          data => {
          },
          error => {
          }
        );*/
    }
};
DialogUserPermissionsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogUserPermissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-user-permissions',
        template: __webpack_require__(/*! raw-loader!./dialog-user-permissions.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-user-permissions/dialog-user-permissions.component.html"),
        styles: [__webpack_require__(/*! ./dialog-user-permissions.component.less */ "./src/app/dialog-user-permissions/dialog-user-permissions.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogUserPermissionsComponent);



/***/ }),

/***/ "./src/app/dialog-user-profile/dialog-user-profile.component.less":
/*!************************************************************************!*\
  !*** ./src/app/dialog-user-profile/dialog-user-profile.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy11c2VyLXByb2ZpbGUvZGlhbG9nLXVzZXItcHJvZmlsZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog-user-profile/dialog-user-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialog-user-profile/dialog-user-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserProfileComponent", function() { return DialogUserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/users-model-data */ "./src/app/_models/users-model-data.ts");






let DialogUserProfileComponent = class DialogUserProfileComponent {
    constructor(formBuilder, dialog, UserService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.UserService = UserService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ProfileUser = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["ProfileUserModel"];
    }
    intValidForm() {
        this.ProfileForm = this.formBuilder.group({
            ProfileName: [''],
        });
    }
    ngOnInit() {
        this.intValidForm();
        this.Profile = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["ProfileModel"]();
        this.Profile = Object.assign({}, this.Profile);
    }
    SaveProfile() {
        console.log(this.User);
        return;
        /*this.UserService.AddUser().subscribe(
          data => {
          },
          error => {
          }
        );*/
    }
};
DialogUserProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-user-profile',
        template: __webpack_require__(/*! raw-loader!./dialog-user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-user-profile/dialog-user-profile.component.html"),
        styles: [__webpack_require__(/*! ./dialog-user-profile.component.less */ "./src/app/dialog-user-profile/dialog-user-profile.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogUserProfileComponent);



/***/ }),

/***/ "./src/app/dialog-user/dialog-user.component.less":
/*!********************************************************!*\
  !*** ./src/app/dialog-user/dialog-user.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroller-container {\n  max-height: 150px;\n  overflow: auto;\n  border: 0px solid #ccc;\n}\n.scroller-container::-webkit-scrollbar {\n  width: 10px;\n}\n.scroller-container::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.scroller-container::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLXVzZXIvQzovQXZpYW4vQXZpYW4uV2ViL0NsaWVudEFwcC9zcmMvYXBwL2RpYWxvZy11c2VyL2RpYWxvZy11c2VyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9kaWFsb2ctdXNlci9kaWFsb2ctdXNlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDQ0o7QURDRTtFQUNFLFdBQUE7QUNDSjtBREVFO0VBQ0Usb0RBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxtQkFBQTtFQUNBLG9EQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2ctdXNlci9kaWFsb2ctdXNlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxlci1jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XG4gIH1cbiAgLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIFxuICAuc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpOyBcbiAgfSIsIi5zY3JvbGxlci1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XG59XG4uc2Nyb2xsZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNjcm9sbGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dialog-user/dialog-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialog-user/dialog-user.component.ts ***!
  \******************************************************/
/*! exports provided: DialogUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserComponent", function() { return DialogUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/users-model-data */ "./src/app/_models/users-model-data.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let DialogUserComponent = class DialogUserComponent {
    constructor(formBuilder, dialog, UserService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.UserService = UserService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.ProfileUser = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["ProfileUserModel"];
        this.ProfilePermissions = [];
    }
    intAddFormGroup(Model) {
        let index = 0;
        for (let element of Model.ProfileUser) {
            element.Profile.forEach(element_ => {
                if (index > 0) {
                    this.addProfileControl();
                }
                index++;
            });
        }
    }
    intValidForm() {
        this.UserForm = this.formBuilder.group({
            FirstName: [''],
            UserStatus: [''],
            LastName: [''],
            UserName: [''],
            Email: [''],
            Password: [''],
            ProfileControl: this.formBuilder.array([
                this.createProfileFormGroup()
            ], []),
        });
    }
    //Agency - Carrier ArrayControl Valid////////////////
    createProfileFormGroup() {
        return this.formBuilder.group({
            Profile: [''],
            Permission: ['']
        });
    }
    get ProfileControl() {
        return this.UserForm.get('ProfileControl');
    }
    addProfileControl() {
        let fg = this.createProfileFormGroup();
        this.ProfileControl.push(fg);
    }
    removeProfileControl(idx, jdx) {
        this.ProfileControl[idx].Profile.removeAt(jdx);
    }
    ngOnInit() {
        this.intValidForm();
        this.User = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["UserModel"]();
        if (this.data.User != null) {
            this.intAddFormGroup(this.data.User);
            this.User = this.data.User;
        }
    }
    SaveUser() {
        this.BloackUIStart();
        this.UserService.AddUser(this.User)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            this.BloackUIStop();
            if (data.Status) {
                this.closeDialog();
            }
        }, error => {
            this.BloackUIStop();
        });
    }
    closeDialog( /*obj: any*/) {
        this.dialogRef.close( /*obj*/);
    }
    IsNullOrGuidEmpty(Data) {
        return (Data == null || Data == '00000000-0000-0000-0000-000000000000') ? true : false;
    }
    profileChanged(i, j, value) {
        this.User.ProfileUser[i].Profile[j].Permissions = this.data.Profile[this.data.Profile.findIndex(e => e.ProfileId === value)].Permissions;
    }
    compareProfile(o1, o2) {
        let statusCompare = o1 === o2;
        if (statusCompare) {
            o1 = o2;
        }
        return statusCompare;
    }
    compareObjects(o1, o2) {
        let statusCompare = o1.CatlogsId === o2.CatlogsId;
        if (statusCompare) {
            o1.CatlogsId = o2.CatlogsId;
        }
        return statusCompare;
    }
    onClickProfileAdd(i, j) {
        this.Profile = new _models_users_model_data__WEBPACK_IMPORTED_MODULE_5__["ProfileModel"]();
        this.User.ProfileUser[i].Profile.push(Object.assign({}, this.Profile));
        this.addProfileControl();
    }
    onClickProfileRemove(i, j) {
        if (this.User.ProfileUser[i].Profile[j].ProfileId != null) {
            this.User.ProfileUser[i].Profile[j].ControlUpdate = false;
        }
        else {
            this.removeProfileControl(i, j);
            this.User.ProfileUser[i].Profile.splice(j, 1);
        }
    }
    BloackUIStart(message) {
        console.log(message);
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
DialogUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DialogUserComponent.prototype, "blockUI", void 0);
DialogUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-user',
        template: __webpack_require__(/*! raw-loader!./dialog-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-user/dialog-user.component.html"),
        styles: [__webpack_require__(/*! ./dialog-user.component.less */ "./src/app/dialog-user/dialog-user.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogUserComponent);



/***/ }),

/***/ "./src/app/dialog/dialog.component.less":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DialogComponent = class DialogComponent {
    constructor(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    closeDialog( /*obj: any*/) {
        this.dialogRef.close( /*obj*/);
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/dialog/dialog.component.html"),
        styles: [__webpack_require__(/*! ./dialog.component.less */ "./src/app/dialog/dialog.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




let HomeComponent = class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center;\n}\n\n.error {\n  padding: 16px;\n  width: 100%;\n  color: white;\n  background-color: red;\n}\n\n.login-card {\n  width: 30%;\n}\n\n.login-header-image {\n  background-image: \"assets/img/avian-bap.png\";\n  background-size: cover;\n}\n\n.tarjeta {\n  min-width: 400px;\n  max-width: 600px;\n}\n\n.circular {\n  border-radius: 50%;\n}\n\n.contenedor {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXEF2aWFuXFxBdmlhbi5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBOztFQUVFLGFBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLDRDQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlLFxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6ICdhc3NldHMvaW1nL2F2aWFuLWJhcC5wbmcnO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5jaXJjdWxhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCIubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUsXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmxvZ2luLWNhcmQge1xuICB3aWR0aDogMzAlO1xufVxuXG4ubG9naW4taGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogXCJhc3NldHMvaW1nL2F2aWFuLWJhcC5wbmdcIjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRhcmpldGEge1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uY2lyY3VsYXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");






//import { EncrDecrService } from '../_services/EncrDecrService.service';

let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, 
    //private EncrDecr: EncrDecrService,
    CatlogsGetService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.CatlogsGetService = CatlogsGetService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        //this.authenticationService.login(this.f.username.value, this.EncrDecr.set(this.f.password.value))
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            if (data.Status) {
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.error = data.Message;
                this.loading = false;
            }
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_6__["CatlogsGetService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_6__["CatlogsGetService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-nav {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n.main-nav li a {\r\n  cursor: pointer;\r\n  padding: 10px 16px;\r\n  border-radius: 4px;\r\n}\r\n.main-nav li .fa {\r\n  margin-right: 10px;\r\n}\r\n.main-nav li.link-active a,\r\n.main-nav li.link-active a:hover,\r\n.main-nav li.link-active a:focus {\r\n  background-color: #4189C7;\r\n  color: white;\r\n}\r\n.tarjeta {\r\n  min-width: 100px;\r\n  max-width: 300px;\r\n}\r\n@media (min-width: 768px) {\r\n  .main-nav {\r\n    width: calc(25% - 30px);\r\n    min-width: 180px;\r\n  }\r\n  .main-nav .navbar {\r\n    border-radius: 0 15px 15px 0;\r\n    border-width: 0px;\r\n    height: 100%;\r\n  }\r\n  .main-nav .navbar a {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .main-nav .navbar ul {\r\n    float: none;\r\n  }\r\n  .main-nav .navbar li {\r\n    float: none;\r\n    font-size: 15px;\r\n    margin: 6px;\r\n  }\r\n  .main-nav .navbar li a {\r\n    padding: 10px 16px;\r\n    border-radius: 4px;\r\n  }\r\n  .main-nav .navbar-header {\r\n    float: none;\r\n  }\r\n  .main-nav .navbar-collapse {\r\n    padding: 0px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOzs7RUFHRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBSUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5tYWluLW5hdiBsaSBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ubWFpbi1uYXYgbGkgLmZhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm1haW4tbmF2IGxpLmxpbmstYWN0aXZlIGEsXHJcbi5tYWluLW5hdiBsaS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxyXG4ubWFpbi1uYXYgbGkubGluay1hY3RpdmUgYTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1haW4tbmF2IHtcclxuICAgIHdpZHRoOiBjYWxjKDI1JSAtIDMwcHgpO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgLm1haW4tbmF2IC5uYXZiYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubWFpbi1uYXYgLm5hdmJhciBhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbiAgLm1haW4tbmF2IC5uYXZiYXIgdWwge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5tYWluLW5hdiAubmF2YmFyIGxpIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgfVxyXG4gIC5tYWluLW5hdiAubmF2YmFyIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAubWFpbi1uYXYgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5tYWluLW5hdiAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/StatesGet.service */ "./src/app/_services/StatesGet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






//import { Router, ActivatedRoute, Params } from '@angular/router';

let NavMenuComponent = class NavMenuComponent {
    constructor(CatlogsGetService, StatesGetService, route, router, authenticationService, AgencyService) {
        this.CatlogsGetService = CatlogsGetService;
        this.StatesGetService = StatesGetService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.AgencyService = AgencyService;
        this.isExpanded = false;
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
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    ViewAgencyForm(view) {
        let guid;
        let viewString;
        let urlView;
        let getGuid = this.AgencyService.getGuid();
        guid = '/' + getGuid;
        viewString = '/' + view;
        urlView = (getGuid) ? view + guid : view;
        this.router.navigate([urlView]);
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_2__["CatlogsGetService"] },
    { type: _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_5__["StatesGetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_3__["AgencyService"] }
];
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html"),
        styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_2__["CatlogsGetService"],
        _services_StatesGet_service__WEBPACK_IMPORTED_MODULE_5__["StatesGetService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _services_agency_service__WEBPACK_IMPORTED_MODULE_3__["AgencyService"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/status-email/status-email.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/status-email/status-email.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".broker-information-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzLWVtYWlsL0M6XFxBdmlhblxcQXZpYW4uV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHN0YXR1cy1lbWFpbFxcc3RhdHVzLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGF0dXMtZW1haWwvc3RhdHVzLWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1lbWFpbC9zdGF0dXMtZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tc3RhciB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG4iLCIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZC5tYXQtY29sdW1uLXN0YXIge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLm1hdC10YWJsZS1zdGlja3k6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/status-email/status-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status-email/status-email.component.ts ***!
  \********************************************************/
/*! exports provided: StatusEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusEmailComponent", function() { return StatusEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/agency.service */ "./src/app/_services/agency.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _services_download_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/download.service */ "./src/app/_services/download.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_statusemail_dialog_statusemail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog-statusemail/dialog-statusemail.component */ "./src/app/dialog-statusemail/dialog-statusemail.component.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm2015/ng-block-ui.js");
















let StatusEmailComponent = class StatusEmailComponent {
    constructor(AgencyService, DownloadService, CatlogsGetService, matIconRegistry, domSanitizer, route, router, dialog) {
        this.AgencyService = AgencyService;
        this.DownloadService = DownloadService;
        this.CatlogsGetService = CatlogsGetService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['EmailStatus', 'EmailTo', 'EmailCc', 'star'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.CatlogsAgencyStatus = [];
        //this.CatlogsAgencyStatus = this.CatlogsGetService.getCatlogsAgencyStatus();
    }
    viewEmailStatus(Index) {
        console.log(this.dataSource.data[Index]);
        const dialogRef = this.dialog.open(_dialog_statusemail_dialog_statusemail_component__WEBPACK_IMPORTED_MODULE_13__["DialogStatusEmailComponent"], {
            width: '650px',
            data: {
                EmailStatus: this.dataSource.data[Index]
            }
        });
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.BloackUIStart("Loading Data");
        this.AgencyService.getAgencyStatusEmail()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            this.BloackUIStop();
            this.dataSource.data = Object(data);
            if (data) {
            }
            else {
            }
        }, error => {
        });
    }
    BloackUIStart(message) {
        this.blockUI.start(message);
    }
    BloackUIStop(time = 0) {
        setTimeout(() => {
            this.blockUI.stop();
        }, time);
    }
};
StatusEmailComponent.ctorParameters = () => [
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_5__["AgencyService"] },
    { type: _services_download_service__WEBPACK_IMPORTED_MODULE_10__["DownloadService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_9__["CatlogsGetService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], StatusEmailComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], StatusEmailComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTable"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTable"])
], StatusEmailComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_14__["BlockUI"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StatusEmailComponent.prototype, "blockUI", void 0);
StatusEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-email',
        template: __webpack_require__(/*! raw-loader!./status-email.component.html */ "./node_modules/raw-loader/index.js!./src/app/status-email/status-email.component.html"),
        styles: [__webpack_require__(/*! ./status-email.component.scss */ "./src/app/status-email/status-email.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_agency_service__WEBPACK_IMPORTED_MODULE_5__["AgencyService"],
        _services_download_service__WEBPACK_IMPORTED_MODULE_10__["DownloadService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_9__["CatlogsGetService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]])
], StatusEmailComponent);

const ELEMENT_DATA = [];


/***/ }),

/***/ "./src/app/user-form/user-form.component.less":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".broker-information-container {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\ntable {\n  width: 100%;\n}\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\nth.mat-column-position,\ntd.mat-column-position {\n  padding-left: 8px;\n}\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL0M6L0F2aWFuL0F2aWFuLldlYi9DbGllbnRBcHAvc3JjL2FwcC91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDREY7QURJQTs7RUFDRSxpQkFBQTtBQ0RGO0FESUE7RUFDRSwrQkFBQTtBQ0ZGO0FES0E7RUFDRSw4QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icm9rZXItaW5mb3JtYXRpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6MTAwJTtcbn1cblxudGQubWF0LWNvbHVtbi1zdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxudGgubWF0LWNvbHVtbi1wb3NpdGlvbiwgdGQubWF0LWNvbHVtbi1wb3NpdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4iLCIuYnJva2VyLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRkLm1hdC1jb2x1bW4tc3RhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG50aC5tYXQtY29sdW1uLXBvc2l0aW9uLFxudGQubWF0LWNvbHVtbi1wb3NpdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuLm1hdC10YWJsZS1zdGlja3k6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/CatlogsGet.service */ "./src/app/_services/CatlogsGet.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialog-user/dialog-user.component */ "./src/app/dialog-user/dialog-user.component.ts");
/* harmony import */ var _dialog_user_profile_dialog_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog-user-profile/dialog-user-profile.component */ "./src/app/dialog-user-profile/dialog-user-profile.component.ts");
/* harmony import */ var _dialog_user_permissions_dialog_user_permissions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialog-user-permissions/dialog-user-permissions.component */ "./src/app/dialog-user-permissions/dialog-user-permissions.component.ts");
















let UserFormComponent = class UserFormComponent {
    constructor(UserService, CatlogsGetService, matIconRegistry, domSanitizer, route, router, dialog) {
        this.UserService = UserService;
        this.CatlogsGetService = CatlogsGetService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['UserName', 'Password', 'FirstName', 'LastName', 'Email', 'ProfileUser', 'star'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.CatlogsPermissionsCRUD = [];
        this.CatlogsPermissions = [];
        this.Profile = [];
        this.CatlogsPermissionsCRUD = this.CatlogsGetService.CatlogsPermissionsCRUDValue;
        this.CatlogsPermissions = this.CatlogsGetService.CatlogsPermissionsValue;
        this.Profile = this.UserService.ProfileValue;
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.UserService.getUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(data => {
            console.log(data);
            console.log(Object(data));
            this.dataSource.data = Object(data);
            if (data) {
            }
            else {
            }
        }, error => {
        });
    }
    viewUser(UserId = null) {
        this.AddUser(UserId);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    AddUser(UserId = null) {
        const dialogRef = this.dialog.open(_dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_12__["DialogUserComponent"], {
            width: '450px',
            data: {
                User: (UserId != null) ? this.dataSource.data.find(a => a.UserId == UserId) : UserId,
                Profile: this.Profile,
                PermissionCRUD: this.CatlogsPermissionsCRUD,
                Permission: this.CatlogsPermissions
            }
        });
    }
    AddProfile() {
        const dialogRef = this.dialog.open(_dialog_user_profile_dialog_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["DialogUserProfileComponent"], {
            width: '450px',
            data: {
                Profile: this.Profile,
                PermissionCRUD: this.CatlogsPermissionsCRUD,
                Permission: this.CatlogsPermissions
            }
        });
    }
    AddPermissions() {
        const dialogRef = this.dialog.open(_dialog_user_permissions_dialog_user_permissions_component__WEBPACK_IMPORTED_MODULE_14__["DialogUserPermissionsComponent"], {
            width: '450px',
            data: {
                Profile: this.Profile,
                PermissionCRUD: this.CatlogsPermissionsCRUD,
                Permission: this.CatlogsPermissions
            }
        });
    }
};
UserFormComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_9__["CatlogsGetService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], UserFormComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], UserFormComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTable"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTable"])
], UserFormComponent.prototype, "table", void 0);
UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-form',
        template: __webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-form/user-form.component.html"),
        styles: [__webpack_require__(/*! ./user-form.component.less */ "./src/app/user-form/user-form.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _services_CatlogsGet_service__WEBPACK_IMPORTED_MODULE_9__["CatlogsGetService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
], UserFormComponent);

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
const ELEMENT_DATA = [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Avian\Avian.Web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map