const app = require("express")();
const PORT = 8080;

app.get("/", (request, response) => {
    response.status(200).send({
        name: "Team Kotl!",
    });
});

app.listen(PORT, () =>
    console.log(`Server is now open on http://localhost:${PORT}`)
);
