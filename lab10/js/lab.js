/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: May 9th, 2022
 * License: Public Domain
 */


// sortUserName is a function that takes in user input and sorts the letters of the
// name they give

var button = document.getElementById('my-button');

function thisIsMyName() {
  sortUserName = document.getElementById('user-name').value;
  console.log("Your input: ", sortUserName);

  nameArray = sortUserName.split('');
  console.log("Name Array = ", nameArray);

  nameSortArray = nameArray.sort();
  console.log("Name Sort Array = ", nameSortArray);

  nameSorted = nameSortArray.join('');
  console.log("Name Sorted = ", nameSorted);

  return nameSorted;
};

button.addEventListener('click', thisIsMyName);


// button.addEventListener('click', function() {
//
//   sortUserName = document.getElementById('user-name').value;
//   console.log("Your input: ", sortUserName);
//
//   nameArray = sortUserName.split('');
//   console.log("Name Array = ", nameArray);
//
//   nameSortArray = nameArray.sort();
//   console.log("Name Sort Array = ", nameSortArray);
//
//   nameSorted = nameSortArray.join('');
//   console.log("Name Sorted = ", nameSorted);
//
//   return nameSorted;
//
//   var h3 = document.querySelector('h3');
//
//   h3.innerText = "Hello " + nameSorted;
//   console.log("H3 ", h3);
//
// });

// button.addEventListener('click', sortUserName);
//
// document.writeln("Wow! Looks like your name is this is your name: ",
//   sortUserName(), "</br>");
