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

var AWS = require('aws-sdk');
	AWS.config.region = 'us-east-1';
	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'us-east-1:632a29cd-9c7b-4060-84b6-12f3e4139f20',
});

exports.auth_a_user = function(req, res) {
  var email  = req.body.email;
  var password = req.body.password;
  var aData = {
  	Username: email,
	Password: password
  };
  var aD = new ACI.AuthenticationDetails(aData);
  var uData = {
  	Username: email,
	Pool: userPool
  };

  var cU = new ACI.CognitoUser(uData);
  cU.authenticateUser(aD, {
  	onSuccess: function(result) {
		res.json(result);
	},
	onFailure: function(err) {
		res.send(err);
	},
  });

  /*
   * For locally hosted MySQL
   * */

  //let query = "SELECT * FROM appusers WHERE email='"+email+"';";
  //db.query(query, (err, result) => {
  //  if (err)
  //    res.send(err);
  //  if (password == result[0].password) {
  //    res.send("ok");
  //  }  else {
  //    res.send("no_match");
  //  }
  //});
};

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
	var pswd  = req.body.password;
	var email = req.body.email;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	var dataEmail = {
		Name: 'email',
		Value: email,
	};
	var firstname = req.query.firstname;
	var dataFname = {
		Name: 'custom:fname',
		Value: firstname,
	};
	var lastname  = req.query.lastname;
	var dataLname = {
		Name: 'custom:lname',
		Value: lastname,
	};
	var attrEmail = new ACI.CognitoUserAttribute(dataEmail);
	var attrFname = new ACI.CognitoUserAttribute(dataFname);
	var attrLname = new ACI.CognitoUserAttribute(dataLname);
	
	attrList.push(attrEmail);
	attrList.push(attrFname);
	attrList.push(attrLname);

	userPool.signUp(email, pswd, attrList, null, function(err, result) {
		if (err) {
			res.send(err);
		} else { 
			res.json(result.userSub);
		}
	});

	/*
	 * For locally hosted MySQL
	 * */

	//let query = "INSERT INTO appusers (date_created,email,password,firstname,lastname) VALUES (NOW(),'"+email+"','"+pswd+"','"+firstname+"','"+lastname+"')";
	//db.query(query, (err, result) => {
	//	if (err)
	//		res.send(err);
	//	res.json(result);
	//});
};


