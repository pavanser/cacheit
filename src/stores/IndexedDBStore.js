"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = Enums.Actions;
var Statuses = Enums.Statuses;
var IndexedDBStore = /** @class */ (function () {
    function IndexedDBStore() {
        this.store = window.indexedDB;
    }
    IndexedDBStore.prototype.add = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.add,
            items: []
        });
    };
    IndexedDBStore.prototype.addBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.add,
            items: []
        });
    };
    IndexedDBStore.prototype.clear = function (key) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.clear,
            items: []
        });
    };
    IndexedDBStore.prototype.delete = function (key) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.delete,
            items: []
        });
    };
    IndexedDBStore.prototype.deleteBulk = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.delete,
            items: []
        });
    };
    IndexedDBStore.prototype.get = function (key) {
        return Promise.resolve({ id: 'test-id' });
    };
    IndexedDBStore.prototype.getAll = function () {
        return Promise.resolve([{ id: 'test-id' }]);
    };
    IndexedDBStore.prototype.keys = function () {
        return Promise.resolve([]);
    };
    IndexedDBStore.prototype.put = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.update,
            items: []
        });
    };
    IndexedDBStore.prototype.putBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.update,
            items: []
        });
    };
    IndexedDBStore.prototype.upsert = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.upsert,
            items: []
        });
    };
    IndexedDBStore.prototype.upsertBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.upsert,
            items: []
        });
    };
    return IndexedDBStore;
}());
exports.default = IndexedDBStore;
