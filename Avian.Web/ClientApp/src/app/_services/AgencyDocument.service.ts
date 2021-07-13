import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import {
  FilesArrayModel
} from '../_models/agency-model-data';

@Injectable({
  providedIn: 'root'
})

export class AgencyDocumentService extends BaseService {
  constructor(private http: HttpClient) {
    super();
    this.setController('DocumentUpload');
  }

  //Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  }

  httpOptionsPicture = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data; boundary=something',
      'reportProgress': 'true',
      'observe': 'events'
    })
  }

  getUploadOptions = (): HttpHeaders => {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.delete('Content-Type');
    return headers;
  }

  PostAgencyDocumentDelete(id): any {
    return this.http.post(this.endPoint('Delete'), id, this.httpOptions).pipe(
      catchError(this.errorHandl)
    )
  }

  PostAgencyDocumentUpload(file, Id): Observable<any> {
    return this.http.post<any>(this.endPointValue('Upload', Id), file, { headers: this.getUploadOptions() }).pipe(
      catchError(this.errorHandl)
    )
  }

  PostAgencyDocumentFiles(files): Observable<FilesArrayModel> {
    return this.http.post<FilesArrayModel>(this.endPoint(''), JSON.stringify(files), this.httpOptions).pipe(
      catchError(this.errorHandl)
    )
  }

  // Error handling
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
