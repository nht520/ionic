import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SildesComponent = /** @class */ (function () {
    function SildesComponent() {
        this.imgUrl = 'https://www.baidu.com/img/baidu_jgylogo3.gif';
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    SildesComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SildesComponent.prototype, "list", void 0);
    SildesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sildes',
            templateUrl: './sildes.component.html',
            styleUrls: ['./sildes.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SildesComponent);
    return SildesComponent;
}());
export { SildesComponent };
//# sourceMappingURL=sildes.component.js.map