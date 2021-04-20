import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MSAutocompleteComponent } from './autocomplete.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatOptionModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MSAutocompleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [MSAutocompleteComponent]
})
export class MSAutocompleteModule { }
