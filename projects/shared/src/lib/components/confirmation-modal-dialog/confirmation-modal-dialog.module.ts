import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatDialogModule, MatIconModule } from '@angular/material';

import { ConfirmationModalDialogComponent } from './confirmation-modal-dialog.component';
import { MSButtonModule } from '../ms-button/ms-button.module';

@NgModule({
  declarations: [ConfirmationModalDialogComponent],
  imports: [
    CommonModule,
    MSButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    ConfirmationModalDialogComponent,
  ],
  entryComponents: [
    ConfirmationModalDialogComponent,
  ],
})
export class ConfirmationModalDialogModule { }
