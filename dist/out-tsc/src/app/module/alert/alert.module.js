import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';
import { IonicModule } from '@ionic/angular';
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AlertComponent
            ],
            imports: [
                CommonModule,
                IonicModule,
            ],
            exports: [
                AlertComponent
            ]
        })
    ], AlertModule);
    return AlertModule;
}());
export { AlertModule };
//# sourceMappingURL=alert.module.js.map