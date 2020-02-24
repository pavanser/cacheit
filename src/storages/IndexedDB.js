"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IndexedDBStore_1 = __importDefault(require("stores/IndexedDBStore"));
var IndexedDB = /** @class */ (function () {
    function IndexedDB() {
    }
    IndexedDB.prototype.createStore = function () {
        return new IndexedDBStore_1.default();
    };
    IndexedDB.prototype.removeStore = function () {
    };
    return IndexedDB;
}());
exports.default = IndexedDB;
