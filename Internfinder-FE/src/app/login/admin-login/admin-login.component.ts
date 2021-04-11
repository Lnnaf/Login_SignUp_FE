import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../Services/auth.service";
import {TokenStorageService} from "../../Services/token-storage.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
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
    console.log(this.formLogin.value);
    this.authService.login(this.formLogin.value).subscribe(
      data => {
        if(data.roles.includes("ROLE_ADMIN")){
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
        }else{
          this.toastr.error("Bạn không phải là quản trị viên","Lỗi xác thực")
        }

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error("Sai tên đăng nhập hoặc mật khẩu hoặc tài khoản chưa được kích hoạt", "Đăng nhập thất bại: ", {
          timeOut: 3000,
          extendedTimeOut: 1500
        });
      }
    );
  }
}
