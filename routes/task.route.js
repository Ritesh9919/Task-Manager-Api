import express from 'express';
const router = express.Router();

import { createTask,getAllTasks, getTask, updateTask, deleteTask } from '../controllers/task.controller.js';

router.post('/create', createTask);
router.get('/', getAllTasks);
router.get('/:taskId', getTask);
router.put('/:taskId/update', updateTask);
router.delete('/:taskId/delete', deleteTask);



export default router;