const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/', async (req, res) => {
    const newCourse = await Course.create(req.body);
    res.send(newCourse);
});

router.get('/', async (req, res)=> {
    const allCourses = await Course.find();
    res.send(allCourses);
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.send(course);
});


router.put('/updateOne/:id', async (req, res) => {
    const filtername = req.params.id;
    const updateData = req.body;

    const result = await Course.updateOne({_id: filtername}, {$set: updateData})

    if (result.matchedCount === 0){
        return res.status(404).json({message: 'Course not found'});
    }

    res.json({message: 'Course updated succesfully', result});
});

router.delete('/deleteOne/:id', async (req, res)=>
{
     const filtername = req.params.id;

    const result = await Course.deleteOne({_id: filtername})

     if (result.deletedCount === 0){
        return res.status(404).json({message: 'Course not found'});
    }

    res.json({message: 'Course deleted succesfully', result});

})

module.exports=router;