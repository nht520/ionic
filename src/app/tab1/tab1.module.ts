import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import{ SildesModule }from'../module/sildes/sildes.module';
import{ AlertModule }from'../module/alert/alert.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SildesModule,
    AlertModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
