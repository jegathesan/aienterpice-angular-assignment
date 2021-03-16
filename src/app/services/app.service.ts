import { APIHelper } from './../shared/helpers/api-helper';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private apiHelper: APIHelper, private http: HttpClient) {}

  loadMockData(fileName) {
    const mockUrl: any = `./assets/mockdata/${fileName}.json`;
    return this.apiHelper.sendGetRequest('', mockUrl, false, '');
  }
}
