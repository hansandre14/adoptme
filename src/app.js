import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;   
const url= 'mongodb+srv://hansandre:123@cluster0.avmqkg0.mongodb.net/?appName=Cluster0'
mongoose.connect(url)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Could not connect:", err));
const connection = mongoose.connect(url)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
