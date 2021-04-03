const express = require('express');
const mongoose = require("mongoose");
const connect = require('./schemas');

connect();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const instaRouter = require("./routers/insta");
app.use("/api", [instaRouter]);

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/join', (req, res) => {
    res.render('join')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/detail', (req, res) => {
    res.render('detail')
})

// views 폴더랑 연결해주기 // ejs 모듈
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("서버가 요청을 받을 준비가 됐어요");
});