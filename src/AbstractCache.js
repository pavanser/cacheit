"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorage_1 = __importDefault(require("storages/LocalStorage"));
var IndexedDB_1 = __importDefault(require("storages/IndexedDB"));
var SessionStorage_1 = __importDefault(require("storages/SessionStorage"));
var AbstractCache = /** @class */ (function () {
    function AbstractCache() {
    }
    AbstractCache.defineStorageType = function () {
        if (window.indexedDB) {
            return new IndexedDB_1.default();
        }
        if (window.sessionStorage) {
            return new SessionStorage_1.default();
        }
        return new LocalStorage_1.default();
    };
    return AbstractCache;
}());
exports.default = AbstractCache;
