const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/taskRoutes');

// connect to mongo db 

const dbURI = 'mongodb+srv://Sahil:Sahil1234@cluster0.5kpgv.mongodb.net/TaskDb?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then((result)=> app.listen(5000))
  .catch(err => console.log(err));

//express app

const app = express();

//register view engine

app.set('view engine', 'ejs');

//middleware

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//routes

app.get('/',(req,res)=>{
  res.redirect('/tasks');
});

//task route

app.use('/tasks',taskRoutes);

//404

app.use((req,res)=>{
  res.status(404).render('404',{ title: '404' });
});