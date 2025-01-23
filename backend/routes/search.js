// Author: @yukiroow Harry Dominguez
const express = require("express");
const router = express.Router();
const db = require("../database").db;

// Search events
router.get("/events/:query", (req, res) => {
    const { query } = req.params;
    const { userid } = req.query;
    db.query(
        `SELECT * FROM event 
        WHERE CONCAT(eventid, title, category, eventloc) LIKE ? AND 
        (batchfilter = (SELECT batch FROM alumni WHERE userid = ?) OR batchfilter IS NULL) 
        ORDER BY publishtimestamp DESC`,
        [`%${query}%`, userid],
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

// Search experiences
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

// Search opportunities
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

// Search users
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
