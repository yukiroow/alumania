// Dominguez
const express = require("express");
const router = express.Router();
const db = require("../database").db;

router.get("/", (req, res) => {
    res.send("Auth API endpoint.");
});

// Login
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT username FROM alumni LEFT JOIN user USING (userid) WHERE username= ? AND password= ?",
        [username, password],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 0) {
                res.status(200).send("success");
            } else {
                res.status(403).send("Bad Credentials")
            }
        }
    );
});

module.exports = router;
