import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{BackService} from '../services/back.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  validateForm: FormGroup;

  submitForm(): void {
  for (const i in this.validateForm.controls) {
    this.validateForm.controls[i].markAsDirty();
    this.validateForm.controls[i].updateValueAndValidity();
  }
}

// updateConfirmValidator(): void {
//   /** wait for refresh value */
//   Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
// }

confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { required: true };
  } else if (control.value !== this.validateForm.controls.password.value) {
    return { confirm: true, error: true };
  }
  return {};
};

// getCaptcha(e: MouseEvent): void {
//   e.preventDefault();
// }

constructor(private fb: FormBuilder,
private backService: BackService) {}

ngOnInit(): void {
  console.log("SIGNUP")
  this.validateForm = this.fb.group({
    Email: [null],
    Password: [null],
    PhoneNo: [null],
    Username:[null],
    Firstname: [null],
    Lastname: [null],
    Address: [null],
    Birthdate: [null],
    AcctType:[null]
  });
}

  signup(): void
  {
    console.log("HERE")
    this.backService.insertUser(
      this.validateForm.get('Firstname').value,
      this.validateForm.get('Lastname').value,
      this.validateForm.get('Email').value,
      this.validateForm.get('PhoneNo').value,
      this.validateForm.get('Address').value,
      this.validateForm.get('Password').value,
      this.validateForm.get('Username').value,
      this.validateForm.get('Birthdate').value,
      this.validateForm.get('AcctType').value
    ).subscribe(async(res)=>{console.log(res)})
  }
}