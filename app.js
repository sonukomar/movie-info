/*
 * @ Module name   - Movie information system
 * @ Author        - Sonu Kumar
 * @ Creation Date - 16th July 2016
 * @ Last Modified - 16th July 2016
 *
 */
   
/* Importing all the required modules */

var express = require('express');

var app     = express();

var path    = require('path');

/* Routes */
var routes = require('./routes');

app.get('/',routes.home);

app.get('*',routes.notFound);

/* Setting name of template engine used */
app.set('view engine','ejs');


/* Setting path for static files */
app.use(express.static(path.join(__dirname,'public')));


/* Starting the server and listening on port */
var server  = app.listen(3000, function(){

        console.log("Server is up and running at localhost:3000");

        });
