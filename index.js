import dotenv from 'dotenv';
dotenv.config()
import express from 'express';

import connectDB from './db/mongoose.js';


const app = express();


app.get('/', (req, res)=> {
    res.send('Welcome');
})


app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log(`Server is running on port:${process.env.PORT}`);
})


