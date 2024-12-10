//Lapig & Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;
const multer = require("multer");
const upload = multer();

// Get all User
router.get("/", (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT userid, email, firstname, 
      middlename, lastname, course, empstatus, 
      location, company, displaypic, private 
      FROM user INNER JOIN alumni USING(userid) 
      WHERE userid = ?`,
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).send(results[0]);
        }
    );
});

router.put("/setvisible/:id", (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    db.query(
        `
            UPDATE alumni
            SET private = ?
            WHERE userid = ?
        `,
        [type, id],
        (err, results) => {
            (err, results) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(200).send({ message: "OK" });
            };
        }
    );
});

router.post("/uploadpfp/:id", upload.single("image"), (req, res) => {
    const { id } = req.params;
    const pic = req.file.buffer;
    db.query(
        `
            UPDATE alumni
            SET displaypic = ?
            WHERE userid = ?
        `,
        [pic, id],
        (err, results) => {
            (err, results) => {
                if (err) return res.status(500).json({ error: err.message });
                res.status(200).send({ pfp: pic });
            };
        }
    );
});

module.exports = router;
