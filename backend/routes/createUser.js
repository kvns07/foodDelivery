const express = require('express')
const router = express.Router()
const User = require("../model/user");
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecKey="oihqoidqqikbqdqoihq";
router.post("/createUser",
    body('email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 }),
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ error: err.array(), "errorType": "kya bhai acche se values put karo" });
        }

        const salt = await bcrypt.genSalt(10);
        let setPassword = await bcrypt.hashSync(req.body.password, salt);

        try {
            await User.create({
                name: req.body.name,
                password: setPassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.log("...", error);
            res.json({ success: false, Error: error });
        }
    })
router.post("/loginUser",
    body('email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 }),
    // body('name').isLength({ min: 5 }),
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ error: err.array(), "errorType": "kya bhai acche se values put karo" });
        }
        let email = req.body.email;
        try {

            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ error: err.array(), "errorType": "email galat hai" });
            }
            const correctPass=bcrypt.compareSync(req.body.password, userData.password);
            // console.log(req.body.password);
            // console.log(userData.password);
            // console.log(correctPass);
            if (!(correctPass)) {
                return res.status(400).json({ error: err.array(), "errorType": "correct password daalo" });
            }
            const data={
                user:{
                    id:userData.id
                }
            }
            const authToken=jwt.sign(data,jwtSecKey);
            return res.json({ success: true,authtoken:authToken });

        } catch (error) {
            console.log("...", error);
            res.json({ success: false, Error: error });
        }
    })
module.exports = router;