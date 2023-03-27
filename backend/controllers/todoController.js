const Todo = require("../models/todoModel");
// const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId;
const ObjectId = require("mongodb").ObjectId;

exports.createTodo = async (req, res) => {
  try {
    let todo = req.body.todo;
    console.log(req.user);

    const data = await Todo.create({
      todo,
      todoBy: new ObjectId(req.user),
    });
    res
      .status(201)
      .send({ status: true, message: "todo created succefully", data: data });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

exports.gettodo = async (req, res) => {
  try {
    const findTodo = await Todo.find({ todoBy: new ObjectId(req.user) });
    if (!findTodo) {
      res.status(401).send({ status: false, message: "todo Not Found" });
    }

    res
      .status(201)
      .send({
        status: true,
        message: "todo Fetched succefully",
        data: findTodo,
      });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todoDelete = await Todo.findByIdAndRemove({ _id: req.params.id });
    if (!todoDelete) {
     return res.status(401).send({ status: false, message: "todo Not Found" });
    }
    res
      .status(201)
      .send({
        status: true,
        message: "todo deleted succefully",
        data: todoDelete,
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
