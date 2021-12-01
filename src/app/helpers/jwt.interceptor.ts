import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private tokenService: HttpXsrfTokenExtractor
  ) {}
intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(req);
}
  
  
}
