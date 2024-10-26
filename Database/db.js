const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://udemy_app:udemyBackend@kashyapdas2234.mwsas.mongodb.net/todo_app");

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    isComplete:Boolean,
})

const todomodel = mongoose.model("todomodel",todoSchema);


module.exports = todomodel;