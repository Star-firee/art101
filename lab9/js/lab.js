//lab assignment 9: creating buttons with functions in jQuery
//Author: Elizabeth Tenorio
//date: 11th May 2024

//create a button to put in the minor sections of the html index 
$(".minor-section").append("<button class='button-challenge'>click here!</button>");

//function will toggle the minor section class to utilize the special css 

// add a click listener to the challenge button
$(".button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $(this).parent().toggleClass("special");
});
