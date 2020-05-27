const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect ('mongodb://localhost:27017/CourseManager', {useNewUrlParser: true}).then(() =>{
    console.log("Connected :) ");
    return server.start();
}).catch((e) =>{
    console.log("Error is ");
    console.log(e);

});





module.exports = {
    mongoose
};