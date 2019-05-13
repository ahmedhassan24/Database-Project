import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BackService } from './services/back.service';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { InviteAdminComponent } from './invite-admin/invite-admin.component';
import { InviteStaffComponent } from './invite-staff/invite-staff.component';
import { ViewAdminComponent } from './view-admin/view-admin.component'
import { LocalStorageModule } from 'angular-2-local-storage';
import { StaffComponent } from './staff/staff.component';
import { HeaderComponent } from './header/header.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AddRestComponent } from './add-rest/add-rest.component';
import { LogsComponent } from './logs/logs.component';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AdminDashboardComponent,
    LoginComponent,
    DiscountsComponent,
    RestaurantsComponent,
    UsersComponent,
    ProfileComponent,
    MenuComponent,
    InviteAdminComponent,
    InviteStaffComponent,
    ViewAdminComponent,
    StaffComponent,
    HeaderComponent,
    ChangePassComponent,
    AddRestComponent,
    LogsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
    // BackService
  ],
  providers: [BackService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
