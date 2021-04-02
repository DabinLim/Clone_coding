const express = require("express");
const { globalRouter } = require("./routes/globalRoute.js");
const mongoose = require("mongoose");
const connect = require('./schemas');
const app = express();

connect();


app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/', globalRouter);

const instaRouter = require("./routers/insta");

app.use("/api", [instaRouter]);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/join', (req, res) => {
    res.render('join')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("서버가 요청을 받을 준비가 됐어요");
});
