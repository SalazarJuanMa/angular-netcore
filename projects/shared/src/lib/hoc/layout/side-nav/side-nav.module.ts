import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatFormFieldModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
  exports: [
    SideNavComponent,
  ],
  entryComponents: [
    SideNavComponent,
  ],
})
export class SideNavModule { }
