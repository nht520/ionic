import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
var Tab4Page = /** @class */ (function () {
    function Tab4Page(storeage, router) {
        this.storeage = storeage;
        this.router = router;
    }
    Tab4Page.prototype.ngOnInit = function () {
    };
    Tab4Page.prototype.quit = function () {
        this.storeage.remove("user");
        this.router.navigate([""]);
    };
    Tab4Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab4',
            templateUrl: './tab4.page.html',
            styleUrls: ['./tab4.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService, Router])
    ], Tab4Page);
    return Tab4Page;
}());
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map