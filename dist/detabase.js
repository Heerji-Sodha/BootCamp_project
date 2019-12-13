"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb+srv://newtodolist:newtodolist@cluster0-zfjth.mongodb.net/test?retryWrites=true&w=majority';
mongoose_1.default.connect(uri);
exports.default = mongoose_1.default;
