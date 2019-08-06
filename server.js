const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const bodyparser = require('body-parser')
// const customerRoute = require('./routes/api/customer')

const PORT = process.env.PORT || 80;

const logger = (req,res,next) =>{
  console.log('hello');
  next()
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





app.get('/', function (req, res) {

  res.send('仇总好！卢总好！')
})

app.use(bodyparser.json())

// app.use('/api',tweetsRoute)
// app.use('/api',dailyRoute)


app.listen(PORT, () => {
  console.log('server running');
});