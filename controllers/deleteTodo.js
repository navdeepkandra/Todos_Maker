import Todo from "../models/Todo.js";

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success: true,
                message: `Successfully Deleted Todo with Id ${id}`
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