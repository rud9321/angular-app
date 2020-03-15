import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysLoginComponent } from './sys-login/sys-login.component';

const routes: Routes = [
  {
    path: 'login', component: SysLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
