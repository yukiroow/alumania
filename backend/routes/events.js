//Lapig & Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;

// Get all Interested in Event
router.get("/interestedinevents/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM interestedinevent WHERE userid = ?", [id],(err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Get all Event
router.get("/", (req, res) => {
    db.query("SELECT * FROM event", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Set interested
router.post("/interested/:id", (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    db.query(
        "INSERT INTO interestedinevent (eventid, userid) VALUES (?, ?)",
        [id, userId.replace(/['"]+/g, '')],
        (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ error: err.message });
            }
            res.status(201).send({
                message: "Marked as interested",
            });
        }
    );
});

// Set interested
router.post("/disregard/:id", (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    db.query(
        "DELETE FROM interestedinevent WHERE eventid = ? AND userid = ?",
        [id, userId.replace(/['"]+/g, '')],
        (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ error: err.message });
            }
            res.status(201).send({
                message: "Removed from interested!",
            });
        }
    );
});

module.exports = router;
