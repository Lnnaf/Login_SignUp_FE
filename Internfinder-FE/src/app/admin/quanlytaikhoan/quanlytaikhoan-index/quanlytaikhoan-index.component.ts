import { Component, OnInit } from '@angular/core';
import {AccountClass} from "../../../model/Account.class";
import {AccountService} from "../../../Services/Account.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-quanlytaikhoan-index',
  templateUrl: './quanlytaikhoan-index.component.html',
  styleUrls: ['./quanlytaikhoan-index.component.css']
})
export class QuanlytaikhoanIndexComponent implements OnInit {

  items = []
  // @ts-ignore
  pageOfItems : Array<any>
  // @ts-ignore
  private  Subscription: Subscription;
  // @ts-ignore
  public quanlytaikhoans: AccountClass[];
  // @ts-ignore
  public  account: AccountClass;
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  ngOnInit(): void {
    this.getAllQuanlytaikhoan();
    // @ts-ignore
    this.account = new AccountClass();
    // @ts-ignore
    this.items = Array(5).fill(0).map((x, i) => ({ id: (i + 1), account: `item ${i + 1}`}));
  }
  constructor(private quanlytaikhoanService: AccountService, private  router: Router) {
  }
  // delete data
  Ondelete(idAccount: number){
    this.Subscription = this.quanlytaikhoanService.delete(idAccount).subscribe(data=>{
    })
    console.log(alert("Xóa Thành Công !"))
    this.router.navigate(['/admin/quanlytaikhoan/index']);
  }
  reloadData() {
    this.quanlytaikhoanService.getAll().subscribe(data => {
      this.quanlytaikhoans = data;
    });
  }
  //index data
  getAllQuanlytaikhoan(){
    this.Subscription = this.quanlytaikhoanService.getAll().subscribe(data=>{
      this.quanlytaikhoans = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  //get id
  OnEdit(idaccount: number){
    this.router.navigate(['/admin/quanlytaikhoan/edit',idaccount])
  }

}
