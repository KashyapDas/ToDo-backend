const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const correctTyped = require("./Middleware/checkMiddleware");
const todomodel = require("./Database/db");

app.use(bodyParser.json());
app.use(cors())

app.post("/createtodo",correctTyped,async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const isComplete = req.body.isComplete;

    const response = await todomodel.create({
      title,
      description,
      isComplete
    });
    if(!response)
    {
        res.json({
            msg:"Something Went wrong",
            result:false,
        })
        return;
    }
    res.json({
        msg:"ToDo created successfully",
        result:true
    })
})

app.get("/display",async (req,res)=>{
    const allTodo = await todomodel.find({});
    if(!allTodo)
    {
        res.json({
            msg:"Something went wrong in the server",
            result:false,
        })
        return;
    }
    res.json({
        msg:`You have created ${allTodo.length} which are displayed below`,
        result:true,
        allTodo
    });
})

app.post("/complete",async (req,res)=>{

    const response = await todomodel.updateOne({
        _id:req.body.itemsid
    },{
        isComplete:req.body.isComplete
    })
    if(!response)
    {
        res.json({
            msg:"Not able to update the todo",
            result:false
        })
        return;
    }

    res.json({
        msg:"Update to-do successfully",
        result:req.body.isComplete
    });
})

app.listen(3000);