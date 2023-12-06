import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type:'json'};

import connectDB from './db/mongoose.js';
import { errorHandlerMiddleware } from './middlewares/error_handler.js';
import { notFoundMiddleware } from './middlewares/not_found.js';

import taskRouter from './routes/task.route.js';


const app = express();

// api documentation
app.use('/api/docs', swagger.serve, swagger.setup(apiDocs));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    credentials:true
}))

app.get('/', (req, res)=> {
    res.send('<h1>Task Manager API</h1><a href="/api/docs">Documentaion</a>');
})



app.use('/api/tasks', taskRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log(`Server is running on port:${process.env.PORT}`);
})


