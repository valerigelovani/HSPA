import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerationForm = new FormGroup({
    userName: new FormControl('Mark', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
  }


passwordMatchingValidator(fg: FormGroup): Validators {
return fg.get('password').value === fg.get('confirmPassword').value ? null :
 { notmatched: true };
}

// Getter Methods
get userName() {
  return this.registerationForm.get('userName') as FormControl;
}

get email() {
  return this.registerationForm.get('email') as FormControl;
}

get password() {
  return this.registerationForm.get('password') as FormControl;
}

get confirmPassword() {
  return this.registerationForm.get('confirmPassword') as FormControl;
}

get mobile() {
  return this.registerationForm.get('mobile') as FormControl;
}

onSubmit(){
  console.log(this.registerationForm);
}
}
