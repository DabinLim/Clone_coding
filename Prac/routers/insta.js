const express = require("express");
const User = require("../schemas/user");
const Board = require("../schemas/board");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth-middleware");
const bcrypt = require("bcrypt");
const fs = require('fs');
const { response } = require('express');
const board = require('../schemas/board');

const app = express();
const router = express.Router();

//회원가입
router.post("/register", async (req, res) => {
    console.log("회원가입")
    try {
        const { insta_Id, name_person, nickname, password } = req.body;

        const existUsers = await User.find({
            $or: [{ insta_Id }, { nickname }],
        });

        if (existUsers.length) {
            res.status(400).send({
                errorMessage: "이미 가입된 아이디 또는 닉네임이 있습니다.",
            });
            return;
        };

        let friend_list = [nickname]

        await User.create({
            insta_Id,
            name_person,
            nickname,
            friend_list,
            password: bcrypt.hashSync(password, 10),
        })


    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: "양식을 맞춰주세용!",
        });
    };
});

// 로그인 jwt
router.post("/login", async (req, res) => {
    console.log("로그인 시작")
    try {
        const { insta_Id, password } = req.body;
        const user = await User.findOne({ insta_Id }).exec();

        bcrypt.compare(password, user["password"], (err, same) => { // 비밀번호 일치 확인
            if (same) {
                const token = jwt.sign({ userId: user.userId }, "team2-key");
                res.send({
                    token,
                });
            } else {
                res.status(400).send({
                    errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
                });
                return;
            }
        })
    } catch (err) {
        res.status(400).send({
            errorMessage: "이메일 또는 패스워드의 형식이 올바르지 않습니다."
        });
    }
});

// 친구 추천 보여주기
router.post("/friend_list", async (req, res) => {

    const { token } = req.headers;
    payload = jwt.verify(token, "team2-key");
    const { nickname } = await User.findOne({ _id: payload.userId })


    // let my_nick = []
    // friend_my_Id_save = await User.findOne({ nickname: nickname });
    // my_nick.push(friend_my_Id_save)
    // await User.deleteOne({ nickname: nickname })
    friend_Id = await User.find({})
    res.json({ friend_list: friend_Id, nickname });
});

// 친구 추가하기
router.post("/add_friend", async (req, res, next) => {
    console.log('== 친구 추가 발동! ==')
    const friend_nickname = req.body.nickname;
    const { token } = req.headers;


    payload = jwt.verify(token, "team2-key");
    let { friend_list } = await User.findOne({ _id: payload.userId })
    const { nickname } = await User.findOne({ _id: payload.userId })

    if (friend_list.includes(friend_nickname) == true) {
        res.send("이미 친구랍니다^^")
        return
    }
    friend_list.push(friend_nickname)

    await User.updateOne({ nickname }, { $set: { friend_list } });
    res.send("친구 추가 완료 ^^")
});

// 친구 삭제하기
router.post("/delete_friend", async (req, res, next) => {
    console.log('== 친구 삭제 발동! ==')

    const friend_nickname = req.body.nickname;
    const { token } = req.headers;

    payload = jwt.verify(token, "team2-key");
    let { friend_list } = await User.findOne({ _id: payload.userId });
    const { nickname } = await User.findOne({ _id: payload.userId });

    // 배열 삭제
    console.log(friend_nickname)
    friend_list.splice(friend_list.indexOf(friend_nickname), 1);
    console.log(friend_list)
    await User.updateOne({ nickname: nickname }, { $set: { friend_list } });
});

// 내 친구 목록 보여주기
router.get("/my_friend_list_show", async (req, res) => {
    const { token } = req.headers;
    payload = jwt.verify(token, "team2-key");
    const { friend_list } = await User.findOne({ _id: payload.userId })
    const { nickname } = await User.findOne({ _id: payload.userId })

    res.json({ my_friend_list_show: friend_list, nickname: nickname });
    console.log(" == 친구목록 확인 완료 ^^ ==")
});

// 게시글 저장하기
router.post("/write", async (req, res, next) => {
    console.log("발동중")
    const board_show = req.body.board;
    const { token } = req.headers;

    payload = jwt.verify(token, "team2-key");
    const { nickname } = await User.findOne({ _id: payload.userId })

    let like_user = []
    let like_count = 0

    let board_Id = 0
    let data = await Board.find({}).sort("-board_Id")

    if (data.length == 0) { board_Id = 1 }
    else { board_Id = data[0]["board_Id"] + 1 }

    await Board.create({
        board_Id,
        board_show,
        nickname,
        like_user,
        like_count,
    })
});

// 게시글 보여주기
router.post("/show_board", async (req, res) => {
    const { token } = req.headers;
    payload = jwt.verify(token, "team2-key");
    const { friend_list } = await User.findOne({ _id: payload.userId });
    const { nickname } = await User.findOne({ _id: payload.userId });
    const board_list = await Board.find({});

    let friend_feed = []

    // 친구들 게시글만 보이게 하기
    for (let i = 0; i < board_list.length; i++) {
        if (friend_list.includes(board_list[i]["nickname"]) == true) {
            friend_feed.push(board_list[i])
        }
    }
    res.json({ show_board: friend_feed, nickname: nickname, board_Id_check: board_list });
});

// 상세 게시글 보여주기
router.post("/show_board_detail/:instaId", async (req, res) => {
    const { instaId } = req.params;
    console.log(instaId)
    const board_list = await Board.findOne({ board_Id: instaId });
    console.log(board_list)

    res.json({ board_list: board_list });
});

// 좋아요
router.post("/like", async (req, res) => {

    const { board_Id } = req.body;
    const { token } = req.headers;

    payload = jwt.verify(token, "team2-key");

    const { nickname } = await User.findOne({ _id: payload.userId });

    let { like_user } = await Board.findOne({ board_Id: board_Id })
    let { like_count } = await Board.findOne({ board_Id: board_Id })

    if (like_user.includes(nickname) == true) {
        like_count = like_count -= 1

        like_user.splice(like_user.indexOf(nickname), 1);
        await Board.updateOne({ board_Id }, { $set: { like_user, like_count } });
        res.send("X")
        return
    }
    if (like_user.includes(nickname) == false) {
        like_count = like_count += 1
        like_user.push(nickname)
        await Board.updateOne({ board_Id }, { $set: { like_user, like_count } });
        res.send("O")
    }
});


module.exports = router;