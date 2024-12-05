import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './Database/db.js';

dotenv.config();

const app=express();

app.use(express.json());
const port=process.env.port;

import userroutes from './routes/user.js';

app.use('/api/user',userroutes);

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    connectdb();
})