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
            mealDts: this.api + "/distributor/meal/findById",
            //自己发货订单
            indent: this.api + "/distributor/order",
            update: this.api + "/distributor/order/update",
            //后台发货订单
            deliver: this.api + "/distributor/order/deliver",
            //分销订单
            subordinate: this.api + "/distributor/subordinate",
            //  经销商用户
            distname: this.api + "/distributor/member",
            //地址
            // 省
            getProvince: this.api + "/distributor/systemAddress/getProvince",
            //市province
            getCity: this.api + "/distributor/systemAddress/getCity",
            //区city
            getCounty: this.api + "/distributor/systemAddress/getCounty",
            //添加地址
            addressadd: this.api + "/distributor/address",
            //  查询地址邮费
            findCost: this.api + "/distributor/addressCost",
            //  修改地址邮费
            delupdate: this.api + "/distributor/addressCost/update",
            //  修改地址
            adsupdate: this.api + "/distributor/address/update",
            //查询所有会员
            hopMember: this.api + "/distributor/shopMember"
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