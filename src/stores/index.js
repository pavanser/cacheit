"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IndexedDBStore_1 = __importDefault(require("./IndexedDBStore"));
exports.IndexedDBStore = IndexedDBStore_1.default;
var LocalStorageStore_1 = __importDefault(require("./LocalStorageStore"));
exports.LocalStorageStore = LocalStorageStore_1.default;
var SessionStorageStore_1 = __importDefault(require("./SessionStorageStore"));
exports.SessionStorageStore = SessionStorageStore_1.default;
