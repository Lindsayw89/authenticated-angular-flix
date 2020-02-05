import { Component, OnInit, Input } from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';


@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})

export class SignUpLoginComponent implements OnInit {
user={username:'',
password:''}
  constructor(private authService : AuthServiceService) { }

  ngOnInit() {
  }
  async authenticate(){
  
      await this.authService.signup()
      await this.authService.login(this.user);
    }

}

