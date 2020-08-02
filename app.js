// Establish Express and instructing Node (act 11)
var express = require("express");
var app = express();

//Establish Port with fail safe
var PORT = process.env.PORT || 6969;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//friend taught me this bit?
app.use(express.static('utility'));
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
