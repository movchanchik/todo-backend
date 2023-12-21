// business logic for operations

import { Todo } from "../models/todo.model.js";

export const addTodo = async (req, res) => {
  try {
    console.log("Adding Todo");
    // create new data
    const newTodo = new Todo(req.body);
    await newTodo.save();
    // 201 success to create
    res.status(201).send(newTodo);
  } catch (err) {
    // 400 bad request
    res.status(400).send(err);
  }
};

export const getTodos = async (req, res) => {
  try {
    console.log(`Getting Todos`);

    const todos = await Todo.find({});
    res.status(200).send(todos);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const input = req.body;
  try {
    const updated = await Todo.findByIdAndUpdate(id, input, {
      new: true,
    });
    res.status(200).send(updated);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`Deleting Todo`, id);

    const deleted = await Todo.findByIdAndDelete(id);

    res.status(200).send(deleted);
  } catch (err) {
    res.status(400).send(err);
  }
};
