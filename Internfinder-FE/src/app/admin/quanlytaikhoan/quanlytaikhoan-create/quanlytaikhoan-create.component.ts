import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountClass} from "../../../model/Account.class";
import {AccountService} from "../../../Services/Account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-quanlytaikhoan-create',
  templateUrl: './quanlytaikhoan-create.component.html',
  styleUrls: ['./quanlytaikhoan-create.component.css']
})
export class QuanlytaikhoanCreateComponent implements OnInit {
  constructor(private  fb: FormBuilder, private  accountservice: AccountService, private  route: ActivatedRoute, private  router: Router) {
  }
// @ts-ignore
  public  sub: Subscription;
  // @ts-ignore
  account: AccountClass;
  create(){
    this.sub = this.accountservice.create(this.account).subscribe(data=>{
      console.log(alert("Thêm mới Thành Công"));
      this.router.navigate(['/admin/quanlytaikhoan/index']);
    })

  }

  onSubmit() {
    this.create();
    // console.log(this.contactForm.value);
  }
  contactForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.maxLength(45)]),
    passWord: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    createDate: new FormControl(''),
    status: new  FormControl(''),
    roleID : new FormControl('',[Validators.required]),
    fullName:new  FormControl(''),
    brithday:new  FormControl(''),
    address:new  FormControl(''),
    email:new  FormControl(''),
    companyName:new  FormControl(''),
    taxtCode:new  FormControl(''),
    link:new  FormControl(''),
    nameContact:new  FormControl(''),
    sex:new  FormControl('')
  });
  ngOnInit(): void {
    // @ts-ignore
    this.account = new AccountClass();

  }

}

