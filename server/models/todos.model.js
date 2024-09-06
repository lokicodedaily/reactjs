const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Please enter the task to be added"],
    },
    checked: Boolean,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = Todo
