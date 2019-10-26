var express = require('express'),
  app    = express(),
  port   = process.env.PORT || 3000,
  Models = require('./api/models/fileapiModels'), //created model loading here
  bodyParser = require('body-parser'),
  multer = require('multer'),
  multerS3 = require('multer-s3');

var cors = require('cors');
var fs = require('fs');
var fileUpload = require('express-fileupload');

app.use(fileUpload());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/fileapiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('FILE RESTful API server started on: ' + port);
