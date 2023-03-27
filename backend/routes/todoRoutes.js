const express = require("express");
const { createTodo, gettodo, deleteTodo } = require("../controllers/todoController");
const router=express.Router()
const { protect } = require("../middlewares/authMiddleware");

router.route("/createTodo").post(protect,createTodo);
router.route("/gettodo").get(protect,gettodo);
router.route("/remove/:id").delete(protect,deleteTodo);
module.exports= router