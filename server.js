var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// home.html
// res.html
// list.html
var reservations = [
    {
        name: "Rick",
        phone: "867-5309",
        email: "rick@hotmail.com",
        id: 432
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/res", function (req, res) {
    res.sendFile(path.join(__dirname, "res.html"));
});

app.get("/api/list", function (req, res) {
    res.sendFile(path.join(__dirname, "list.html"));
});

// Create New Characters - takes in JSON input
app.post("/api/list", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.name = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    reservations.push(newreservation);

    res.json(newreservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});