import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'projects/shared/src/lib/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../ms-main-screen/src/app/home/home.module').then(
        (m) => m.HomeModule
      ),
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('../../../login/src/app/login/login.module').then(
        (m) => m.LoginModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'ms-helper',
    loadChildren: () =>
      import('../../../ms-helper/src/app/mshelper/mshelper.module')
      .then((m) => m.MShelperModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
