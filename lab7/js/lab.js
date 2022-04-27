/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: April 27th, 2022
 * License: Public Domain
 */

// sortUserName is a function that takes in user input and sorts the letters of the
// name they give
function sortUserName () {
  var userName = window.prompt("Hi there! What's your name?");
  console.log("username = ", userName);

  // split the string into the array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //this next variable will sort the array
  var nameSortArray = nameArray.sort();
  console.log("nameSortArray = ", nameSortArray);

  //joins the array back into a string
  var nameSorted = nameSortArray.join('');
  console.log("nameSorted = ", nameSorted);

  return nameSorted;
};

// output
document.writeln("Wow! Looks like your name is this is your name: ",
  sortUserName(), "</br>");
