//Lapig & Maga
const express = require("express");
const router = express.Router();
const db = require("../database").db;
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get all albums of a user
router.get("/albums/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM album WHERE ownerid = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("nothing");
        }
    });
});

// Get all experiences of a user
router.get("/all/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT e.xpid, e.body, GROUP_CONCAT(TO_BASE64(i.xpimage)) AS images FROM experience e LEFT JOIN experienceimage i ON e.xpid = i.xpid WHERE e.userid = 'U008' GROUP BY e.xpid, e.body;`,
        [id],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }

            const formattedResults = results.map((row) => ({
                ...row,
                images: row.images ? row.images.split(",") : [],
            }));

            res.status(200).json(formattedResults);
        }
    );
});

// Get all Experience
router.get("/", (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;

    db.query(
        `SELECT xpid, body, username, displaypic, publishtimestamp 
        FROM experience
        INNER JOIN user USING(userid)
        INNER JOIN alumni USING(userid)
        ORDER BY publishtimestamp DESC
        LIMIT ? OFFSET ?`,
        [parseInt(limit), parseInt(offset)],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        }
    );
});

// Get all Experience Images
router.get("/images/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        `SELECT xpimage FROM experienceimage WHERE xpid = ?`,
        [id],
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json(results);
        }
    );
});

// Create a new Experience
router.post("/new", upload.array("images"), (req, res) => {
    const { content, albumid, userid } = req.body;
    try {
        // 1. Generate new XPID
        db.query("SELECT COUNT(*) AS count FROM experience", (err, results) => {
            if (err) {
                console.log(err);
            }
            let result = results[0].count;

            const nextID = `XP${String(result + 1).padStart(3, "0")}`; // e.g., XP001, XP002

            // 2. Insert into `experience` table
            db.query(
                "INSERT INTO experience (xpid, body, userid) VALUES (?, ?, ?)",
                [nextID, content, userid],
                (err) => {
                    if (err) {
                        console.log(err);
                    }

                    // 3. Insert each image into `experienceimage` table
                    req.files.map((file) =>
                        db.query(
                            "INSERT INTO experienceimage (xpid, xpimage) VALUES (?, ?)",
                            [
                                nextID,
                                file.buffer, // `buffer` contains the image data in binary form
                            ],
                            (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            }
                        )
                    );

                    // 4. Insert into `albumexperience` if `albumid` is provided
                    if (albumid) {
                        db.query(
                            "INSERT INTO albumexperience (albumid, xpid) VALUES (?, ?)",
                            [albumid, nextID],
                            (err) => {
                                if (err) {
                                    console.log(err);
                                }
                            }
                        );
                    }
                }
            );
        });

        res.status(200).json({ message: "Experience created successfully!" });
    } catch (error) {
        console.error("Error creating experience:", error);
        res.status(500).json({
            message: "Failed to create experience.",
            error: error.message,
        });
    }
});

// Get all Experience Like
router.get("/likes/:id", (req, res) => {
    const { id } = req.params;
    db.query(
        "SELECT COUNT(userid) as likes FROM experiencelike WHERE xpid = ?",
        [id],
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

router.get("/isliked/:id", (req, res) => {
    const { id } = req.params;
    const { userid } = req.query;
    db.query(
        "SELECT COUNT(userid) as likes FROM experiencelike WHERE xpid = ? AND userid = ?",
        [id, userid],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results[0].likes > 0) {
                res.status(200).json({ isliked: true });
            } else {
                res.status(200).json({ isliked: false });
            }
        }
    );
});

router.post("/likepost/:id", (req, res) => {
    const { id } = req.params;
    const { userid } = req.body;
    db.query(
        "INSERT INTO experiencelike (xpid, userid) VALUES (?, ?)",
        [id, userid],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id, userid });
        }
    );
});

router.post("/unlikepost/:id", (req, res) => {
    const { id } = req.params;
    const { userid } = req.body;
    db.query(
        "DELETE FROM experiencelike WHERE xpid = ? AND userid = ?",
        [id, userid],
        (err, result) => {
            if (err) {
                console.error("Error executing query: " + err.stack);
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id, userid });
        }
    );
});

// Delete an Experience
router.delete("/removexperience/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM experience WHERE xpid = ?", [id], (err, result) => {
        if (err) {
            console.error("Error executing query: " + err.stack);
            return res.status(400).send("error");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send("not found");
        }
        res.status(200).send("success");
    });
});

module.exports = router;
