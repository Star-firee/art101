//lab assignment 16: JSONS & APIS
//Author: Elizabeth Tenorio
//date: 6th June 2024

const URL = "https://xkcd.com/info.0.json";

// create a button listener
$("#my-button").click(function(){
  console.log("Click");
  // call ajax
  $.ajax(comicObj);
})


// construct ajax object
const comicObj = {
  url: URL,
  // data: {

  //  },
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

function ajaxSuccess(data){
  console.log("Results:", data);
   // parse json
   const comicObj = data[0];
   const title = data.title;
   const imageURL = data.img;
   const alt = data.alt;
   //const date = comicObj.date;
 
   // put stuff in output div
   $("#output").html("<h1>" + title);
   $("#output").append("<img id ='hotdog' src='" + imageURL + "' />")
   $("#output").append("<p class='alt'>" + alt);
   //$("#output").append("<p class='description'>" + description);
}

function ajaxError(request,error){
      console.log("Oops:", request, error);
}

