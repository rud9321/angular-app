import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SysLoginComponent } from './index';
import { SysRegisterComponent } from './index';

@NgModule({
  declarations: [SysLoginComponent, SysRegisterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
