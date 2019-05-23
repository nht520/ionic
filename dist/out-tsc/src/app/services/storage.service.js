import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
// ng g service services/storage
// app.module.ts 里面映入创建的服务  并且声明
// import { StorageService } from './services/storage.service';
// 在用到的组件里面 在引入一次 import { StorageService } from './services/storage.service';
// // 初始化 获取
// constructor( public storage:StorageService) {
//   console.log(    this.storage.get() )
// }
//# sourceMappingURL=storage.service.js.map