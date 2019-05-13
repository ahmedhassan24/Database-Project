import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderService } from './services/header.service';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otlob';
  showSideUser = false;
  showSideAdmin = false;
  showSideStaff = false;
  constructor(router: Router, private headerService: HeaderService, private localstorage: LocalStorageService) {
    this.headerService.admin.subscribe(admin=>{
      if(this.localstorage.get("type")=="a")
      this.showSideAdmin=admin
      console.log(this.showSideAdmin,"show")
    })
    this.headerService.user.subscribe(user=>{

      // if(this.localstorage.get("type")=="u")
      this.showSideUser=user
    })
    this.headerService.staff.subscribe(staff=>{

      // if(this.localstorage.get("type")=="s")
      this.showSideStaff=staff

    })
    
       
      }
    ;
  
}
