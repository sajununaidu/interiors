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
		window.location.href = "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tree2boxinteriors@gmail.com&subject="+subject+"&body="+"Hi%20tree2box"+message+"%0ABest%20regards%0A"+name;
	}
}

function clearBorder(id){
	document.getElementById(id).setAttribute("style","border:10px solid transparent");
}