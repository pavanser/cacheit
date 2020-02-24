"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Actions = Enums.Actions;
var Statuses = Enums.Statuses;
var SessionStorageStore = /** @class */ (function () {
    function SessionStorageStore() {
        this.store = window.sessionStorage;
    }
    SessionStorageStore.prototype.add = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.add,
            items: []
        });
    };
    SessionStorageStore.prototype.addBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.add,
            items: []
        });
    };
    SessionStorageStore.prototype.clear = function (key) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.clear,
            items: []
        });
    };
    SessionStorageStore.prototype.delete = function (key) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.delete,
            items: []
        });
    };
    SessionStorageStore.prototype.deleteBulk = function () {
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
    SessionStorageStore.prototype.get = function (key) {
        return Promise.resolve({ id: 'test-id' });
    };
    SessionStorageStore.prototype.getAll = function () {
        return Promise.resolve([{ id: 'test-id' }]);
    };
    SessionStorageStore.prototype.keys = function () {
        return Promise.resolve([]);
    };
    SessionStorageStore.prototype.put = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.update,
            items: []
        });
    };
    SessionStorageStore.prototype.putBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.update,
            items: []
        });
    };
    SessionStorageStore.prototype.upsert = function (item) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.upsert,
            items: []
        });
    };
    SessionStorageStore.prototype.upsertBulk = function (items) {
        return Promise.resolve({
            status: Statuses.success,
            action: Actions.upsert,
            items: []
        });
    };
    return SessionStorageStore;
}());
exports.default = SessionStorageStore;
