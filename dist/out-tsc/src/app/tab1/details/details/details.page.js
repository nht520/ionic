import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// 获取git传值 ，首先引入import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BesurlService } from '../../../services/besurl.service';
import Axios from 'axios';
var DetailsPage = /** @class */ (function () {
    function DetailsPage(besurl, route) {
        this.besurl = besurl;
        this.route = route;
        this.detailsId = '';
        this.detaslist = [];
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
    }
    DetailsPage.prototype.ngOnInit = function () {
        this.parmsid();
    };
    DetailsPage.prototype.parmsid = function () {
        var _this = this;
        // 获取动态路由传值
        this.route.params.subscribe(function (data) {
            console.log(data.aid + "路由");
            _this.detailsId = data.aid;
        });
        var api = this.besurl.window.mealDts;
        var date = {
            params: {
                id: this.detailsId,
            }
        };
        Axios.get(api, date).then(function (res) {
            console.log(res);
            _this.detaslist = res.data.data;
            // 字符串截取
            // const str=res.data.data.mealWheel;
            // console.log("原字符串:",str)
            // this.list=str.split(',')
            // console.log("转成的数组:",this.list)
        }).catch(function (err) {
            console.log(err);
        });
    };
    DetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-details',
            templateUrl: './details.page.html',
            styleUrls: ['./details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [BesurlService,
            ActivatedRoute])
    ], DetailsPage);
    return DetailsPage;
}());
export { DetailsPage };
//# sourceMappingURL=details.page.js.map