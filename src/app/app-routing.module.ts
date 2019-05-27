import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: './login/login.module#LoginPageModule'
   },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule'  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details/:aid', loadChildren: './tab1/details/details/details.module#DetailsPageModule' },
  { path: 'ordetils/:aid', loadChildren: './tab2/ordetils/ordetils.module#OrdetilsPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
