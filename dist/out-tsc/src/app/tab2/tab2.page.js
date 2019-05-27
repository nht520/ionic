import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BesurlService } from '../services/besurl.service';
import Axios from 'axios';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(besurl) {
        this.besurl = besurl;
        this.list = [];
        this.orderlist = [];
    }
    ;
    Tab2Page.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Async operation has ended');
        var api = this.besurl.window.indent;
        setTimeout(function () {
            Axios.get(api).then(function (res) {
                for (var i = 0; i <= res.data.records.length; i++) {
                    var list = JSON.parse(res.data.records[i].orderGoods);
                    _this.orderlist.push(list);
                }
                ;
                console.log(_this.orderlist);
            }).catch(function (err) {
                console.log(err);
            });
            console.log('Async operation has ended');
            event.target.complete();
        }, 500);
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BesurlService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map