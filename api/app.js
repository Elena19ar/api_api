const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');


const BodyParser = require('body-parser');
// Load models


app.use(BodyParser.json() );




    //return array  
    });
})




//create a new list
app.post('/courses', (req, res) => {
    //return array  
    let title = req.body.title;
    title
})
})
    
});



//update
        {$set: req.body}).then(() => {
            res.sendStatus(200);
        });    
});



//delete a list
        _id: req.params.id
    })    
});





   Task.find({
    _id: req.params.id,
    }).then((task) => {
        res.send(task);
    })
});






    
            let newTask = new Task({
                title: req.body.title,
            });
            newTask.save().then((newTaskDoc) => {
                res.send(newTaskDoc);               
})         
})

        _id: req.params.id,
        {$set: req.body}).then(() => {
            res.sendStatus(200);
        });    
});



        _id: req.params.id,
    }).then((RemovedtaskDoc) => {
        res.send(RemovedtaskDoc);
    })    
});

















app.listen(3000, () => {
  console.log("Server is listening 3000 ")

})