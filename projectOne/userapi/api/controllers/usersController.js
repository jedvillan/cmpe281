'use strict';

var ACI = require('amazon-cognito-identity-js');
var CUP = ACI.CognitoUserPool;
var salt = "cmpe281";
global.fetch = require("node-fetch");

var poolData = {
	UserPoolId: 'us-east-1_bZuWMxRis',
	ClientId: '5p5934kpes8sim6jtnsjcg5ics',
};

var userPool = new ACI.CognitoUserPool(poolData);

//var AWS = require('aws-sdk');
//AWS.config.region = 'us-east-1';
//AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//    IdentityPoolId: 'us-east-1:632a29cd-9c7b-4060-84b6-12f3e4139f20',
//});

exports.list_all_users = function(req, res) {
  let query = "SELECT * FROM users ORDER BY id ASC;";
  db.query(query, (err, result) => {
    if (err) 
      res.send(err);
    res.json(result);
  });
};

exports.add_new_user = function(req, res) {
	var attrList = [];
	var pswd  = req.query.password;
	var email = req.query.email;
	var dataEmail = {
		Name: 'email',
		Value: email,
	};
	//var firstname = req.query.firstname;
	//var dataFname = {
	//	Name: 'fname',
	//	Value: firstname,
	//};
	//var lastname  = req.query.lastname;
	//var dataLname = {
	//	Name: 'lname',
	//	Value: lastname,
	//};
	var attrEmail = new ACI.CognitoUserAttribute(dataEmail);
	//var attrFname = new ACI.CognitoUserAttribute(dataFname);
	//var attrLname = new ACI.CognitoUserAttribute(dataLname);
	
	attrList.push(attrEmail);
	//attrList.push(attrFname);
	//attrList.push(attrLname);

	userPool.signUp(email, 'password', attrList, null, function(err, result) {
		if (err) {
			res.send(err);
		} else { 
			res.json(result.userSub);
		}
	});

	//let query = "INSERT INTO appusers (date_created,email,password,firstname,lastname) VALUES (NOW(),'"+email+"','"+pswd+"','"+firstname+"','"+lastname+"')";
	//db.query(query, (err, result) => {
	//	if (err)
	//		res.send(err);
	//	res.json(result);
	//});
};

exports.read_a_user = function(req, res) {
  var email  = req.params.user_email;
  var password = req.params.password;
  let query = "SELECT * FROM appusers WHERE email='"+email+"';";
  db.query(query, (err, result) => {
    if (err)
      res.send(err);
    if (password == result[0].password) {
      res.send("ok");
    }  else {
      res.send("no_match");
    }
  });
};

//exports.update_a_user = function(req, res) {
//  Payroll.findOneAndUpdate({user_id: req.params.user_id}, req.body, {new: true}, function(err, user) {
//    if (err)
//      res.send(err);
//    res.json(user);
//  });
//};
//
//exports.delete_a_user = function(req, res) {
//  Payroll.remove({
//    user_id: req.params.user_id
//  }, function(err, user) {
//    if (err)
//      res.send(err);
//    res.json({ message: 'User entry successfully deleted' });
//  });
//};
