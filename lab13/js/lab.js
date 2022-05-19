/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: May 18th, 2022
 * License: Public Domain
 */
let str = "";

//The for loop
for (i=1; i <= 200; i++) {

    // BuzzBoom First
    if (i%35 == 0) {
      str += i + " BuzzBoom!" + "<br>";
      $("#Output").html(str);
      console.log(i + " BuzzBoom!");

      //FizzBoom next
    } else if (i%21 == 0) {
      str += i + " FizzBoom!" + "<br>";
      $("#Output").html(str);
      console.log(i + " FizzBoom!");

      //FizzBuzz next
    } else if (i%15 == 0) {
      str += i + " FizzBuzz!" + "<br>";
      $("#Output").html(str);
      console.log(i + " FizzBuzz!");

      //Boom
    } else if (i%7 == 0) {
      str += i + " Boom!" + "<br>";
      $("#Output").html(str);
      console.log(i + " Boom!");

      //Buzz
    } else if (i%5 == 0) {
      str += i + " Buzz!" + "<br>";
      $("#Output").html(str);
      console.log(i + " Buzz!");

      //Fizz
    } else if (i%3 == 0) {
      str += i + " Fizz!" + "<br>";
      $("#Output").html(str);
      console.log(i + " Fizz!");

      //Else
    } else {
      str += i + "<br>";
      $("#Output").html(str);
      console.log(i);
    }
}
