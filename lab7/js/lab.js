// lab 7: Functions
// Author: Elizabeth Itzel Tenorio
// Date: 2nd May 2024

//returns case insensitive 
function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

function sortNameFunction(){
    //enter name
    var userName =  window.prompt("Hii what's your name?");
    console.log("username= ", userName);
    
    //split the array
    var userNameSplit= userName.split(''); 
    console.log("name array= ", userNameSplit); 
    
    //sort the array
    var userNameSort= userNameSplit.sort(case_insensitive_comp); 
    console.log("name sort= ", userNameSort); 

    //join the sorted array
    var userNameJoined= userNameSort.join('');
    console.log("name joined= ", userNameJoined); 

    //return the sorted array 
    return userNameJoined; 
} 

//output 
document.writeln("Your new name!! ",
    sortNameFunction(), "<br>"); 