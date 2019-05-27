import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        loadChildren: './login/login.module#LoginPageModule'
    },
    { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
    { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
    { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'details/:aid', loadChildren: './tab1/details/details/details.module#DetailsPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map