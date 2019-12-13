import mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    auther: { type: String, required: true }
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;