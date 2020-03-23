const fs = require('fs');
const path = require('path');
const express = require('express');
const config = require('./config');
const PORT = config.PORT;
const MONGODB_URI = config.MONGODB_URI;

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db = require('./models/todo');

// const todos = require('./models/todo');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const publicURL = path.resolve(`#{__dirname}/public`);
console.log(publicURL);

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile( path.resolve(__dirname, './views/index.html'));
});


// get WHERE IM GETTING THE DATA FROM mongoDB // server side

app.get("/api/v1/todos", async(req, res) => {
    try{
      console.log("TEST!");

      /// testing 
      const data = await db.find();
      // res.json({message:"get!"}); 
      console.log(data)
      res.json(data); 
    } catch(error){
      res.json(error);
    }
});

// post
app.post("/api/v1/todos", async(req, res) => {
    try{
      console.log("POST REQUEST", req.body);
      const newData = {
          "unit": req.body.unit,
          "status": req.body.status
      }

      console.log(newData);
      const data = await db.create(newData);
      res.json(data);  
      console.log(data);
    } catch(error){
      res.json(error);
    }
});

// put
app.put("/api/v1/todos/:id", async(req, res) => {
    try{
      const id = req.params.id;

      const updatedData = {
          todo: req.body.todo,
          status: req.body.status
      }

      const changedData = await db.findOneAndUpdate(id, updatedData, {new: true});


      res.json(changedData);  
    } catch(error){
      res.json(error);
    }
});

// DELETE: /todos --- COULDN'T GET THIS ONE TO WORK ASK JOEY
app.delete("/api/v1/todos/:id", async(req, res) => {
    try{
      const id = req.params.id;
      const deletedData = await db.findOneAndDelete(id);
      res.json({message:"successfully deleted!", deletedDocument: deletedData});  
    } catch(error){
      res.json(error);
    }
});


app.listen(PORT, () => {
    console.log(`see the magic: http://localhost:${PORT}`);
});