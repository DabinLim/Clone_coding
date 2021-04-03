const express = require("express");
const { globalRouter } = require("./routes/globalRoute.js");
const mongoose = require("mongoose");
const connect = require('./schemas');
const app = express();

connect();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const instaRouter = require("./routers/instaRoute");
app.use("/api", [instaRouter]);

app.use('/', globalRouter);

app.use('/public', express.static('public'));

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/join', (req, res) => {
    res.render('join')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("서버가 요청을 받을 준비가 됐어요");
});
