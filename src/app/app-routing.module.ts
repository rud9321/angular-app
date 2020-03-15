import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { IndexComponent } from './dashboard';

const routes: Routes = [
  {
    path: '', redirectTo: 'asd', pathMatch: 'full'
  },
  {
    path: 'asd', component: IndexComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './dashboard/dashboard.module#DashboardModule'
  //   }
  // ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
    // () => import('./admin/admin.module').then(_ => _.AdminModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
