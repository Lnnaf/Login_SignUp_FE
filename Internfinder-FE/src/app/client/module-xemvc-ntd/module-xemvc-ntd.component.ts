import { Component, OnInit } from '@angular/core';
import {Xemcv} from "../../model/Xemcv";
import {XemcvService} from "../../Services/xemcvService";

@Component({
  selector: 'app-module-xemvc-ntd',
  templateUrl: './module-xemvc-ntd.component.html',
  styleUrls: ['./module-xemvc-ntd.component.css']
})
export class ModuleXemvcNtdComponent implements OnInit {
  title = 'xemcv';
  xemcv: Xemcv[];
  xemcsService = XemcvService;
  constructor() {
    this.xemcv = this.xemcsService.getXemCV();
  }
  ngOnInit(): void {
  }

}
