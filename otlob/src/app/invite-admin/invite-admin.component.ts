import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackService } from '../services/back.service';


@Component({
  selector: 'app-invite-admin',
  templateUrl: './invite-admin.component.html',
  styleUrls: ['./invite-admin.component.css']
})
export class InviteAdminComponent implements OnInit {
  invitationErr: boolean;
  invitationSuccess: boolean;
  errMessage: string;
  active = false;
  inviteMentorForm = new FormGroup({
    first: new FormControl('', [Validators.required]),
    last: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
   userName : new FormControl('', [Validators.required]),
  });

  constructor(private backService: BackService) { }

  ngOnInit() {
  }

  invite() {
    this.hideAlerts();
    if (this.inviteMentorForm.valid) {
      this.backService.inviteAdmin(this.inviteMentorForm.value.email,this.inviteMentorForm.value.first,
        this.inviteMentorForm.value.last,this.inviteMentorForm.value.userName,"123123").subscribe((res) => {
        this.invitationSuccess = true;
      }, (err) => {
        // this.setErrorMessage(err.json()['body']);
      
    })
  }}
  hideAlerts() {
    this.invitationErr = false;
    this.invitationSuccess = false;
   
  }
  setErrorMessage(message: string) {
    this.invitationErr = true;
    this.errMessage = message;
  }
  modalOpen(){
    this.active = true;
   
  }


}
