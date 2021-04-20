import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { MSButtonModule } from '../../../../shared/src/lib/components/ms-button/ms-button.module';
import { LoginRoutingModule } from './login.routing.module';
import { SharedModule } from 'projects/shared/src/public-api';


@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MSButtonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
