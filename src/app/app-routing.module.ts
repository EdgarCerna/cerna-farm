import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { ManageAnimalsComponent } from './manage-animals/manage-animals.component';
import { ManageBlocksComponent } from './manage-blocks/manage-blocks.component';

const routes: Routes = [
  { path: 'manage-animals', component: ManageAnimalsComponent },
  { path: 'manage-blocks', component: ManageBlocksComponent },
  { path: '', component: WelcomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
