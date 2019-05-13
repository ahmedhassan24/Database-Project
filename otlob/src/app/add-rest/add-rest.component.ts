import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackService } from '../services/back.service';

@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.component.html',
  styleUrls: ['./add-rest.component.css']
})
export class AddRestComponent implements OnInit {
  invitationErr: boolean;
  invitationSuccess: boolean;
  errMessage: string;
  active = false;
  inviteMentorForm = new FormGroup({
    Rname: new FormControl('', [Validators.required]),
    Hotline: new FormControl('', [Validators.required]),
    start_at: new FormControl('', [Validators.required]),
    end_at : new FormControl('', [Validators.required]),
    cuisine : new FormControl('', [Validators.required]),
  });
  
  constructor(private backService: BackService) { }

  ngOnInit() {
  }
  invite() {
    this.hideAlerts();
    if (this.inviteMentorForm.valid) {
      this.backService.addRest(this.inviteMentorForm.value.Rname,this.inviteMentorForm.value.Hotline,
        this.inviteMentorForm.value.start_at,this.inviteMentorForm.value.end_at,this.inviteMentorForm.value.cuisine).subscribe((res) => {
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
