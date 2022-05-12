/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: May 11th, 2022
 * License: Public Domain
 */

// The first button, which is in the Challenges section
$("#button1").click(function(){
  $("#text").toggleClass("special");
});

// The second button, which is in the Problems section
$("#button2").click(function(){
  $("#text2").toggleClass("special2")
});

// The third button, which is in the Results section
$("#button3").click(function(){
  $("#text3").toggleClass("special3")
});

// The fourth button, which SHOULD change the color of the fifth button!
$("#button4").click(function(){
  $("#button5").toggleClass("special5")
});
