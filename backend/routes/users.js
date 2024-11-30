//Lapig & Maga
const express = require("express")
const router = express.Router()
const db = require("../database").db;

// Get all User
router.get("/", (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

//Harry Dominguez
router.post("/applicants", (req, res) => {
    res.send("Create New Applicants")
})

// Cariel Joyce Maga
router.put("/editalumni", (req, res) => {
    const userid = req.params.id;
    const { email, firstname, middlename, lastname, course, empstatus, location, company, displaypic, diploma, banned } = req.body;

    db.query(
        'UPDATE alumni SET email = ?, firstname = ?, middlename = ?, lastname = ?, course = ?, empstatus = ?, location = ?, company = ?, displaypic = ?, diploma = ?, banned = ? WHERE userId = ?',
        [email, firstname, middlename, lastname, course, empstatus, location, company, displaypic, diploma, banned, userid],
        (err, result) => {
          if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ error: 'Error updating alumni' });
          }
    
          if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Alumni updated successfully' });
          } else {
            res.status(404).json({ error: 'Alumni not found' });
          }
        }
    );
 });



module.exports = router;