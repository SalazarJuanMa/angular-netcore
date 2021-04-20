import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoaderService } from '../../../../tools/src/lib/services/loader.service';
import { LOCAL_STORAGE } from '../constants/common.constant';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  private interceptorSkipHeader = 'X-Skip-Interceptor';
  private customLoader = 'X-Custom-Loader';

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has(this.customLoader)) {
    this.loaderService.showLoader();
    }
    if (req.headers.has(this.interceptorSkipHeader)) {
      const headers = req.headers.delete(this.interceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    } else {
      const secureToken = localStorage.getItem(LOCAL_STORAGE.Authorization);
      const request = req.clone({
        setHeaders: { Authorization: secureToken },
      });
      return next.handle(request);
    }
  }
}
