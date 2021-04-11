import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../Services/token-storage.service";
import {AuthService} from "../../Services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dangkysinhvien',
  templateUrl: './dangkysinhvien.component.html',
  styleUrls: ['./dangkysinhvien.component.css']
})
export class DangkysinhvienComponent implements OnInit {
  formRegStudent: FormGroup;
  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
    //define form
    this.formRegStudent = this.formBuild.group({
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
        re_password:['',[Validators.required]],
        address:['',[Validators.required]],
        phone:['',[Validators.required]],
        email:['',[Validators.required]]
      }
    );
  }

  validation_messages = {
    'username': [
      {type: 'required',message: 'Trường này không được để trống!'},

    ],
    'password': [
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    're_password':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'address':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'phone':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ],
    'email':[
      {type: 'required',message: 'Trường này không được để trống!'},
    ]
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formRegStudent.value);
    if(this.formRegStudent.invalid){
      this.toastr.warning("Form phải được điền đúng định dạng","Warning:",{
        timeOut: 1500,
        extendedTimeOut:1500
      })
    }else {
      if(this.checkPasswords(this.formRegStudent)){
        this.toastr.warning("Mật khẩu và xác nhận mật khẩu không giống nhau","Warning:",{
          timeOut: 1500,
          extendedTimeOut:1500
        })
      }else {
        this.authService.register(this.formRegStudent.value).subscribe(
          data => {
            this.toastr.success(data.message, "Hoàn tất: ", {
              timeOut: 3500,
              extendedTimeOut: 1500
            });
            this.router.navigateByUrl("/login/dangnhap/client",);

          },
          err => {
            this.toastr.error(err.error.message, 'Lỗi: ', {
              timeOut: 1500,
              extendedTimeOut: 1500
            });
          }
        );
      }

    }
  }

  //Check confirm password is match ?
  checkPasswords(formLogin: FormGroup) { // here we have the 'passwords' group
    const password = formLogin.get('password')!.value;
    const confirmPassword = formLogin.get('re_password')!.value;
    return password === confirmPassword ? null : { notSame: true }
  }
}
