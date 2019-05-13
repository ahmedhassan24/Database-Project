import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

public isSignedIn = new BehaviorSubject(false)
public admin = new BehaviorSubject(false)
public user = new BehaviorSubject(false)
public staff = new BehaviorSubject(false)

  constructor() { }

  setIsSignedIn(){
    this.isSignedIn.next(true)
  }
  setAdmin(){
    this.admin.next(true)
  }
  setUser(){
    this.user.next(true)
  }
  setStaff(){
    this.staff.next(true)
  }
  signOut(){
    this.isSignedIn.next(false)
    this.staff.next(false)
    this.user.next(false)
    this.admin.next(false)  }
}
