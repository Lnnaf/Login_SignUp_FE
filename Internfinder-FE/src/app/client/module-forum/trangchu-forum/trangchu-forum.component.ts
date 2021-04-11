import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";

@Component({
  selector: 'app-trangchu-forum',
  templateUrl: './trangchu-forum.component.html',
  styleUrls: ['./trangchu-forum.component.css']
})
export class TrangchuForumComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loaddCss('assets/Client/forum-mockup-master/css/style.css');
    this.loadcssServices.loadScript('assets/Client/CSS/stylesMH.css');

  }

  ngOnInit(): void {
  }

}
