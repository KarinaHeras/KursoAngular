import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user = {};


  constructor(private authservice: AuthService, private router: Router) { }

ngOnInit(): void {
  }
//
signUp() {
 this.authservice.signUp(this.user)
  .subscribe(
    res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/private']);
    },
    err => console.log(err)

  );

  }
}
