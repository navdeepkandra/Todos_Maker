import express from "express";
const router = express.Router();

import {createTodo} from "../controllers/createTodo.js";
import { getTodo } from "../controllers/getTodo.js";
import { getOneTodo } from "../controllers/getOneTodo.js";
import { updateTodo } from "../controllers/updateTodo.js";
import { deleteTodo } from "../controllers/deleteTodo.js";

router.post("/createTodo", createTodo);

router.get("/getTodo", getTodo);

router.get("/getOneTodo/:id", getOneTodo);

router.put("/updateTodo/:id", updateTodo);

router.delete("/deleteTodo/:id", deleteTodo);

export default router;