import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';

import { MSButtonComponent } from './ms-button.component';

@NgModule({
  declarations: [MSButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    MSButtonComponent,
  ]
})
export class MSButtonModule { }
