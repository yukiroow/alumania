// Author: @yukiroow Harry Dominguez
const express = require("express");
const router = express.Router();
const db = require("../database").db;
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Login
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    db.query(
        "SELECT userid, displaypic, firstname, middlename, lastname FROM alumni LEFT JOIN user USING (userid) WHERE username= ? AND password= ?",
        [username, password],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 0) {
                res.status(200).send(results[0]);
            } else {
                res.status(403).send("Bad Credentials");
            }
        }
    );
});

// Signup
router.post("/signup", upload.single("diploma"), (req, res) => {
    const {
        firstName,
        middleName,
        lastName,
        username,
        employment,
        location,
        email,
        company,
        course,
        password,
    } = req.body;

    const diploma = req.file ? req.file.buffer : null;

    db.query(
        "SELECT username FROM user WHERE username = ?",
        [username],
        (err, result) => {
            if (err) {
                console.error("Error reading database:", err);
                return res.status(500).send({ error: "Database error" });
            }

            if (result.length > 0) {
                return res.status(400).send({
                    message: "Username already taken",
                });
            }

            db.query(
                `INSERT INTO applicant (firstname, middlename, lastname, username, empstatus, location, email, company, course, password, diploma)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    firstName,
                    middleName || null,
                    lastName,
                    username,
                    employment,
                    location,
                    email,
                    company || null,
                    course,
                    password,
                    diploma,
                ],
                (err, result) => {
                    if (err) {
                        console.error("Error inserting into database:", err);
                        return res
                            .status(500)
                            .send({ error: "Database insertion error" });
                    }
                    res.status(201).send({
                        message: "Applicant information saved successfully",
                    });
                }
            );
        }
    );
});

module.exports = router;
