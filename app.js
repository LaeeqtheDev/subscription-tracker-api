import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './config/routes/user.routes.js';
import authRouter from './config/routes/auth.routes.js';
import subscriptionRouter from './config/routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleWare from './models/middleware/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// api/v1/sign-up
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscription', subscriptionRouter)

app.use(errorMiddleWare);

app.get('/', (req, res) => {
    res.send('Welcome to the Tracker API!');
});

app.listen(PORT, async () => {
    console.log(`Server is running on: ${PORT}`);

    //connect to database
    await connectToDatabase();

});

export default app;
