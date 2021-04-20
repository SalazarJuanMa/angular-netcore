import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from '../../../../tools/src/lib/services/loader.service';
import { SharedService } from '../../../../tools/src/lib/shared.service';
import { HttpStatusCode, PAGE_LEVEL_ERROR } from '../constants/enumeration';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private customLoader = 'X-Custom-Loader';

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private sharedService: SharedService
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          if (!request.headers.has(this.customLoader)) {
            this.loaderService.hideLoader();
          }
        }
        return event;
      }),
      catchError((error) => {
        this.loaderService.hideLoader();
        return this.handleError(error);
      })
    );
  }

  private handleError(err: HttpErrorResponse) {
    switch (err.status) {
      case HttpStatusCode.Unauthorized:
        this.router.navigate([`/signin`]);
        break;
      case HttpStatusCode.NotFound:
        return throwError(err);
      default:
        this.setPageLevelError();
        return throwError(err);
    }
  }

  private setPageLevelError(): void {
    if (this.sharedService.isShowPageLevelError) {
      this.sharedService.showPageLevelError(PAGE_LEVEL_ERROR.UNKNOWN_ERROR);
      window.scrollTo(0, 0);
    }
  }
}
