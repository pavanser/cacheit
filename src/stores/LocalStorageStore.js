"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = Enums.Actions;
var Statuses = Enums.Statuses;
var LocalStorageStore = /** @class */ (function () {
    function LocalStorageStore() {
        this.store = window.localStorage;
    }
    LocalStorageStore.prototype.add = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.add,
            items: []
        });
    };
    LocalStorageStore.prototype.addBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.add,
            items: []
        });
    };
    LocalStorageStore.prototype.clear = function (key) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.clear,
            items: []
        });
    };
    LocalStorageStore.prototype.delete = function (key) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.delete,
            items: []
        });
    };
    LocalStorageStore.prototype.deleteBulk = function () {
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
    LocalStorageStore.prototype.get = function (key) {
        return Promise.resolve({ id: 'test-id' });
    };
    LocalStorageStore.prototype.getAll = function () {
        return Promise.resolve([{ id: 'test-id' }]);
    };
    LocalStorageStore.prototype.keys = function () {
        return Promise.resolve([]);
    };
    LocalStorageStore.prototype.put = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.update,
            items: []
        });
    };
    LocalStorageStore.prototype.putBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.update,
            items: []
        });
    };
    LocalStorageStore.prototype.upsert = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.upsert,
            items: []
        });
    };
    LocalStorageStore.prototype.upsertBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.upsert,
            items: []
        });
    };
    return LocalStorageStore;
}());
exports.default = LocalStorageStore;
