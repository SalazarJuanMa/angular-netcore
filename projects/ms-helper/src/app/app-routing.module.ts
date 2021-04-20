import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/shared/src/lib/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../ms-main-screen/src/app/home/home.module').then(
        (m) => m.HomeModule
      ),
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
