import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(public auth: LoginService) {}
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Access-Control-Allow-Headers': 'Content-Type',
				Authorization: `Bearer ${this.auth.getToken()}`
			}
		});
		return next.handle(request);
	}
}
