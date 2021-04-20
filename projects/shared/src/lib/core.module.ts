import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowAlertMessageComponent } from './components/show-alert-message/show-alert-message.component';
import { LayoutComponent } from './hoc/layout/layout.component';
import { MenuItemComponent } from './components/header/menu-item/menu-item.component';
import { SideNavModule } from './hoc/layout/side-nav/side-nav.module';
import { MSLoadingSpinnerModule } from './components/loader/loader.module';
import { ConfirmationModalDialogModule } from './components/confirmation-modal-dialog/confirmation-modal-dialog.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ShowAlertMessageComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    ConfirmationModalDialogModule,
    MSLoadingSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    SideNavModule,
    RouterModule,
    MatMenuModule,
  ],
  exports: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
