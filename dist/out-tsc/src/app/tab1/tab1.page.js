import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        // 给子组件传值
        this.list = [
            {
                id: 0,
                imgurl: "assets/slide02.jpg"
            },
            {
                id: 1,
                imgurl: "assets/slide01.png"
            },
            {
                id: 2,
                imgurl: "assets/slide03.gif"
            }
        ];
        this.text = "是否确认删除？";
        // 给子组件传第方法
        this.sbmtButton = "presentAlertConfirm";
    }
    Tab1Page.prototype.ngOnInit = function () { };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map