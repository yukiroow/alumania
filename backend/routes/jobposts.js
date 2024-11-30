//Lapig & Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;

// Get all Jobpost
router.get("/", (req, res) => {
    db.query("SELECT * FROM jobpost", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// Get all Interested in Jobpost
router.get("/interested/:id", (req, res) => {
    const jobpostId = req.params.id;
    db.query(
        "SELECT * FROM interestedinjobpost as iij INNER JOIN user as al using (userid) LEFT JOIN jobpost using(jobpid) WHERE iij.jobpid = ?",
        [jobpostId],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length > 0) {
                res.status(200).json(results);
            } else {
                res.status(404).send("nothing");
            }
        }
    );
});

module.exports = router;
