//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Get all Jobpost
router.get("/", (req, res) => {
    db.query("SELECT * FROM jobpost", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})


// Cariel Joyce Maga
router.get("/", (req, res) => {
    const query = 'SELECT * FROM interestedinjobpost';
    db.query(query, (err, result) => {
        if(err) return;
        res.send(result);
    })
})


module.exports = router;