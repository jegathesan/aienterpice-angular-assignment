import { environment } from 'src/environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RestEnds } from '../config';

@Injectable({
  providedIn: 'root',
})
export class APIHelper {
  reponseEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public http: HttpClient, public router: Router) {}

  loadJSONFile(url) {
    return this.http.get(url);
  }

  prepareUrl(apiBase, url: RestEnds) {
    let urlStr = url + '';
    if (urlStr.indexOf('http://') != -1 || urlStr.indexOf('https://') != -1) {
      return urlStr;
    } else {
      return apiBase + urlStr;
    }
  }

  getRequestHeaders(mockFile, authenticate: boolean) {
    var headers = {
      mockFile: mockFile,
    };
    // Write a logic to append the any authenticated headers
    return {
      headers: new HttpHeaders(headers),
    };
  }

  sendPOSTRequest(
    apiBase,
    endUrl: RestEnds,
    bodyParams: any,
    authenticate: boolean,
    mockFile: String = ''
  ) {
    const headers = this.getRequestHeaders(mockFile, authenticate);
    const restUrl = this.prepareUrl(apiBase, endUrl);
    return this.http.post(restUrl, bodyParams, headers).pipe(
      map((response) => {
        return response;
      }),
      tap(
        (data) => {},
        (error) => {
          this.processError(error);
        }
      ),
      catchError(this.handleError)
    );
  }

  sendGetRequest(
    apiBase,
    endUrl: RestEnds,
    authenticate: boolean,
    mockFile: String = ''
  ) {
    const headers = this.getRequestHeaders(mockFile, authenticate);
    const restUrl = this.prepareUrl(apiBase, endUrl);
    const self = this;
    return this.http.get(restUrl, headers).pipe(
      map((response) => {
        return response;
      }),
      tap(
        (data) => {},
        (error) => {
          self.processError(error);
        }
      ),
      catchError(self.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Error code ${error.status}, ` +
          `body was: ${error.error}` +
          `, URL: ${error.url}`
      );
    }
    return throwError(error);
  }

  processError(error) {}
}
