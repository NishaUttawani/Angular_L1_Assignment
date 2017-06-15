"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var USERS = [
    new User(1, 'John'),
    new User(2, 'Bob'),
    new User(3, 'George')
];
var usersPromise = Promise.resolve(USERS);
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    UserService.prototype.addUser = function (newUser) {
        usersPromise.then(function (users) { return users.push(newUser); });
        console.log(USERS);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map