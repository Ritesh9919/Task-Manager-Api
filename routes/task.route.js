import express from 'express';
const router = express.Router();

import { createTask } from '../controllers/task.controller.js';

router.post('/', createTask);


export default router;