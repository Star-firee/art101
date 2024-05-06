// lab 8: Anons and Callbacks
// Author: Elizabeth Itzel Tenorio
// Date: 5th May 2024


//create an array, assign it to a variable 

function multiply(x){
  var results= x*2;
  return results;
}

//test function
console.log("What is -17.89*2? ", multiply(-17.89));
console.log("What is 110*2? ", multiply(110));

//array 
var numberArray=[2,90,3.5,24,110,-8 ]; 
console.log("My array ", numberArray);

//callback for function
numberArray.map(multiply);
console.log("Test the multiply function on my array ", numberArray.map(multiply)); 

//new anonymous function
var product= numberArray.map(function(x){
  let product= x+30; 
  return product; 
})
//results of map function
console.log("My array plus 30: ", product); 

 // Your map results data
var mapResults = 
"Original array: " + "[" + numberArray + "]" + "<br>" + 
"Array multiplied by 2: "+ "[" +numberArray.map(multiply) +  "]" + "<br>" + 
"Array plus 30: " + "["+ product + "]";


// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);
