// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information 
// ===============================================================================

var friendData = require("../data/friends.js");
var express = require('express');
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  // app.post('/api/friends', function (req, res) {
  //   //Note the code here. Our "server" will respond to request and let users know if they have a table or not.
    
  //   var currentUserScores = req.body.scores;
  //   var lowestDifference = 80;
  //   var difference = 0;
  //   var bestMatch = friendData[0];

  //   for(var i = 0; i < friendData.length; i++) {
  //     var possibleMatchScores = friendData[i].scores;
  //     for(var x = 0; x < possibleMatchScores.length; x++) {
  //       difference += Math.abs(currentUserScores[x] - possibleMatchScores[x]);
  //     }

  //     if (difference <= lowestDifference) {
  //       lowestDifference = difference;
  //       bestMatch = surveyData[i];
  //     }

  //       difference = 0;

  //   }

  // friendData.push(req.body);

  // res.json(bestMatch); 



  // });

  app.post('/api/clear', function() {
    //Empty out the arrays data
    surveyArray = [];

  });
 
}

  // ---------------------------------------------------------------------------


