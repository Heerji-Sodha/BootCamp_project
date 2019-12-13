import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from './detabase';
// ********************************************** connect with Express

const app: express.Application = express();
const db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error'))
db.once("open", function () {
    console.log("database successfully connect")
});
// ********************************************** Server 
const PORT:any = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server running......")
})


app.use(express.json());
app.use("/todo", require("./tododata"))

