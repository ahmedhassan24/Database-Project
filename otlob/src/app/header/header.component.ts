import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
signedIn: boolean
  constructor(private headerservice: HeaderService, private localstorage : LocalStorageService,
  private router: Router) { }

admin= false;
user=false;
staff=false;

logout(): void{
  this.localstorage.remove("token")
  this.localstorage.remove("type")
  this.headerservice.signOut()
  this.router.navigate(['./login'])
}
login(): void{
  this.router.navigate(['./login'])
}

  ngOnInit() {

    this.headerservice.isSignedIn.subscribe(In=>{
      console.log(In,"IN")
      this.signedIn= In
      this.headerservice.setAdmin()
      
    })
    if(this.localstorage.get("type")=="a")
    this.admin=true;

    if(this.localstorage.get("type")=="u")
    this.user=true;

    if(this.localstorage.get("type")=="s")
    this.staff=true;

    if(this.localstorage.get("token")){
      this.headerservice.setIsSignedIn()
    }else{
      this.headerservice.signOut()
    }

  }

}
