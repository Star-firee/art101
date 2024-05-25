//lab assignment 12: Conditionals
//Author: Elizabeth Tenorio
//date: 24th May 2024


  //Loop through numbers 1 to 200, listing them as you go
  for (let i= 1; i <= 200; i++){
  console.log(i); 
  let str = "";
  if (i % 3 == 0) {
    str += "Fizz";
  }
  if (i % 5 == 0) {
    str += "Buzz";
  }  
  if (i % 7 == 0) {
    str += "Boom";
  }
  if (str == "") {
    console.log(i);
    $("#output").append("<p class='num'>" + i);
  } 
   else {
    console.log(str + '!');
    $("#output").append("<p class='text'>" + str + '!');
  }
  }