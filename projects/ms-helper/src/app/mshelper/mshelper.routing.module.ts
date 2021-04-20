import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactivateGuardService } from 'projects/shared/src/lib/guards/can-deactivate.guard';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';

const routes: Routes = [
  {
    path: '',
    component: SearchScreenComponent,
    canDeactivate: [DeactivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MShelperRoutingModule { }
