const request = require('request');
const fs = require('fs');
const args = process.argv
console.log(args);
request(args[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was receive
  const r=body.length ;
 fs.writeFile (args[3], body,()=> {
  console.log(`Downloaded ${r} bytes and saved to ${args[3]}`); 
  });  // Print the HTML for the Google homepage.
});
