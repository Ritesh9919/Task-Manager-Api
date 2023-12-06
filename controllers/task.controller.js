import { Task } from "../models/task.model.js";
import { CustomApiError } from "../errors/custom_error.js";

const createTask = async (req, res, next) => {
  try {
    const { name, completed } = req.body;
    const task = await Task.create({ name, completed });
    res.status(201).json({ task, msg: "Task created successfully!" });
  } catch (error) {
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      return next(new CustomApiError(404, "Task not found"));
    }
    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);
    if (!task) {
      return next(new CustomApiError(404, "Task not found"));
    }
    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByIdAndUpdate({_id:taskId}, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(new CustomApiError(404, "Task not found"));
    }
    res.status(200).json({ task, msg: "Task updated successfull" });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
    try {
        const {taskId} = req.params;
        const task = await Task.findByIdAndDelete({_id:taskId});
        if(!task) {
            return next(new CustomApiError(404, 'Task not found'));
        }
        res.status(200).json({task, msg:'Task deleted successfully'});
    } catch (error) {
        next(error);
    }
};

export { createTask, getAllTasks, getTask, updateTask, deleteTask };
