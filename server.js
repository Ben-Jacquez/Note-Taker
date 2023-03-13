// Declared Const
const express = require("express");
const path = require("path");
const routes = require("./routes/index");

// DB Port
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// GET Route for Index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Port Listener
app.listen(PORT, () => 
    console.log(`Note Taker Listening at http://localhost:${PORT}`)
);