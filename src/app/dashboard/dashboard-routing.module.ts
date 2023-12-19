import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';

import { CreateUserComponent } from './admin-user/create-user/create-user.component';

const routes: Routes = [
  {path: '', component:AdminUserComponent},

 
    { path: 'add', component: CreateUserComponent },
    { path: 'edit/:id', component: CreateUserComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
