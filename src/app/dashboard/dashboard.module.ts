import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent, IndexComponent} from './index';

import { DashboardRoutingModule } from './dashboard-routing.module';
@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
