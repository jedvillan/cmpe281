'use strict';

var multer = require('multer');
var multerS3 = require('multer-s3');
var fs = require('fs');

var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:632a29cd-9c7b-4060-84b6-12f3e4139f20',
});
var s3 = new AWS.S3({
	apiVersion: '2006-03-01',
	params: { Bucket: 'cmpe281projectone' }
});

exports.list_all_files = function(req, res) {
	s3.listObjects(function(err, data) {
		if (err) {
	        	res.send(err);
		}
		res.json(data);
	});
};

exports.upload_an_object = function(req, res) {
	var file = req.files.file;
	var fileName = file.name;
	var base64file = new Buffer(file.data.buffer, 'binary');

	var upload = new AWS.S3.ManagedUpload({
		params: {
			Bucket: "cmpe281projectone",
			Key: Date.now().toString(),
			Body: base64file,
			ACL: "public-read"
		}
	});

	var promise = upload.promise();

	promise.then(
		function(data) {
			res.send("ok");
		},
		function(err) {
			res.send(err);
		}
	);
};

exports.get_object = function(req, res) {
	console.log("Getting called");
	//let params = {Key: req.params.fileKey }
	let params = { Bucket: 'cmpe281projectone', Key: req.params.fileKey }
	//res.attachment(req.params.fileKey);
	//var fileStream = s3.getObject(params).createReadStream();
	//fileStream.pipe(res);
	s3.getSignedUrl('getObject', params, function(err, url) {
		if (err) {
			res.send(err);
		}
		res.send(url);
	});
};

//exports.update_a_task = function(req, res) {
//  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//    if (err)
//      res.send(err);
//    res.json(task);
//  });
//};
//
exports.delete_an_object = function(req, res) {
	let key = req.params.fileKey
	s3.deleteObject({ Key: key }, function(err, data) {
		if (err) {
			res.send(err);
		} else {
			res.json(data);
		}
	});
};
