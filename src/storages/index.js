"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IndexedDB_1 = __importDefault(require("./IndexedDB"));
exports.IndexedDB = IndexedDB_1.default;
var LocalStorage_1 = __importDefault(require("./LocalStorage"));
exports.LocalStorage = LocalStorage_1.default;
var SessionStorage_1 = __importDefault(require("./SessionStorage"));
exports.SessionStorage = SessionStorage_1.default;
