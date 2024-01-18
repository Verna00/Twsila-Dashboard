import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
  {path: '', component:AdminUserComponent},
  { path: 'create-account', component: CreateUserComponent , canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
