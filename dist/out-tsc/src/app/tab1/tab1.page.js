import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { BesurlService } from '../services/besurl.service';
import { LoddingService } from '../services/lodding.service';
import Axios from 'axios';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(storage, lodding, besurl, router) {
        this.storage = storage;
        this.lodding = lodding;
        this.besurl = besurl;
        this.router = router;
        this.homelist = [];
        // 给子组件传值
        this.list = [
            {
                id: 0,
                imgurl: "assets/slide03.gif"
            },
            {
                id: 1,
                imgurl: "assets/slide01.png"
            },
            {
                id: 2,
                imgurl: "assets/slide02.jpg"
            },
            {
                id: 2,
                imgurl: "assets/123.png"
            }
        ];
        this.text = "是否确认删除？";
        // 给子组件传第方法
        this.sbmtButton = "presentAlertConfirm";
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.username();
        this.meal();
    };
    Tab1Page.prototype.username = function () {
        // 判断用户是否登录
        var username = this.storage.get("user");
        console.log(username);
        if (username === null || username === undefined) {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate(['/app/tabs/tab1']);
        }
    };
    // 套餐列表
    Tab1Page.prototype.meal = function () {
        var _this = this;
        var api = this.besurl.window.meal;
        Axios.get(api).then(function (res) {
            console.log(res);
            _this.lodding.presentLoading();
            _this.homelist = res.data.records;
        }).catch(function (err) {
            console.log(err);
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService, LoddingService,
            BesurlService,
            Router])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map