import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Urlroute from './routes/url.js';
dotenv.config();

const app=express();
const PORT=5000;
// const PORT=process.env.PORT || 5000;
app.use(express.json());

    
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);
    }
  };
 connectDB();


app.get('/',(req,res)=>{
    res.send("Hello World");
})

//app.use(express.json());

app.use('/api/url',Urlroute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
 