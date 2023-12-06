import express from 'express';
const router = express.Router();

import { createTask,getAllTasks, getTask, updateTask, deleteTask } from '../controllers/task.controller.js';

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:taskId', getTask);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);



export default router;