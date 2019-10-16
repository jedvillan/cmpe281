var user = "1010";

function initPage() {
	getBucketContents();
}

function getBucketContents() {
	let user = window.user;
	$.ajax({
		url: "http://ec2-3-231-58-114.compute-1.amazonaws.com:3000/fileapi",
		type: "GET",
		dataType: "json"
	}).done(function(data) {
		console.log(data);
	});
}


