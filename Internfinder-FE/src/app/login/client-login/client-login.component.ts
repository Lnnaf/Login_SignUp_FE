import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../../Services/token-storage.service";
import {AuthService} from "../../Services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  formLogin: FormGroup;
  username: string | undefined;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  token: string | undefined;
  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute,) {

    //define form
    this.formLogin = this.formBuild.group({
        username: [''],
        password: [''],
        remember_me: ['']
      }
    );

    //  check status login or not by Trang
    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
      if(this.formLogin.value.remember_me ===""){
        this.formLogin.value.remeber_me = false;
      }
    this.authService.login(this.formLogin.value).subscribe(
      data => {
          if (this.formLogin.value.remember_me) {
            this.tokenStorageService.saveTokenLocal(data.accessToken);
            this.tokenStorageService.saveUserLocal(data);
          } else {
            this.tokenStorageService.saveTokenSession(data.accessToken);
            this.tokenStorageService.saveUserLocal(data);
          }
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.username = this.tokenStorageService.getUser().username;
          this.roles = this.tokenStorageService.getUser().roles;
          this.formLogin.reset();
          this.router.navigateByUrl("");
        this.toastr.success("", "????ng nh???p th??nh c??ng", {
          timeOut: 3000,
          extendedTimeOut: 1500
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error("Sai t??n ????ng nh???p ho???c m???t kh???u ho???c t??i kho???n ch??a ???????c k??ch ho???t", "????ng nh???p th???t b???i: ", {
          timeOut: 3000,
          extendedTimeOut: 1500
        });
      }
    );
  }

}
