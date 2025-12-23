const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());



const uri = 'mongodb+srv://ferytawfik90_db_user:YMCT7C6ySqU2MVX0@udemy-clone.uzdl38x.mongodb.net/?appName=udemy-clone';

const databaseConnect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('The MongoDB was connected sakasesefooly');
    }
    catch(error){
        console.log(error);
    }
};

databaseConnect();

const coursesRouter = require('./routes/courseRouter');
app.use('/courses', coursesRouter);

app.listen(3000, () => console.log("Server running on port 3000"));