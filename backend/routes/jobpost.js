//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Get all Jobpost
router.get("/jobpost", (req, res) => {
    db.query("SELECT * FROM jobpost", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Get all Interested in Jobpost
router.get("/interestedinjobpost", (req, res) => {
    db.query("SELECT * FROM interestedinjobpost", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})


module.exports = router;