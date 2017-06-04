// ===============================================================================
// DEPENDENCIES
//route to html file to deliver to client
// We need to include the path package to get the correct file path for our html
// ===============================================================================

//For making page delivery easy with express
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

//Routes placed in module.exports so that they can be included in server
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};