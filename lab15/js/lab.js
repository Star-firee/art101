//lab assignment 15: AJAX
//Author: Elizabeth Tenorio
//date: 6th June 2024

const URL = "https://icanhazdadjoke.com/";

// create a button listener
$("#activate").click(function(){
  // call ajax
  $.ajax(ajaxObj);
})

// setup ajax object
const ajaxObj = {
  url: URL,
  // data: {},
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

// create ajax success callback (named)
function ajaxSuccess(data) {
  // console.log("Data:", data);
  // parse json
  const joke = data.joke;

  // put joke in output div
  $("#output").html(joke);
  
}


// create ajax error callback
function ajaxError(request,error){
	  console.log("Oops:", request, error);
}
