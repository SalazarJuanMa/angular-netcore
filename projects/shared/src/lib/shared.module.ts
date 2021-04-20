import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'projects/vendors/src/lib/material-module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuItemComponent } from './components/header/menu-item/menu-item.component';
import { MSButtonModule } from './components/ms-button/ms-button.module';
import { MSLoadingSpinnerModule } from './components/loader/loader.module';
import { ShowAlertMessageComponent } from './components/show-alert-message/show-alert-message.component';
import { LayoutComponent } from './hoc/layout/layout.component';
import { SideNavModule } from './hoc/layout/side-nav/side-nav.module';
import { SharedComponent } from './shared.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  declarations: [
    SharedComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuItemComponent,
    ShowAlertMessageComponent,
    YesNoPipe
  ],
  imports: [
    MSButtonModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    MSLoadingSpinnerModule,
    SideNavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    SharedComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ShowAlertMessageComponent,
    YesNoPipe
  ],
  entryComponents: [ShowAlertMessageComponent],
})
export class SharedModule { }
