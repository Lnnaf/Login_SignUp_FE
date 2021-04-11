import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AccountService} from "../../Services/Account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AccountClass} from "../../model/Account.class";

@Component({
  selector: 'app-quanlythongtin-taikhoan',
  templateUrl: './quanlythongtin-taikhoan.component.html',
  styleUrls: ['./quanlythongtin-taikhoan.component.css']
})
export class QuanlythongtinTaikhoanComponent implements OnInit {

  constructor(private  fb: FormBuilder, private  accountservice: AccountService, private  activatedRouteService: ActivatedRoute, private  router: Router) {
  }
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public  sub: Subscription;
  // @ts-ignore
  public  subpram: Subscription;
  // @ts-ignore
  account: AccountClass=new AccountClass();
  // @ts-ignore
  activateRouteService: ActivatedRoute;

  ngOnInit(): void {
    // @ts-ignore
    this.id=this.activatedRouteService.snapshot.params['id'];
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.account=data
      console.log(data)
    },error => console.log(error))
  }
  OnEdit(){
    this.accountservice.edit(this.id,this.account).subscribe(data=>{
      console.log(data);
      // this.router.navigate(['list']);
      console.log(alert("Cập nhật thành công !"))
      this.router.navigate(['/quanlythongtin-taikhoan']);
    },error => console.log(error));
  }
}
