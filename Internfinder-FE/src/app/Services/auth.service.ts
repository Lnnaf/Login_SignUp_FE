import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/public/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  login(obj: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: obj.username,
      password: obj.password
    }, this.httpOptions);
  }

  register(obj:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username:obj.username,
      password:obj.password,
      nameCompany:obj.name_company,
      address:obj.address_company,
      tax:obj.tax,
      website:obj.website,
      phone:obj.phone,
      nameContact:obj.contact,
      email:obj.email
    }, this.httpOptions);
  }

  verify(code:string): Observable<any> {
    console.log(code);
    return this.http.post(AUTH_API + 'verify', {
      code: code
    }, this.httpOptions);
  }

  verifyPassword(code: string): Observable<any> {
    return this.http.post(AUTH_API + 'verify-password', {
      code: code
    }, this.httpOptions);
  }

  resetPassword(username:string): Observable<any> {
    return this.http.post(AUTH_API + 'reset-password', {
      username: username,
    }, this.httpOptions);
  }

  doResetPassword(password: string, code: string): Observable<any> {
    return this.http.post(AUTH_API + 'do-reset-password', {
      password: password,
      code: code
    }, this.httpOptions);
  }
}
