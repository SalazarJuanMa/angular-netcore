import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
} from '@angular/material';
import { ConfirmationModalDialogModule } from '../../../../shared/src/lib/components/confirmation-modal-dialog/confirmation-modal-dialog.module';
import { MSButtonModule } from '../../../../shared/src/lib/components/ms-button/ms-button.module';
import { MSLoadingSpinnerModule } from '../../../../shared/src/lib/components/loader/loader.module';

import { MShelperRoutingModule } from './mshelper.routing.module';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';

@NgModule({
  declarations: [
    SearchScreenComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    ConfirmationModalDialogModule,
    FormsModule,
    MShelperRoutingModule,
    MSButtonModule,
    MSLoadingSpinnerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatPaginatorModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MShelperModule {}
