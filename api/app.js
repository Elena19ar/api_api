const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');


const BodyParser = require('body-parser');
// Load models
const {Course, Task} = require('./db/models');


app.use(BodyParser.json() );




app.get('/courses', (req, res) => {
    //return array  
    Course.find({}).then((courses) => {
        res.send(courses);
    });
})




//create a new list
app.post('/courses', (req, res) => {
    //return array  
    let title = req.body.title;
let newCourse = new Course({
    title
})
newCourse.save().then((courseDoc) => {
    res.send(courseDoc);
})
    
});



//update
app.patch('/courses/:id', (req, res) => {
    Course.findByIdAndUpdate({_id: req.params.id},
        {$set: req.body}).then(() => {
            res.sendStatus(200);
        });    
});



//delete a list
app.delete('/courses/:id', (req, res) => {
    Course.findByIdAndRemove({
        _id: req.params.id
    }).then((RemovedCourseDoc) => {
        res.send(RemovedCourseDoc);
    })    
});





app.get('/courses/:courseId/tasks', (req, res) => {
   Task.find({
    _id: req.params.id,
    _courseId: req.params.courseId
    }).then((task) => {
        res.send(task);
    })
});






app.post('/courses/:courseId/tasks', (req, res) => {
    
            let newTask = new Task({
                title: req.body.title,
                _courseId: req.params.courseId
            });
            newTask.save().then((newTaskDoc) => {
                res.send(newTaskDoc);               
})         
})

app.patch('/courses/:courseId/tasks/:taskId', (req, res) => {
    Course.findByIdAndUpdate({
        _id: req.params.id,
        _courseId: req.params.courseId},
        {$set: req.body}).then(() => {
            res.sendStatus(200);
        });    
});



app.delete('/courses/:courseId/tasks/:taskId', (req, res) => {
    Course.findByIdAndRemove({
        _id: req.params.id,
        _courseId: req.params.courseId
    }).then((RemovedtaskDoc) => {
        res.send(RemovedtaskDoc);
    })    
});

















app.listen(3000, () => {
  console.log("Server is listening 3000 ")

})