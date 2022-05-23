/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: May 9th, 2022
 * License: Public Domain
 */


// sortUserName is a function that takes in user input and sorts the letters of the
// name they give


var button = document.getElementById("my-button");

function sortUserName() {
  var username = document.getElementById("user-name").value;
  console.log("username = ", username);
  var nameArray = username.split('');
  console.log("nameArray = ", nameArray);
  var nameSortArray = nameArray.sort();
  console.log("nameSortArray = ", nameSortArray);
  var nameSorted = nameSortArray.join('');
  console.log("nameSorted = ", nameSorted);
  var output = document.getElementById("Output");
  output.innerText = "Hello " + nameSorted;
  console.log(output);
  return nameSorted;
};

button.addEventListener('click', sortUserName);
