import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
import { ManageAnimalsComponent } from './manage-animals/manage-animals.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'manage-animals', component: ManageAnimalsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
