"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageStore_1 = __importDefault(require("stores/LocalStorageStore"));
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.createStore = function () {
        return new LocalStorageStore_1.default();
    };
    LocalStorage.prototype.removeStore = function () { };
    return LocalStorage;
}());
exports.default = LocalStorage;
