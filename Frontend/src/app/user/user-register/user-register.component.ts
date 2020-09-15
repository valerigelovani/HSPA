import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder,
              private  userService: UserServiceService,
              private alertify: AlertifyService
              ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.registerationForm = new FormGroup({
    // userName: new FormControl('Mark', Validators.required),
    // email: new FormControl(null, [Validators.required, Validators.email]),
    // password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    // confirmPassword: new FormControl(null, [Validators.required]),
    // mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegisterationForm();
  }
createRegisterationForm(){
  this.registerationForm = this.fb.group({
    userName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, Validators.required],
    mobile: [null, [Validators.required, Validators.maxLength(10)]]
  }, {validators: this.passwordMatchingValidator});
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
  this.userSubmitted = true;
  if (this.registerationForm.valid){
    // this.user = Object.assign(this.user, this.registerationForm.value);

    this.userService.addUser(this.userData());
    this.registerationForm.reset();
    this.userSubmitted = false;
    this.alertify.success('Congrats, you are successfully registered');
  }else{
    this.alertify.error('Kindly provide the required fields');
  }
}

userData(): User {
  return this.user = {
    userName: this.userName.value,
    email: this.email.value,
    password: this.password.value,
    mobile: this.mobile.value
  };
}

}
