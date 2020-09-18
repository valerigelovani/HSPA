import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
   console.log(loginForm.value);
  // tslint:disable-next-line:align
  const token = this.authService.authUser(loginForm.value);
   if (token){
     localStorage.setItem('token', token.userName);
     this.alertify.success('თქვენ წარმატებით გაიარეთ ავტორიზაცია');
     this.router.navigate(['/']);
  }else{
     this.alertify.error('მომხმარებლის სახელი ან პაროლი არასწორია');
  }
  }
}
