import { Router } from "express";
import {
  addTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../controller/todo.controlles.js";

const router = Router();

router.post("/", addTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
export default router;
