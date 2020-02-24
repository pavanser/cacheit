"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stores_1 = require("stores");
var SessionStorage = /** @class */ (function () {
    function SessionStorage() {
    }
    SessionStorage.prototype.createStore = function () {
        return new stores_1.SessionStorageStore();
    };
    SessionStorage.prototype.removeStore = function () {
    };
    return SessionStorage;
}());
exports.default = SessionStorage;
