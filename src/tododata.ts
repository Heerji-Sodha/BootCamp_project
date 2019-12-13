import express from 'express'
const routes: express.Router = express.Router()

import todo from './schema'
import { request } from 'http'

// ********************************************** Get data
routes.get("/get", async (req: express.Request, res: express.Response) => {
    const getData = await todo.find()
    res.send({ message: getData })
})
// ********************************************** Post Todo

routes.post("/postTodo", (req: express.Request, res: express.Response) => {
    console.log(req.body)
    const todo1 = new todo(req.body)
    todo1.save()
        .then(() => {
            res.send({ message: "Todo Add Succesfully" })
        })
        .catch((err) => {
            console.log(err)
        })
})

// ********************************************** Todo Delete 



routes.delete("/delete", async (req, res) => {
    await todo.deleteOne(req.body)
        .then(() => {
            res.send({ message: " Todo Delete Succesfully" })
        })
        .catch((err) => {
            console.log(err)
        })
})

// ********************************************** Todo Edit 

routes.put("/edit", async (req, res) => {
    await todo.findByIdAndUpdate({ _id: req.body.id }, { title: req.body.title })
})




module.exports = routes;