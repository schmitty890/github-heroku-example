// module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable serving of static files css, js, images
app.use(express.static(path.join(__dirname, "./app/public")));

// get all routes
require('./app/routing/htmlRoutes.js')(app);

// start express server.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});