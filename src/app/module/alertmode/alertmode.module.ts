import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入公用模块需要引入 import { IonicModule } from '@ionic/angular';
//   imports: [IonicModule],
import { IonicModule } from '@ionic/angular';
import { AlertmodeComponent } from '../alertmode/alertmode.component';
@NgModule({
  declarations: [
    AlertmodeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    AlertmodeComponent
  ]
})
export class AlertmodeModule { }
