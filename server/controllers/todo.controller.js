const Todo = require("../models/todos.model");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos.reverse());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodo = async (req, res) => {
  try {
    const task = await Todo.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
    console.log(req.body)
  try {
    const task = await Todo.findByIdAndUpdate(req.body.id, {checked: req.body.checked});
    if (!task){
        return res.status(404).json({message: "Task not found!"})
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
};
