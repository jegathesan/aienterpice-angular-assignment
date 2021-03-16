import { AppService } from './../services/app.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpClient,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    public http: HttpClient,
    private appService: AppService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Check Mock API is enabled
    if (environment.mockApi) {
      // Check Mock data is available for the request
      const mockDataFile = request.headers.get('mockFile');
      if (mockDataFile) {
        return this.appService.loadMockData(mockDataFile).pipe(
          switchMap((response) => {
            return of(new HttpResponse({ status: 200, body: response }));
          }),
          catchError((error) => {
            // Fetch original response
            return next.handle(request);
          })
        );
      } else {
        // Fetch original response
        return next.handle(request);
      }
    } else {
      // Fetch original response
      return next.handle(request);
    }
  }

  getMockData(mockDataFile, request: HttpRequest<any>, next: HttpHandler) {}
}
