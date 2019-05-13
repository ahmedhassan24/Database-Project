import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component'
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component'
import{MenuComponent} from './menu/menu.component'
import { ProfileComponent } from './profile/profile.component';
import { InviteAdminComponent } from './invite-admin/invite-admin.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

import{DiscountsComponent} from './discounts/discounts.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AddRestComponent } from './add-rest/add-rest.component';
import { LogsComponent } from './logs/logs.component';
const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'change-pass',
    component: ChangePassComponent
  },
  {
    path: 'logs',
    component: LogsComponent
  },
  {
    path: 'add-rest',
    component: AddRestComponent
  },
  {
    path: 'view-admin',
    component: ViewAdminComponent
  },
  {
    path:'admin/dashboard',
    component: AdminDashboardComponent
  },
  {
    path:'menu/:id',
    component: MenuComponent
  },
  {
    path:'user/profile',
    component: ProfileComponent
  },
  {
    path:'invite-admin',
    component: InviteAdminComponent
  },
  {
    path:'restaurants',
    component: RestaurantsComponent
  
  },
  {
    path:'discount',
    component: DiscountsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'staff',
    component:StaffComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
