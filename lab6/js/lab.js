// lab 6: learning arrays and objects in JavaScript
// Author: Elizabeth Itzel Tenorio
// Date: 25th April 2024


//defining array and variables 
const myTransport =["drive", "walk", "take the bus"]; 

//defining and creating an object for my main ride
var myMainRide = {
    make: "Chevy",
    model: "Malibu",
    color: "silver",
    year: 2017,
    age: function(){
        return 2024 - this.year;
    }
}

//output 
document.writeln("Types of transportations I use: " ,myTransport, "</br>");

//how to write an object in a document!
document.writeln("My Main Ride: <pre>", 
        JSON.stringify(myMainRide, null, '\t'), "</pre>"); 
