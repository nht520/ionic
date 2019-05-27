import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.flag = 'home';
    }
    TabsPage.prototype.change = function (event) {
        this.flag = event.detail.tab;
    };
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        })
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map