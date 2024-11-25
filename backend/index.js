import express from 'express';
import { connectDb } from './DB/connectDB.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // alows us to use json data parser 
app.use(cookieParser());// allow us to use cookies and parse it


app.use("/api/auth" , authRoutes);
app.listen(PORT, () => {
    connectDb()
    console.log('server is running on', PORT);
});
