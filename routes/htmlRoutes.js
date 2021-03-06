//Dependencies
const path = require("path");

//Functionality and routing to UI
module.exports = function (app) {
  // GET promise thingies
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../utility/index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../utility/notes.html"));
  });
};
