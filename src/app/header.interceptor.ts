import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken ="anbd58hg";
    let requestClone  = request.clone({
      setHeaders:{
        authToken
      }
    })
    return next.handle(requestClone).pipe(
      map(event =>{
        if(event instanceof HttpResponse){
          console.log(event);
        }
        return event;
      })
    );
  }
}
