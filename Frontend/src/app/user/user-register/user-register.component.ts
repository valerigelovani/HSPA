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
    });
  }
// tslint:disable-next-line:typedef
onSubmit(){
  console.log(this.registerationForm);
}
}
