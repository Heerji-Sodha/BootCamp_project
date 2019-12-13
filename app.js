"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var detabase_1 = __importDefault(require("./dist/detabase"));
// ********************************************** connect with Express
var app = express_1.default();
var db = detabase_1.default.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once("open", function () {
    console.log("database successfully connect");
});
// ********************************************** Server 
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("server running......");
});
app.use(express_1.default.json());
app.use("/todo", require("./dist/tododata.js"));
