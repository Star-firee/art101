//lab assignment 11: JavaScript Events and forms
//Author: Elizabeth Tenorio
//date: 16th May 2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}
 
// click listener for button
$("#submit").click(function(){
  
  // get value of input field
  const userName = $("#user-name").val();
           
   // now let's sort it
  userNameSorted = sortString(userName)
  

   // append a new div to our output div
   $("#output").html('<div class="text"><p>' + "Your name isss "+ userNameSorted + '</p></div>');
});

//button
$("#output").append("<button class='cool-button'>  !! And some Dots Button !!  </button>");
$(".cool-button").click(function(){
    $("#content").toggleClass("special"); 
    $(".minor-section").toggleClass("special"); 
    $(".headlines").toggleClass("special"); 
}); 

$("#output").append("<button class='stripes-button'>  !! And some stripes Button !!  </button>");
$(".stripes-button").click(function(){
    $("#content").toggleClass("stripes"); 
    $(".minor-section").toggleClass("stripes"); 
    $(".headlines").toggleClass("stripes"); 
}); 
