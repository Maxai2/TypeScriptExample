"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var cars_1 = require("./cars");
// import counter = require('./cars');
var car1 = new cars_1.Car('model 1', 1990);
console.log(car1.getInfo());
cars_1.count++;
console.log(cars_1.count);
//-----------------------------------------------------
console.log('hello, world!');
var a;
var b;
var c = 45;
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 45; }
    return num1 + num2 + num3;
}
var mult = function (num1, num2) { return num1 * num2; };
console.log(add(1, 5));
console.log(add(1, 5, 12));
console.log(mult(1, 5));
var User = /** @class */ (function () {
    function User(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () { return this._name; },
        set: function (n) { this._name = n; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () { return this._age; },
        set: function (a) { this._age = a; },
        enumerable: true,
        configurable: true
    });
    User.prototype.getInfo = function () {
        //return this._id + ') ' + this._name + ' ' + this.age;
        return this._id + ") " + this._name + " " + this._age;
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, age, group) {
        var _this = _super.call(this, id, name, age) || this;
        _this._group = group;
        return _this;
    }
    Object.defineProperty(Student.prototype, "group", {
        get: function () { return this._group; },
        set: function (v) { this._group = v; },
        enumerable: true,
        configurable: true
    });
    Student.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", " + this._group;
    };
    Student.prototype.study = function () {
        return this._name + " is studing";
    };
    return Student;
}(User));
var user1 = new User(1, 'Qwerty', 24);
var stud = new Student(1, 'ASDFG', 56, 'FSDM-1711');
//let stud: User = new Student(1, 'ASDFG', 56, 'FSDM-1711');
console.log(user1.getInfo());
console.log(stud.getInfo() + ' ' + stud.study());
//console.log(stud.getInfo() + ' ' + (stud as User).study());
//console.log(stud.getInfo() + ' ' + <User>stud.study());
