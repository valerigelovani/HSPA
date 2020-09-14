import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    userName: new FormControl(),
    });
  }
// tslint:disable-next-line:typedef
onSubmit(){
  console.log(this.registerationForm);
}
}
