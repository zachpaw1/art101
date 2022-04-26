/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: April 25th, 2022
 * License: Public Domain
 */

 // define variables
 myTransport = ['Bus ', 'Walking ', 'Car '];
 myMainRide = {
   make: 'Bus',
   model: 'Santa Cruz',
   color: "White and Blue",
   year: 2008,
   ownIt: false,
 };

 // write line output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre");
