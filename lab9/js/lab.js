//lab assignment 9: creating buttons with functions in jQuery
//Author: Elizabeth Tenorio
//date: 11th May 2024

//create a button to put in the challenge section of the html index 
$(".minor-section").append("<button id='button-challenge'>click here!</button>");


function turnLavender(){
  $(".minor-section").toggleClass("special");
}

$(".minor-section").click(turnLavender)

