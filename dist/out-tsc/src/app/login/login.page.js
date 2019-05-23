import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BesurlService } from '../services/besurl.service';
import { StorageService } from '../services/storage.service';
import { AlertmodeService } from '../services/alertmode.service';
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
        var api = this.besurl.window.login;
        // const date:any = {
        //   params:{
        //     memberName:this.username,
        //     memberPassword:this.userpassword
        //   }
        // }
        // const date = new URLSearchParams();
        //       date.append("memberPhone",this.username);
        //       date.append("memberPassword",this.userpassword);
        // Axios.post(api,date).then((res)=>{
        //   console.log(res)
        //   // const texmode = res.data.msg;
        //   // this.alert.presentAlertConfirm(texmode);
        //   // this.alert.presentToast(texmode);
        // }).catch((err)=>{
        //   console.log(err)
        // })
        if (this.username === null || this.username === undefined) {
            // const texmode = "电话号码不能为空";
            // this.alert.presentToast();
            console.log("11");
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