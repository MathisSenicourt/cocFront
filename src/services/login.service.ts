import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../types/LoginResponse";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string) {
    const requestBody = {
      login,
      password
    };
    return this.http.post<LoginResponse>('http://localhost:3000/coc/login', requestBody);
  }
}
