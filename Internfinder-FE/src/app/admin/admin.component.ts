import { Component, OnInit } from '@angular/core';
import { LoadcssServices} from '../Services/loadcss.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private  loadcssServices: LoadcssServices) {
    this.loadcssServices.loaddCss('assets/admin/css/sb-admin-2.min.css');
    this.loadcssServices.loaddCss('assets/admin/vendor/fontawesome-free/css/all.min.css');
    this.loadcssServices.loaddCss('assets/admin/vendor/datatables/dataTables.bootstrap4.min.css');
    this.loadcssServices.loaddCss('assets/admin/css/switch-btn.css');
    this.loadcssServices.loaddCss('assets/admin/css/choosetemplate.min.css')
    setTimeout(() => {
      this.loadcssServices.loadScript('assets/admin/js/sb-admin-2.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/jquery/jquery.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js');
      this.loadcssServices.loadScript('assets/admin/vendor/jquery-easing/jquery.easing.min.js');
        // this.loadcssServices.loadScript('assets/admin/vendor/datatables/jquery.dataTables.min.js');
        // this.loadcssServices.loadScript('assets/admin/vendor/datatables/dataTables.bootstrap4.min.js');
        // this.loadcssServices.loadScript('assets/admin/js/demo/datatables-demo.js');
    }, 300);
  }

  ngOnInit(): void {
  }

}
