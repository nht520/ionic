import * as tslib_1 from "tslib";
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
import { LoddingService } from './services/lodding.service';
// 打包空白需要LocationStrategy, HashLocationStrategy 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule, IonicModule.forRoot(), AppRoutingModule
            ],
            providers: [
                StatusBar,
                SplashScreen,
                BesurlService,
                StorageService,
                FormsModule,
                AlertmodeService,
                LoddingService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                { provide: LocationStrategy, useClass: HashLocationStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map