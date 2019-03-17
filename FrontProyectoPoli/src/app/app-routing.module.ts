import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ProyectoPoliRiesgos',
    pathMatch: 'full'
  },
  {
    path: 'trends',
    loadChildren: './catalogue/trends/trends.module#TrendsPageModule'
  },
  {
    path: 'explorer',
    loadChildren: './catalogue/explorer/explorer.module#ExplorerPageModule'
  },
  {
    path: 'login',
    loadChildren: './access/login/login.module#LoginComponentModule'
  },
  {
    path: 'registration',
    loadChildren: './access/user-registration/registration.module#UserRegistrationComponentModule'
  },
  {
    path: 'profile',
    loadChildren: './catalogue/profile/profile.module#ProfilePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
