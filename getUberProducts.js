// create https object
var https = require("https");
    // create string to call Uber API
  string = 'https://api.uber.com/v1/products?server_token=<myToken>'+
  '&latitude=<latitude>&longitude=<longitude>';
  // create request object
  var req = https.request(string, function (res) {
    var responseString = "";
    // get response object
    res.on("data", function (data) {
        responseString += data;
        // print response
        console.log(responseString);
    });
    // handle error
    res.on("error", function () {
        console.log(responseString); 
    });   
});
req.end();