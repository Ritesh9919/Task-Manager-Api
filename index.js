import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';

import connectDB from './db/mongoose.js';
import { errorHandlerMiddleware } from './middlewares/error_handler.js';
import { notFoundMiddleware } from './middlewares/not_found.js';

import taskRouter from './routes/task.route.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    credentials:true
}))

app.get('/', (req, res)=> {
    res.send('Welcome');
})



app.use('/api/tasks', taskRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log(`Server is running on port:${process.env.PORT}`);
})


