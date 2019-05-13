import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{BackService} from '../services/back.service'
import { HeaderService } from '../services/header.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder,
    private backService: BackService,
  private headerService: HeaderService,
private localStorage: LocalStorageService,
private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      Username: [null],
      Passwrd: [null],
      remember: [true]
    });
  }

  signin():void{
    console.log(this.validateForm.get('Username').value,"USER")
    this.backService.checkUser(
      this.validateForm.get('Passwrd').value,
      this.validateForm.get('Username').value,
    ).subscribe(async(res)=>{
      console.log(res,"REEESSSS")
      //this.localStorage.set("token", JSON.parse(res).token)
      this.headerService.setIsSignedIn();
      if(JSON.parse(res).user=="a"){
        this.headerService.setAdmin()
        this.router.navigate(['./admin/dashboard'])
      }
      if(JSON.parse(res).user=="s"){
        this.headerService.setStaff()
        this.router.navigate(['./staff'])
      }
      if(JSON.parse(res).user=="u"){
        this.headerService.setUser()
        this.router.navigate(['./user/profile'])
      }
      console.log(res)})
    
    



  }

}
