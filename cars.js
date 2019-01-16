"use strict";
exports.__esModule = true;
exports.count = 0;
var Car = /** @class */ (function () {
    function Car(model, year) {
        this._model = model;
        this._year = year;
    }
    Object.defineProperty(Car.prototype, "model", {
        get: function () { return this._model; },
        set: function (v) { this._model = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () { return this._year; },
        set: function (v) { this._year = v; },
        enumerable: true,
        configurable: true
    });
    Car.prototype.getInfo = function () {
        return this._model + " " + this._year;
    };
    return Car;
}());
exports.Car = Car;
