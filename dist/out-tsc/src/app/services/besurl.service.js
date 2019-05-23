import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BesurlService = /** @class */ (function () {
    function BesurlService() {
        // api = 'http://wx.bomao.xyz:8080/distributor';
        this.api = 'http://wx.bomao.xyz:8181/distributor';
        this.window = {
            AXIOS_TIMEOUT: 10000,
            login: this.api + "/distributor/member/login",
            findById: this.api + "/distributor/member/findById",
            register: this.api + '/distributor/member/updatePass',
            mcMembers: this.api + '/distributor/mcMembers/findById',
            //我的库存
            getBoxNum: this.api + "/distributor/stock/getBoxNum",
            //订货订单
            stockLog: this.api + '/distributor/stockLog',
            //库存
            stock: this.api + '/distributor/stock',
            //  套餐
            meal: this.api + "/distributor/meal",
            mealDts: this.api + "/distributor/meal/findById?",
        };
    }
    BesurlService.prototype.get = function () {
        console.log("9999999999");
    };
    BesurlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BesurlService);
    return BesurlService;
}());
export { BesurlService };
//# sourceMappingURL=besurl.service.js.map