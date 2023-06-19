import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import Post from "./routes/randevu.js"

const A=process.env.PORT || 5042;
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/uye',Post);
const MONGO_URI='mongodb+srv://zeynep-post:12345678n@post.ytpocrb.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(A, () => {
      console.log(`Server ${A}. portta çalışıyor`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
