import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';

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

app.use(express.json());

app.listen(
    3000,
    () => {console.log('Server listening on port 3000!')}
);

app.use('/api/user', userRouter);
app.use('/api/signup', authRouter);

app.use(
    (err, req, res, next) => {
        const errorCode = err.statusCode || 500;
        const errorMessage = err.message || "Internal Server Error";
        return res.status(errorCode).json(
            {
                success: false,
                errorMessage,
                statusCode,
            }
        );
    }
);