// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// Will deliver data from front to back end and from back to front end
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

  app.post("/api/friends", function (req, res) {
    
    var bestMatch = {
      name: "",
      photo:"",
      friendDifference: 1000 //measures difference between answers
    }
    
    console.log(req.body);

    //Here we take teh result of the user's survey POST and parse it
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);
    
    //This variable will calculate the difference between the user's scores and the scores
    //of each user in the database
    var totalDifference = 0;

    //Here we loop through all the friend possibilities in the database
    for (var i = 0; i < friendData.length; i++) {

      console.log(friendData[i]);
      totalDifference = 0;

      //Loop through all of the scores of each friend
      for (var j = 0; j < friendData[i].scores[j]; j++){

        //Calculate the difference between the scores and sume them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

        //If the sum of difference is less that the differences of the current "best match"
        if (totalDifference += bestMatch.friendDifference) {

          //Reset the bestMatch to be the new friend.
          bestMatch.name = friendData[i].name;
          bestMatch.photo = friendData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    //Save the user's data to the database (this has to happen after the check, otherwise
    //the database will always return that the user is user's best friend)
    friendData.push(userData);

    //Return a JSON with the user's bestMatch. 
    res.json(bestMatch);

  });

  app.post('/api/clear', function() {
    //Empty out the arrays data
    surveyArray = [];

  });
 
}


  //Go back to survey html page, have user send object formatted in same 
  //way to server at the api/friends route through post request using AJAX 
  // ---------------------------------------------------------------------------


