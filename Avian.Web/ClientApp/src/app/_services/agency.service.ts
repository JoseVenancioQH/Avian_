import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {Location} from '@angular/common';
import { AgencyModel } from '../_models/agency-model-data';
import Swal from 'sweetalert2'

@Injectable({ providedIn: 'root' })
export class AgencyService extends BaseService {
  private GuidIdAgencySubject: BehaviorSubject<string>;  
  public GuidIdAgency: Observable<string>;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    super();
   
    this.GuidIdAgencySubject = new BehaviorSubject<string>(localStorage.getItem('GuidIdAgency'));
    this.GuidIdAgency = this.GuidIdAgencySubject.asObservable();
    this.setController('Agency');
  }
  
  public Notify:any[] = [
    {
      Description:"",
      Type:"error", Status:"Error", Title:"Error Internal", Message:"Verify An Administrator", Duration:7000
    },
    {
      Description:"El broker, realiza un registro Tipo Draft, Ya cuenta con una liga para seguir editando el registro. Y se convierte en Tipo New, ya sea que los datos estan complentos o el administrador cambio de tipo el registro. El broker trata de editar la entrada. Y no puede ya que no es draft.",
      Type:"info", Status:"ChangeStatus", Title:"BAP Request status changed", Message:"Your BAP request status has been changed, please contact your customer service representative.", Duration:7000
    },
    {
      Description:"El Broker presiono guardar, los datos minimos para registro draft Agency Name y Email.",
      Type:"error", Status:"Draft", Title:"BAP Request data validation", Message:"Mandatory fields: Agency Name And Email.", Duration:7000
    },
    {
      Description:"El broker presiona guardar, el registro cuenta con los datos minimos para draft, pero no puede cambiar a status New, por datos faltantes. Lo mismo aplica para administrador, si los datos no estan completos, no permite registrar la entrada como New o cual quier otro status.",
      Type:"error", Status:"NotDraft", Title:"BAP Request data validation", Message:"Please fill in red highlighted fields.", Duration:7000
    },
    {
      Description:"El Broker realiza, una nueva entrada, como draft, cuenta con los datos minimos, se envia un correo electronico a el broker con la liga de edicion del registro.",
      Type:"success", Status:"SendDraft", Title:"BAP Request saved as Draft", Message:"Your BAP request has been saved as DRAFT, and an email was sent to you to come back to edit your draft record.", Duration:7000
    },
    {
      Description:"El Broker ha completado los datos completos para New, y se envia un correo electronico, Al administrador y broker indicando que existe una entrada nueva.",
      Type:"success", Status:"SendNew", Title:"New BAP request", Message:"Your BAP request has been submitted successfully. Thanks for doing business with us.", Duration:7000
    },
    {
      Description:"El administardor cambia de status New a Accepted, si no se han generado los documentos, se generan, y se envia un correo electronico a los administradores y al broker con los documentos.",
      Type:"success", Status:"Accepted", Title:"BAP status changed", Message:"Your BAP status change has been submitted successfully.", Duration:7000
    },
    {
      Description:"el administrador cambia a Canceled la entrada, se envia un correo electronico a los administradores y al broker, con notas, se adhieren los comentarios proporcionados en cada una de las secciones, data this is section is correct?.",
      Type:"info", Status:"Canceled", Title:"BAP status changed", Message:"Your BAP status change has been submitted successfully.", Duration:7000
    },
    {
      Description:"el administrador cambia a Canceled la entrada, se envia un correo electronico a los administradores y al broker, con notas, se adhieren los comentarios proporcionados en cada una de las secciones, data this is section is correct?.",
      Type:"info", Status:"On Hold", Title:"BAP status changed", Message:"Your BAP status change has been submitted successfully.", Duration:7000
    },
    {
      Description:"el administrador cambia a Canceled la entrada, se envia un correo electronico a los administradores y al broker, con notas, se adhieren los comentarios proporcionados en cada una de las secciones, data this is section is correct?.",
      Type:"info", Status:"Denied", Title:"BAP status changed", Message:"Your BAP status change has been submitted successfully.", Duration:7000
    },
    {
      Description:"Re Send Status \"Email\", se realiza el proceso del status seleccionado, y se envia el correo.",
      Type:"info", Status:"ReSendStatus", Title:"BAP status changed", Message:"Your BAP status change has been submitted successfully.", Duration:7000
    },
    {
      Description:"Save Data",
      Type:"success", Status:"Save Data", Title:"Save Data", Message:"Your BAP Save Data has been submitted successfully.", Duration:7000
    },
    {
      Description:"Missing information is highlighted in red",
      Type:"info", Status:"MissingInformation", Title:"Missing information is highlighted in red.", Message:"Please complete in order to successfully submit your application.", Duration:7000
    }
  ];
  public get GuidIdAgencyValue(): string {    
      return this.GuidIdAgencySubject.value;
  }
  Save(Agency: any) {
    return this.http.post<any>(`${this.endPoint()}`, Agency)
      .pipe(map(agency => {       
        return agency;
      }));
  }

  AddEmailStatus(EmailStatus: any) {
    return this.http.post<any>(`${this.endPoint('EmailStatus')}`, EmailStatus)
      .pipe(map(EmailStatus => {       
        return EmailStatus;
      }));
  }
  

  GetAgencyToken(Model: any) {
    return this.http.post<any>(`${this.endPoint('GetToken')}`, Model)
      .pipe(map(agency => {       
        return agency;
      }));
  }

  deleteAgency(Model: any) {
    return this.http.post<any>(`${this.endPoint('Delete')}`, Model)
      .pipe(map(agency => {       
        return agency;
      }));
  }

  
  //public deleteAgency = (id: any) => this.http.get(this.endPointValue('Delete',id));
  public getAgencyId = (id: any) => this.http.get(this.endPointValue(id));
  public getAgency = () => this.http.get(this.endPoint());
  public getAgencyStatusEmail = () => this.http.get(this.endPoint('GetStatusEmail'));  
  public getProgressDocument = (RequestNumber: number) => this.http.get(this.endPointValue('ProgressDocument',RequestNumber.toString()));  
  

  setGuid(id) { localStorage.setItem('GuidIdAgency', id); }  
  getGuid() {  return localStorage.getItem('GuidIdAgency'); }

  NotifyMessage(Status: any) {
    return this.Notify.find(a=>a.Status==Status);
  } 

  onMessage(Status:any, Redirect:boolean=false, UrlRedirect:string='/', queryParameter:any={}, TreeMessage:any[]=[]){        
    let Element = this.NotifyMessage(Status);
    let timerInterval;
    console.log(TreeMessage);
    Swal.fire({
      icon: Element.Type,
      title: Element.Title,
      html: Element.Message,
      timer: Element.Duration,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft().toString();
            }
          }
        }, 100)
      },
      onClose: () => {
       
        if(TreeMessage.length<=0){
          if(Redirect){
              if(UrlRedirect=='/'){
                this.router.navigate([UrlRedirect]);
              }else{                
                this.router.navigate([queryParameter.Router],
                                                    {
                                                        queryParams:{
                                                                      AgencyId:queryParameter.AgencyId,
                                                                      Token:queryParameter.Token
                                                                    }
                                                    }
                                    );
                }            
          }else{
            for (let element of TreeMessage) {              
              this.onMessage(element.Status,element.Redirect,element.UrlRedirect,element.queryParameter)
            }            
          }
        }
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        
        if(TreeMessage.length<=0){     
          if(UrlRedirect=='/'){
            this.router.navigate([UrlRedirect]);
          }else{            
            this.router.navigate([queryParameter.Router],
                                                {
                                                    queryParams:{
                                                                  AgencyId:queryParameter.AgencyId,
                                                                  Token:queryParameter.Token
                                                                }
                                                }
                                );          
          }
        }else{
          for (let element of TreeMessage) {            
            this.onMessage(element.Status,element.Redirect,element.UrlRedirect,element.queryParameter)
          } 
        }
      }
    })

    
  }
}
