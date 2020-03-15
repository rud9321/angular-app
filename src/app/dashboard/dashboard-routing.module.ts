import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent, IndexComponent} from './index';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'about', component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
