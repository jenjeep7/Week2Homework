$(function(){
//variables that store the objects from API
  var movieOne ={};
  var movieTwo = {};
  var movieThree ={};

//Functions for the 3 buttons
  $(".mov1").on("click", function(){
    $(this).remove();
    $("#movie1").append("<h2>"+movieOne.Title+"</h2>"+"<p> Actors: "+movieOne.Actors+"</p>");
    $("#movie1").append("<img src=\"http://ia.media-imdb.com/images/M/MV5BMjEyOTk1OTcyNV5BMl5BanBnXkFtZTYwNjMzNDU3._V1_SX300.jpg\" />");
    $("#movie1").append("<p>"+movieOne.Plot+"</p>");
  });

  $(".mov2").on("click", function(){
    $(this).remove();
    $("#movie2").append("<h2>"+movieTwo.Title+"</h2>"+"<p> Actors: "+movieTwo.Actors+"</p>");
    $("#movie2").append("<img src=\"http://ia.media-imdb.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg\" />");
    $("#movie2").append("<p>"+movieTwo.Plot+"</p>");
  });

  $(".mov3").on("click", function(){
    $(this).remove();
    $("#movie3").append("<h2>"+movieThree.Title+"</h2>"+"<p> Actors: "+movieThree.Actors+"</p>");
    $("#movie3").append("<img src=\"http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg\" />");
    $("#movie3").append("<p>"+movieThree.Plot+"</p>");
  });

//Ajax retreival from the api.  3 different requests sent
  $.ajax({
    url: 'http://www.omdbapi.com/?t=Miracle&y=&plot=short&r=json',
    type: 'GET'
  }).done(function(response){
    console.log(response);
    movieOne = response;
  });

  $.ajax({
    url: 'http://www.omdbapi.com/?t=Ratatouille&y=&plot=short&r=json',
    type: 'GET'
  }).done(function(response){
    console.log(response);
    movieTwo = response;
  });

  $.ajax({
    url: 'http://www.omdbapi.com/?t=the+martian&y=&plot=short&r=json',
    type: 'GET'
  }).done(function(response){
    console.log(response);
    movieThree = response;
  });

});
