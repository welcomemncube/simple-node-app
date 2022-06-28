const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT;

//Create a simple get route
app.get("/", (req, res) => {
 res.send("Hello World");
});



//Listen on PORT 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));