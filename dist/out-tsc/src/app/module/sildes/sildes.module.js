import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入公用模块需要引入 import { IonicModule } from '@ionic/angular';
//   imports: [IonicModule],
import { IonicModule } from '@ionic/angular';
import { SildesComponent } from '../sildes/sildes.component';
var SildesModule = /** @class */ (function () {
    function SildesModule() {
    }
    SildesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SildesComponent
            ],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [
                SildesComponent
            ]
        })
    ], SildesModule);
    return SildesModule;
}());
export { SildesModule };
//# sourceMappingURL=sildes.module.js.map