// Dominguez
const express = require("express");
const router = express.Router();
const db = require("../database").db;

router.get("/events/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        "SELECT * FROM event WHERE CONCAT(eventid, title, category, eventloc) LIKE ?",
        [`%${query}%`],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            // Images should be a part of the returned data
            res.status(200).json(results);
        }
    );
});

router.get("/experiences/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        `SELECT e.xpid, e.title, e.body, 
               GROUP_CONCAT(i.xpimage) AS images
        FROM experience e
        LEFT JOIN experienceimage i ON e.xpid = i.xpid
        WHERE CONCAT(e.xpid, e.title, e.body) LIKE ?
        GROUP BY e.xpid, e.title, e.body;`,
        [`%${query}%`],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }

            const formattedResults = results.map((row) => ({
                ...row,
                images: row.images ? row.images.split(",") : [],
            }));

            res.status(200).json(formattedResults);
        }
    );
});

router.get("/jobs/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        "SELECT * FROM jobpost WHERE CONCAT(jobpid, title, type, location, description, companyname, contactname, contactemail) LIKE ?",
        [`%${query}%`],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        }
    );
});

router.get("/albums/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        "SELECT * FROM album WHERE CONCAT(albumid, title) LIKE ?",
        [`%${query}%`],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        }
    );
});

router.get("/users/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        "SELECT username, firstname, middlename, lastname, course, company, displaypic, location FROM user RIGHT JOIN alumni using(userid) WHERE CONCAT(username, firstname, middlename, lastname, course, company) LIKE ?",
        [`%${query}%`],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        }
    );
});

module.exports = router;
