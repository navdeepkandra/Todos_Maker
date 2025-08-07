import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

connectDB();

app.get("/", (req, res) => {
    res.send("<h1>THIS IS THE HOMEPAGE OF TODOS APP</h1>")
});