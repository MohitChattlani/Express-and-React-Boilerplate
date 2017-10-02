var express=require('express');
var path = require('path');
var app=express();


app.set('view engine','hbs');
const hbs = require('hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use((req,res)=>{
  res.render('index');
});

app.listen(3000,(err,res)=>{
  if (!err) {
    console.log("Server started");
  }
});
