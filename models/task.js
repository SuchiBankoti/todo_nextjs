import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title: String,
    description: String,
    completed:Boolean
}, {
    timestamps:true
})

const Task = mongoose.models.task || mongoose.model("task", taskSchema)

export default Task