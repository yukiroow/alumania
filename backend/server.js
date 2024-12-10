const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors')

app.use(cors())

app.get("/", (req, res) => {
    res.json({
        "name": "sean",
        "type": "****kol",
    });
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if(username == "yukiroow" && password == "123qweasd") {
        res.send("success");
    } else {
        res.send("fail");
    }
});

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});

// TODO: https://daisyui.com/components/alert/
