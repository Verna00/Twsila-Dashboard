import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'change-password', component: ResetPasswordComponent },
            { path: 'create-account', component: CreateUserComponent },


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
