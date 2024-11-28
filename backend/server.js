//Lapig & Maga
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

// eventRouter
app.use("/events", eventRouter)
app.use("/interestedinevents", eventRouter)

// experienceRouter
app.use("/experience", experienceRouter)
app.use("/createnewexperience", experienceRouter)
app.use("/album", experienceRouter)
app.use("/albumexperience", experienceRouter)
app.use("/comment", experienceRouter)
app.use("/experienceimage", experienceRouter)
app.use("/experiencelike", experienceRouter)
app.use("/allexperiencelike", experienceRouter)
app.use("/removexperience", experienceRouter)
app.use("/removealbum", experienceRouter)

// userRouter
app.use("/users", userRouter)
app.use("/alumni", userRouter)
app.use("/editalumni", userRouter)
app.use("/applicants", userRouter)

// jobRouter
app.use("/jobpost", jobRouter)
app.use("/interestedinjobpost", jobRouter)

app.use(cors(corsOptions));

app.listen(2012, () => {
    console.log("Server started on http://localhost:2012");
});