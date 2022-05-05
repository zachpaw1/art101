/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: May 4th, 2022
 * License: Public Domain
 */

//getting Element by the Output Id
outputEl = document.getElementById("Output");

//Here, we create a new element, and write text in the HTML
new1El = document.createElement('h3');
new1El.innerHTML = "Hello there!";

//now, we append new1El to outputEl, and change the font and fontSize
outputEl.appendChild(new1El);
new1El.style.font = "Times New Roman";
new1El.style.fontSize = "50pt";

//now we do the exact same thing, but with new2El
new2El = document.createElement('p2');
new2El.innerHTML = "General Kenobi.";
outputEl.appendChild(new2El);
new2El.style.font = "Courier";
new2El.style.fontSize = "30pt";

//3rd times the charm, but NOW with new3El
new3El = document.createElement('p3');
new3El.innerHTML = " (May the 4th be with you!)";
outputEl.appendChild(new3El);
new3El.style.font = "Courier";
new3El.style.fontSize = "15pt";
