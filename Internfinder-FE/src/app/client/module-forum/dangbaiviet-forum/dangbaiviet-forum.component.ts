import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";

@Component({
  selector: 'app-dangbaiviet-forum',
  templateUrl: './dangbaiviet-forum.component.html',
  styleUrls: ['./dangbaiviet-forum.component.css']
})
export class DangbaivietForumComponent implements OnInit {

  constructor( private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loaddCss('assets/Client/forum-mockup-master/css/style.css');
    this.loadcssServices.loadScript('assets/Client/CSS/stylesMH.css');

  }
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  ngOnInit(): void {
  }

}
