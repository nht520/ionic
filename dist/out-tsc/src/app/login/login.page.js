import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BesurlService } from '../services/besurl.service';
import { StorageService } from '../services/storage.service';
import { AlertmodeService } from '../services/alertmode.service';
import Axios from 'axios';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, alert, besurl, storage) {
        this.router = router;
        this.alert = alert;
        this.besurl = besurl;
        this.storage = storage;
        this.username = "";
        this.userpassword = "";
        this.texmode = "";
        this.list = [
            {
                id: 1,
                title: "5555"
            }, {
                id: 2,
                title: "666"
            }
        ];
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    // js跳转
    LoginPage.prototype.logrout = function () {
        this.router.navigate(['/tab1']);
    };
    LoginPage.prototype.btserves = function () {
        var _this = this;
        var api = this.besurl.window.login;
        // const date:any = {
        //   params:{
        //     memberName:this.username,
        //     memberPassword:this.userpassword
        //   }
        // }
        if (this.username === '') {
            var texmode = "电话号码不能为空";
            this.alert.presentToast(texmode);
        }
        else if (this.username.length < 11) {
            console.log(this.username);
            var texmode = "电话号码输入错误";
            this.alert.presentToast(texmode);
        }
        else if (this.userpassword === '') {
            var texmode = "请输入密码";
            this.alert.presentToast(texmode);
        }
        else if (/^[\d\D]{6,12}$/.test(this.userpassword) === false) {
            var texmode = "密码在6-12位之间";
            this.alert.presentToast(texmode);
        }
        else {
            var date = new URLSearchParams();
            date.append("memberPhone", this.username);
            date.append("memberPassword", this.userpassword);
            Axios.post(api, date).then(function (res) {
                console.log(res);
                if (res.data.code === '200') {
                    var texmode = "登录成功";
                    _this.alert.presentToast(texmode);
                    // 将数据存在storage
                    _this.storage.set("user", res.data.data);
                    _this.router.navigate(['/app/tabs/tab1']);
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
        // console.log(this.besurl.window.login);
        // this.storage.set("list",this.list)
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AlertmodeService,
            BesurlService,
            StorageService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map