import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from '../Services/loadcss.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/login/css/bootstrap.css');
    this.loadcssServices.loaddCss('assets/login/css/style.css');
  }

  ngOnInit(): void {
  }

}
