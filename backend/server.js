const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: '*',
};
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Route Imports
const eventRouter = require("./routes/events");
const userRouter = require("./routes/users");
const experienceRouter = require("./routes/experience");
const jobRouter = require("./routes/jobpost");

// Cariel Joyce Maga
// eventRouter
app.use("/events", eventRouter)
app.use("/interestedinevents", eventRouter)

// experienceRouter
app.use("/api/experience", experienceRouter)
app.use("/api/album", experienceRouter)
app.use("/api/albumexperience", experienceRouter)
app.use("/comment", experienceRouter)
app.use("/experienceimage", experienceRouter)
app.use("/api/experiencelike", experienceRouter)
app.use("/api/allexperiencelike", experienceRouter)
app.use("/api/removexperience", experienceRouter)

// userRouter
app.use("/users", userRouter)
app.use("/alumni", userRouter)
app.use("/api/applicants", userRouter)

// jobRouter
app.use("/jobpost", jobRouter)
app.use("/interestedinjobpost", jobRouter)

app.use(cors(corsOptions));

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});