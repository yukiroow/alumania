//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Get all Interested in Event
router.get("/interestedinevents", (req, res) => {
    db.query("SELECT * FROM interestedinevent", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

// Get all Event
router.get("/", (req, res) => {
    db.query("SELECT * FROM event", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

module.exports = router;