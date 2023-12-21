import express from "express";
import todoRoutes from "./todo.routes.js";

const router = express.Router();

router.get("/todos", todoRoutes);

export default router;
