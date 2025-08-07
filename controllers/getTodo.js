import Todo from "../models/Todo.js";

export const getTodo = async (req, res) => {
    try {
        const response = await Todo.find({});

        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Successfully Got All Todos"
            }
        );
    } catch(error) {
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success: false,
                data: "Server Error",
                message: error.message
            }
        );
    }
} 