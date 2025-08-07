import Todo from "../models/Todo.js";

export const getOneTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await Todo.findById(id);

        if(!response) {
            res.status(404).json({
                success: false,
                message: `Requested ${id} Details Not Found`,
            });
        }

        res.status(200).json(
            {
                success: true,
                data: response,
                message: `Successfully Got Todo with ${id}`
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