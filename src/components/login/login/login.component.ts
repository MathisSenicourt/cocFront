import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import {LoginResponse} from "../../../types/LoginResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValue: string = '';
  passwordValue: string = '';

  constructor(private loginService: LoginService) { }

  login(): void {
    if ((this.loginValue.trim() !== '') && (this.passwordValue.trim() !== '')) {
      this.loginService.login(this.loginValue, this.passwordValue)
        .subscribe((response: LoginResponse) => {
          console.log(response);
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
        }, (error) => {
          console.error(error);
        });
    } else {
      console.log('Veuillez entrer un nom d\'utilisateur.');
    }
  }

}
