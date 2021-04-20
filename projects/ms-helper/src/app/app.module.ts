import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorsModule } from 'projects/vendors/src/lib/vendors.module';

import { MSButtonModule } from 'projects/shared/src/lib/components/ms-button/ms-button.module';
import { MaterialModule } from 'projects/vendors/src/lib/material-module';
import { SharedModule } from 'projects/shared/src/public-api';
import { MSLoadingSpinnerModule } from 'projects/shared/src/lib/components/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VendorsModule,
    BrowserAnimationsModule,
    MSButtonModule,
    MSLoadingSpinnerModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
