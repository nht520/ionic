import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { AlertmodeModule } from '../module/alertmode/alertmode.module'
const routes: Routes = [
  {
    path: '',
    component: LoginPage,
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
  declarations: [
    LoginPage,
  ],
  exports:[
    LoginPage,
  ],
})
export class LoginPageModule {}
