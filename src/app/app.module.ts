import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// ionic 打包app以后配置启动画面以及导航条的服务
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// 引入路由配置文件
import { AppRoutingModule } from './app-routing.module';
// 引入根组件
import { AppComponent } from './app.component';
// 引入frommodul 双相绑定
import { FormsModule } from '@angular/forms';
// 引入服务
import { BesurlService } from './services/besurl.service';
import { StorageService } from './services/storage.service';
import { AlertmodeService } from './services/alertmode.service';
@NgModule({
  declarations: [AppComponent], /*引入根组件 */
  entryComponents: [], // 配置不会在模版中使用的组件
  imports: [ // 映入模块 和自定义模块
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [ //配置服务
    StatusBar,
    SplashScreen,
    BesurlService,
    StorageService,
    FormsModule,
    AlertmodeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
