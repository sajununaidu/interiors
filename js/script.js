( function( $ ) {
$( document ).ready(function() {
$('#treeboxMenu').prepend('<div id="menu-button">TREE2BOXINTERIORS</div>');
	$('#treeboxMenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
			document.getElementById("showName").setAttribute("style","display:block");
		}
		else {
			menu.addClass('open');
			document.getElementById("showName").setAttribute("style","display:none");
		}
	});
});
} )( jQuery );

function sendMail(){
	console.log("aaaaa");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	 
	if (name === null || name === "" || email === null || email === null || subject === "" || subject === null || message === "" || message === null ){
		if (name === null || name === ""){
			document.getElementById("name").setAttribute("style","border:10px solid red");
		}
		if (email === "" || email === null){
			document.getElementById("email").setAttribute("style","border:10px solid red");
		}
		if (subject === "" || subject === null){
			document.getElementById("subject").setAttribute("style","border:10px solid red");
		}
		if (message === "" || message === null){
			document.getElementById("message").setAttribute("style","border:10px solid red");
		}
	}else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
		document.getElementById("email").setAttribute("style","border:10px solid red");
	}else {
		console.log(message,name,email,subject);
		message = message.replaceAll("/\\\\/", "%5C");
		message = message.replaceAll(" ", "%20");
		message = message.replaceAll("\r", "%0D");
		message = message.replaceAll("\n", "%0A");
		message = message.replaceAll("\t", "%09");
	//	https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=target@email.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%2C%0A%0AI%20tried%20contacting%20you%20today%20but%20you%20seem%20to%20have%20missed%20my%20call.%20%0A%0APlease%20return%20my%20call%20as%20soon%20as%20you%E2%80%99re%20available.%20%0A%0AIn%20any%20case%2C%20I%20will%20try%20ringing%20you%20at%20a%20later%20time.%0A%0A%0ATy%2C%0A%0A%0A%0A

		window.location.href = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tree2boxinteriors@gmail.com&subject="+subject+"&body="+"Hi%20tree2box"+message+"%0ABest%20regards%0A"+name;
	}
}

function clearBorder(id){
	document.getElementById(id).setAttribute("style","border:10px solid transparent");
}