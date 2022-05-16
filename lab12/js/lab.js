/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: May 16th, 2022
 * License: Public Domain
 */

 function sortingHat(str) {
   length = str.length;
   mod = length % 4;
   if (mod == 0) {
     return "Gryffindor!";
  } else if (mod == 1) {
    return "Ravenclaw!";
  } else if (mod == 2) {
    return "Slytherin!";
  } else if (mod == 3) {
    return "Hufflepuff!";
  }
}

$("#button").click(function(){
  userInput = $("input:text").val();
  console.log("Here I am!");
  houseName = sortingHat(userInput);
  console.log(houseName);
  newText = "<p>The Sorting Hat has decided! You are a " + houseName + "</p>";
  $("#Output").append(newText);
});
