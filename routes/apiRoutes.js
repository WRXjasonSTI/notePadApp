//Dependencies including database utilization
var db = require("./db.json");
const fs = require("fs");

//Functionality/Initialization of array and route to db.json file
function databaseUse(dbArray) {
  let userNotes = [];
  for (let i = 0; i < dbArray.length; i++) {
    let noteID = dbArray[i];
    noteID.id = i + 1;
    userNotes[i] = noteID;
  }
  return userNotes;
}

function databaseSave(dbArray) {
  fs.writeFile("./db.json", JSON.stringify(dbArray), function (err) {
    if (err) throw err;
  });
}

//Routing, Getting, Posting, Saving, Deleting, Crying
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  //Posting and Updating to and from array
  app.post("/api/notes", function (req, res) {
    const userNew = req.body;
    db.push(userNew);
    db = databaseUse(db);
    databaseSave(db);
    res.json(userNew);
  });

  //Deleting and updating to and from array
  app.delete("/api/notes/:id", function (req, res) {
    const deletedNoteID = req.params.id;
    const deletedNote = db.splice(deletedNoteID - 1, 1);
    db = databaseUse(db);
    databaseSave(db);
    res.json(deletedNote);
  });
};
