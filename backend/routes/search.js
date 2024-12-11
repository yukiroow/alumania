// Dominguez
const express = require("express");
const router = express.Router();
const db = require("../database").db;

router.get("/events/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        "SELECT * FROM event WHERE CONCAT(eventid, title, category, eventloc) LIKE ? ORDER BY publishtimestamp DESC",
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
        `SELECT xpid, body, username, displaypic, publishtimestamp, userid 
        FROM experience e
        INNER JOIN user USING(userid)
        INNER JOIN alumni USING(userid)
        WHERE CONCAT(e.xpid, e.body) LIKE ?
        AND alumni.private != '1'
        ORDER BY publishtimestamp DESC;`,
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

router.get("/opportunities/:query", (req, res) => {
    const { query } = req.params;
    db.query(
        "SELECT * FROM jobpost WHERE CONCAT(jobpid, title, type, location, description, companyname, contactname, contactemail) LIKE ? ORDER BY publishtimestamp DESC",
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
        "SELECT userid, username, firstname, middlename, lastname, course, company, displaypic, location FROM user RIGHT JOIN alumni using(userid) WHERE CONCAT(username, firstname, COALESCE(middlename, ''), lastname, course, COALESCE(company, '')) LIKE ? AND usertype = 'Alumni' ORDER BY username ASC",
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
