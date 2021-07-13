import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { BaseService } from './base.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DownloadService extends BaseService {  
  constructor(private httpClient: HttpClient) {
    super();
    this.setController('DownloadFile');
  }  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data; boundary=something',
      'reportProgress': 'true',
      'observe': 'events'
    })
  }

  public downloadFile(type: string, id:string, root:string,  file: string): Observable<HttpEvent<Blob>> {
    return this.httpClient.request(new HttpRequest(
        'POST',
        this.endPoint('Download'),
        {
            Type:type,
            Id:id, 
            Root:root, 
            File:file
        },
        {
          reportProgress: true,
          responseType: 'blob'
        }
      )
    );
  }  

  public getFileList(id: any): any {
    return this.httpClient.post<any>(`${this.endPoint('FileList')}`, id)
      .pipe(res => {       
        return res;
      });
  }

 

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}


