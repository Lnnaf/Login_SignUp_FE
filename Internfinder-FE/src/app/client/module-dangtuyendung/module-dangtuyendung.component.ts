import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";

@Component({
  selector: 'app-module-dangtuyendung',
  templateUrl: './module-dangtuyendung.component.html',
  styleUrls: ['./module-dangtuyendung.component.css']
})
export class ModuleDangtuyendungComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/CCS/bootstrap.css');
    this.loadcssServices.loaddCss('assets/Client/CCS/stylesMH.css');

  }

  ngOnInit(): void {
  }

}
