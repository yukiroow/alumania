// Author: @yukiroow Harry Dominguez
//         @blueskatchy Cazandra Jae Lapig
//         @cayeelii Cariel Joyce Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;

// Get all Events
router.get("/", (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;
    db.query(
        "SELECT * FROM event ORDER BY publishtimestamp DESC LIMIT ? OFFSET ?",
        [parseInt(limit), parseInt(offset)],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

// Get all Interested in Event
router.get("/interestedinevents/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT * FROM interestedinevent WHERE userid = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
});

// Check if interested in Event
router.get("/alreadyinterested/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT eventid FROM interestedinevent WHERE userid = ? AND eventid = ?",
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
        "INSERT INTO interestedinevent (eventid, userid) VALUES (?, ?)",
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
        "DELETE FROM interestedinevent WHERE eventid = ? AND userid = ?",
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

// Create sponsorship
router.post("/sponsor/:id", (req, res) => {
    const { id } = req.params;
    const { userid, amount, type } = req.body;
    db.query(
        "INSERT INTO eventsponsor (type, amount, userid, eventid) VALUES (?, ?, ?, ?)",
        [type, amount, userid, id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).send({
                message: "Success",
            });
        }
    );
});

module.exports = router;
