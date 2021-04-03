const express = require("express");
const User = require("../schemas/user");
const jwt = require("jsonwebtoken");
// const authMiddleware = require("../middlewares/auth-middleware");
const bcrypt = require("bcrypt");
const fs = require('fs');
const { response } = require('express');
const app = express();
const router = express.Router();

//회원가입 method:post  url:api/register
router.post("/register", async (req, res) => {
    console.log("회원가입")
    try {
        const { insta_Id, name_person, nickname, password } = req.body;

        console.log(insta_Id)

        const existUsers = await User.find({
            $or: [{ insta_Id }, { nickname }],
        });

        if (existUsers.length) {
            res.status(400).send({
                errorMessage: "이미 가입된 아이디 또는 닉네임이 있습니다.",
            });
            return;
        };

        await User.create({
            insta_Id,
            name_person,
            nickname,
            password: bcrypt.hashSync(password, 10),
        })

    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: "양식을 맞춰주세용!",
        });
    };
});

// 로그인 method:post  url:api/login
router.post("/login", async (req, res) => {
    console.log("로그인 시작")
    console.log(req.body)
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

module.exports = router;

