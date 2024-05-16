
console.log("Hello"); 
function sayMyNaeeeme(){
    //prompt the user to input their name
    let name= prompt("Name please:")
    //Use ths input to change the test of the h1 using
    $('#title').html('Hello'+" "+name+" :)")
}


$("#my-button").click(sayMyNaeeeme); 

