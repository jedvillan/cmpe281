var user = "1010";
var fileapi =  "https://fmd.mymsseprojects.com/fileapi";
var bucket = "https://cmpe281projectone.s3.amazonaws.com/";
var files;
var links = [];
var tokens;

function initPage() {
	getTokens();
	getBucketContents();
}

function getTokens() {
	if (localStorage.getItem('tokens') === null) {
		window.location = "https://www.mymsseprojects.com/user";
	} else {
		window.tokens = JSON.parse(localStorage.getItem('tokens'));
	}
}

function getBucketContents() {
	let user = window.user;
	$.ajax({
		url: window.fileapi,
		type: "GET",
		dataType: "json"
	}).done(function(data) {
		window.files = data;
		getDownloadLinks();
		renderMainContainer();
	});
}

function downloadFile(fileKey) {
	$.ajax({
		url: window.fileapi + "/" + fileKey,
		type: "GET"
	}).done(function(data) {
		console.log("DONE");
	});
}

function uploadFile() {
	let pic = document.getElementById("my_file").files;

	console.log(pic);

	if (!pic.length) {
		return alert("Please choose a file...");
	}

	var file = new FormData();
	file.append('file', pic[0]);
	
	$.ajax({
		url: window.fileapi,
		type: "POST",
		data: file,
		processData: false,
		contentType: false
	}).done(function(data) {
		if (data == "ok") {
			location.reload();
		}
	});
}

function deleteFile(fileKey) {
	$.ajax({
		url: window.fileapi + "/" + fileKey,
		type: "DELETE"
	}).done(function(data) {
		if (!data.statusCode) {
			location.reload();
		} else {
			alert("Error: " + data.message);
		}
	});
}

function getDownloadLinks() {
	let files = window.files.Contents;

	for (f in files) {
		$.ajax({
			url: window.fileapi + "/" + files[f].Key,
			type: "GET",
			dataType: "html",
			async: false
		}).done(function(data) {
			window.links[f] = data;
		});
	}
}

function signOut() {
	localStorage.removeItem('tokens');
	window.location = "https://www.mymsseprojects.com/user";
}

function renderMainContainer() {
	let files = window.files.Contents;
	let links = window.links;

	$('#root').empty();
	$('#root').append(
		"<div class='container-fluid main-container' id='main_container'>"
		+"</div>"
	);
	$('#main_container').append(
		"<nav class='navbar navbar-light bg-light' style='margin-bottom: 50px;'>"
			+"<h4>Welcome!</h4>"
			+"<a href='#' onclick='signOut();'><i class='fas fa-sign-out-alt fa-2x'></i></a>" 
		+"</nav>"
		+"<div class='container' style='margin-bottom: 20px;'>"
			+"<div class='form-row align-items-center'>"
				+"<div class='col-sm-9'>"
					+"<input type='file' id='my_file' accept='image/*' style='border: 1px solid #333; border-radius: 6px;'>"
				+"</div>"
				+"<div class='col-sm-3'>"
					+"<button type='button' class='btn btn-primary btn-sm' onclick='uploadFile();'>"
						+"Upload"
					+"</button>"
				+"</div>"
			+"</div>"
		+"</div>"
	);
	$('#main_container').append("<div class='card-columns' id='card_group'></div>");
	for (f in files) {
		let file = files[f];
		$('#card_group').append(
			"<div class='card' style='width: 18rem;'>"
				+"<div class='card-header'>"
					+file.Key
					+"<a style='float: right;' href='#' onclick='deleteFile(\""+file.Key+"\");'>"
					+"<i class='fa fa-trash fa-2x' style='color: #999999; margin-left: 5px;'></i>"
					+"</a>"
					+"<a style='float: right;' download='"+file.Key+".jpg' href='"+links[f]+"'>"
					+"<i class='fas fa-cloud-download-alt fa-2x'></i>"
					+"</a>"
				+"</div>"
				+"<div class='card-body'>"
					+"<img src='"+links[f]+"' class='card-img-bottom' alt='"+file.Key+"'>"
				+"</div>"
				+"<div class='card-footer'>"
					+"<p>Last Modified:</p>"
					+file.LastModified
				+"</div>"
			+"</div>"
		);
	}
	$(".btn").click(function() {
		$(this).prop("disabled", true);
		$(this).html(
	  '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...'
	);
    });
}

