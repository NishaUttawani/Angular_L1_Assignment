"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.route.params
            .switchMap(function (params) {
            return _this.service.getUsers();
        });
        console.log(this.users);
    };
    UserComponent.prototype.addUser = function () {
        var newUser = {
            name: this.name,
            id: 8
        };
        this.service.addUser(newUser);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        template: "<h2>Users</h2>\n              <form class=\"well\" (submit)=\"addUser()\">\n                <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter name\">\n                </div>\n              </form>\n             <ul class=\"items\">\n               <li *ngFor=\"let user of users | async\"\n                 (click)=\"onSelect(hero)\">\n                 <span class=\"badge\">{{ user.id }}</span> {{ user.name }}\n               </li>\n             </ul>"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map