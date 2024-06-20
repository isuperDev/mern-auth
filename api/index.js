import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';

mongoose.connect(process.env.DB)
.then(()=>
{
    console.log("Mongo DB connected!");
})
.catch((err)=>
{
    console.log(err);
});

const app = express();

app.listen(
    3000,
    () => {console.log('Server listening on port 3000!')}
);

app.use('/api/user', userRouter);