const express = require("express");
const router = express.Router();
const {getTodos, addTodo, updateTodo} = require("../controllers/todo.controller")

router.get("/", getTodos)
router.post("/addTodo", addTodo)
router.put("/updateTodo", updateTodo)

module.exports = router;