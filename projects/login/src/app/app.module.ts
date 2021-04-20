import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'projects/shared/src/public-api';
import { MaterialModule } from 'projects/vendors/src/lib/material-module';
import { MSLoadingSpinnerModule } from 'projects/shared/src/lib/components/loader/loader.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'projects/shared/src/lib/interceptors/error-interceptor.service';
import { TokenInterceptor } from 'projects/shared/src/lib/interceptors/token-interceptor.service';
import { CanDeactivateGuardService } from 'projects/tools/src/lib/services/can-deactivate-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const Interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    MSLoadingSpinnerModule
  ],
  providers: [Interceptors, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
