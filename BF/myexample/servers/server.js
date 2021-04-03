const express = require('express');
//const cors = require('cors'); 기존에 서버를 두개 하나하나 켜고 cors해줘야했지만 이제 필요없습니다.
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;

//app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> 
  res.json({username:'yeonjae'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})