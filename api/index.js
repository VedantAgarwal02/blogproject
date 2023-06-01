const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const MONGODB_URL = "mongodb+srv://msdvk187:<password>@cluster0.nst0rcs.mongodb.net/";
require('dotenv').config();

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect(MONGODB_URL, ()=> {
  console.log("database connected");
});

app.use('/user', userRouter);

app.use('/post', postRouter);

app.listen(4000);