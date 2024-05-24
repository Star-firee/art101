//lab assignment 12: Conditionals
//Author: Elizabeth Tenorio
//date: 23rd May 2024

function sortingHat (str){
   length = str.length;
   mod = length % 4;
   if (mod==0){
       return "Gryffindor";
   } 
   else if (mod == 1){
    return "HufflePuff";
   }
   else if (mod == 2){
    return "RavenClaw";
   }
   else if(mod== 3){
    return "Slytherin";
   }
};

$("#button").click(function(){
  let input = $("#input").val();
  let house = sortingHat(input); 
  let description = sortingHatDescription(input);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>" +
  "<p>" + description + "</p>";
  document.getElementById("output").innerHTML = newText; 
});

function sortingHatDescription (str){
  length = str.length;
  mod = length % 4;
  if (mod==0){
      return "Gryffindor is one of the four houses at Hogwarts School of Witchcraft and Wizardry in Harry Potter. It's for students who are brave, courageous, and determined, and its colors are scarlet and gold, with a lion as its emblem. The house ghost is Sir Nicholas de Mimsy-Porpington, also known as Nearly Headless Nick";
  } 
  else if (mod == 1){
   return "In J.K. Rowling's Harry Potter series, Hufflepuff is one of four houses at Hogwarts, where students are sorted based on their characteristics. Hufflepuff is known for its members' hard work, patience, loyalty, and fairness. Hufflepuffs are also known for being kind, reliable, and honest.";
  }
  else if (mod == 2){
   return "In the Harry Potter Wizarding World, Ravenclaw is one of Hogwarts' four houses, and its students are known for their wit, wisdom, and learning. The Sorting Hat only places students in Ravenclaw if they demonstrate these qualities. Ravenclaws are also known for being creative, original, and eccentric, and for producing many of the wizarding world's great inventors and innovators.";
  }
  else if(mod== 3){
   return "In Harry Potter, Slytherins are known for being ambitious, cunning, and resourceful. They are also associated with traits such as shrewdness, traditionalism, and a tendency to look after themselves instead of others. Slytherins are goal-oriented and determined, and are willing to do what it takes to achieve their goals, even if it means breaking the rules. They are also very proud of their house and heritage, and are competitive in winning the house cup or Quidditch tournaments.";
  }
};
