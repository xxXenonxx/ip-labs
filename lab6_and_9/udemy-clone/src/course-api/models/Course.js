const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    instructor_name: String,
    price: Number,
    category: String,
    enrolled_students: Number,
});

module.exports = mongoose.model("Courses", coursesSchema);