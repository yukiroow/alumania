const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:6969"],
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "orange", "kiwi"] });
});

app.listen(6969, () => {
    console.log("Server started on http://localhost:6969");
});
