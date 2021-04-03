const express = require('express');
const cors = require('cors'); 
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> 
  res.json({username:'yeonjae'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})