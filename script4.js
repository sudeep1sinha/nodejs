const express = require('express')
const app = express();

app.use(function(req , res , next){
    console.log("route se phele chalta hu bhai")
    next();
}); //---> this is middleware

app.get('/', function (req, res) {  //--> '/'--this is route
  res.send('arokotono');
});

app.get('/profile', function (req, res) {
    res.send('hello from profile');
  });

app.listen(4000);