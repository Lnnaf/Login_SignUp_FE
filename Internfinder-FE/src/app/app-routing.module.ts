import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import {QuanlytaikhoanCreateComponent} from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import {QuanlytaikhoanEditComponent} from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import {QuanlybaidangIndexComponent} from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import {QuanlybaidangCreateComponent} from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';
import {QuanlymaucvIndexComponent} from './admin/quanlymau-cv/quanlymaucv-index/quanlymaucv-index.component';
import {QuanlymaucvCreateComponent} from './admin/quanlymau-cv/quanlymaucv-create/quanlymaucv-create.component';
import {QuanlymaucvDetailComponent} from './admin/quanlymau-cv/quanlymaucv-detail/quanlymaucv-detail.component';
import {ModuleCreateCvComponent} from './client/module-create-cv/module-create-cv.component';
import {PageComponent} from './client/page/page.component';
import {AdminComponent} from './admin/admin.component';
import {ClientComponent} from './client/client.component';
import {QuanlybaidangEditComponent} from './admin/quanlybaidang/quanlybaidang-edit/quanlybaidang-edit.component';
import {LoginComponent} from './login/login.component';
import {AdminLoginComponent} from './login/admin-login/admin-login.component';
import {ClientLoginComponent} from './login/client-login/client-login.component';
import {DangkysinhvienComponent} from './login/dangkysinhvien/dangkysinhvien.component';
import {DangkyNTTComponent} from './login/dangky-ntt/dangky-ntt.component';
import {CKEditorModule} from "ckeditor4-angular";
import {TrangchuForumComponent} from "./client/module-forum/trangchu-forum/trangchu-forum.component";
import {BaivietForumComponent} from "./client/module-forum/baiviet-forum/baiviet-forum.component";
import {DangbaivietForumComponent} from "./client/module-forum/dangbaiviet-forum/dangbaiviet-forum.component";
import {ModuleDangtuyendungComponent} from "./client/module-dangtuyendung/module-dangtuyendung.component";
import {ModuleXemvcNtdComponent} from "./client/module-xemvc-ntd/module-xemvc-ntd.component";
import {QuanlythongtinTaikhoanComponent} from "./client/quanlythongtin-taikhoan/quanlythongtin-taikhoan.component";

const routes: Routes = [

  {   path: 'admin', component: AdminComponent, children :
      [
        {path: 'quanlytaikhoan/index', component: QuanlytaikhoanIndexComponent},
        {path: 'quanlytaikhoan/create', component: QuanlytaikhoanCreateComponent},
        {path: 'quanlytaikhoan/edit/:id', component: QuanlytaikhoanEditComponent},
        {path: 'quanlybaidang/index', component: QuanlybaidangIndexComponent},
        {path: 'quanlybaidang/create', component: QuanlybaidangCreateComponent},
        {path: 'quanlybaidang/edit', component: QuanlybaidangEditComponent },
        {path: 'quanlymaucv/index', component: QuanlymaucvIndexComponent},
        {path: 'quanlymaucv/create', component: QuanlymaucvCreateComponent},
        {path: 'quanlymaucv/detail', component: QuanlymaucvDetailComponent},
      ]
  },
  {
    path: '', component: ClientComponent, children :
      [
        {path: '', component: PageComponent},
        {path: 'create_cv', component: ModuleCreateCvComponent  },
        {path: 'forum', component: TrangchuForumComponent},
        {path: 'baiviet', component: BaivietForumComponent},
        {path: 'dangbaichiase', component: DangbaivietForumComponent},
        {path: 'dangtuyendung', component: ModuleDangtuyendungComponent},
        {path: 'xemcv-ntd', component: ModuleXemvcNtdComponent},
        {path: 'quanlythongtin-taikhoan', component: QuanlythongtinTaikhoanComponent}
      ]
  },
  {
    path: 'login', component: LoginComponent, children :
      [
        {path: 'dangnhap/admin', component: AdminLoginComponent  },
        {path: 'dangnhap/client', component: ClientLoginComponent},
        {path: 'dangky/sinhvien', component: DangkysinhvienComponent},
        {path: 'dangky/nhatuyendung', component: DangkyNTTComponent},

      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CKEditorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
