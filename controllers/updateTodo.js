import Todo from "../models/Todo.js";

export const updateTodo = async (req, res) => {
    try {   
        const id = req.params.id;
        const {title, description} = req.body;

        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()}
        );

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
                message: `Successfully Updated Todo with ${id}`
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