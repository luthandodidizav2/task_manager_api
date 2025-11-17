import mongoose, { Schema } from "mongoose";
import { Task } from "../typesAndInterfaces";

const TaskSchema = new mongoose.Schema<Task>({
    title:String,


},{
    timestamps:true
})


const TaskModel = mongoose.model('Task',TaskSchema)

export {TaskModel};