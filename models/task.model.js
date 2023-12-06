import mongoose from 'mongoose';



const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
}, {timestamps:true});


export const Task = mongoose.model('Task', taskSchema);