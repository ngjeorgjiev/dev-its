import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.headers
            .set('Content-Type', 'application/json');
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}