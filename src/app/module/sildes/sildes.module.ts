import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入公用模块需要引入 import { IonicModule } from '@ionic/angular';
//   imports: [IonicModule],
import { IonicModule } from '@ionic/angular';
import { SildesComponent } from '../sildes/sildes.component';
@NgModule({
  declarations: [
    SildesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    SildesComponent
  ]
})
export class SildesModule { }
