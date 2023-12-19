import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { CreateUserComponent } from './admin-user/create-user/create-user.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    AdminUserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    ButtonModule,
    MenuModule, 
    RippleModule, 
    ButtonModule ,
    TableModule,
  ]
})
export class DashboardModule { }
