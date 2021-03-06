import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { AlertmodeModule } from '../module/alertmode/alertmode.module';
const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertmodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage],
  exports:[
    RegisterPage
  ]
})
export class RegisterPageModule {}
