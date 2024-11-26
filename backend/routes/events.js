//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require('../database').db;

// Cariel Joyce Maga
router.get("/", (req, res) => {
    const query = 'SELECT * FROM interestedinevent';
    db.query(query, (err, result) => {
        if(err) return;
        res.send(result);
    })
})

// Cazandra Jae Lapig
router.get("/", (req, res) => {
    db.query("SELECT * FROM event", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
})

module.exports = router;