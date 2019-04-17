import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib_1.__decorate([
        NgModule({
            declarations: [NavBarComponent],
            imports: [CommonModule, RouterModule],
            exports: [NavBarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());
export { NavbarModule };
//# sourceMappingURL=navbar.module.js.map