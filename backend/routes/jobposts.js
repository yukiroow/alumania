// Author: @yukiroow Harry Dominguez
//         @blueskatchy Cazandra Jae Lapig
//         @cayeelii Cariel Joyce Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;

// Get all Jobpost
router.get("/", (req, res) => {
    db.query(
        "SELECT * FROM jobpost ORDER BY publishtimestamp DESC",
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(results);
        }
    );
});

// Get all Interested in Jobpost
router.get("/interestedjobs/:id", (req, res) => {
    const userId = req.params.id;
    db.query(
        "SELECT iij.jobpid, iij.userid FROM interestedinjobpost as iij INNER JOIN user as al using (userid) LEFT JOIN jobpost using(jobpid) WHERE iij.userid = ?",
        [userId],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(200).send("nothing");
            }
        }
    );
});

// Check if interested in Jobpost
router.get("/alreadyinterested/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT jobpid FROM interestedinjobpost WHERE userid = ? AND jobpid = ?",
        [req.query.userId, id],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            if (results.length > 0) {
                res.status(200).send({
                    interested: true,
                });
            } else {
                res.status(200).send({
                    interested: false,
                });
            }
        }
    );
});

// Set interested
router.post("/interested/:id", (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    db.query(
        "INSERT INTO interestedinjobpost (jobpid, userid) VALUES (?, ?)",
        [id, userId.replace(/['"]+/g, "")],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).send({
                message: "Marked as interested",
            });
        }
    );
});

// Set uninterested
router.post("/disregard/:id", (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    db.query(
        "DELETE FROM interestedinjobpost WHERE jobpid = ? AND userid = ?",
        [id, userId.replace(/['"]+/g, "")],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).send({
                message: "Removed from interested!",
            });
        }
    );
});

module.exports = router;
