const express = require("express");
const cors = require("cors");
const contacts = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contacts);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;