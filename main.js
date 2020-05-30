function get_random_alphanumeric() {
	var crypto = window.crypto

	var randomValue = new Uint8Array(1)

	match_string = "["
	if(document.getElementById('include_lowercase').checked) {
		match_string += "a-z"
	}
	if(document.getElementById('include_uppercase').checked) {
		match_string += "A-Z"
	}
	if(document.getElementById('include_numbers').checked) {
		match_string += "0-9" 
	}
	if(document.getElementById('include_symbols').checked) {
		match_string += "\!\@\#\$\%\^\*\\-\=\_\+"
	}
	match_string += "]"

	if(match_string != "[]") {
		while(!String.fromCharCode(randomValue[0]).match(new RegExp(match_string))) {
				crypto.getRandomValues(randomValue)
		}
	}

	randomValue = String.fromCharCode(randomValue[0])

	return randomValue
}
var pw_html_show = ''
var pw_html_hide = ''
var pw_val = ''
function display_random_alphanumeric(val) {
	pw_html_show = '<p style="word-break:break-all; font-family:Courier New; font-size:25px; font-weight:bold; letter-spacing:7px;">'
	pw_html_hide = pw_html_show
	pw_val = ''

	for (var i = 0; i < val; i++) {
		x = get_random_alphanumeric()
		if(x.match(/[0-9]/)) {
			pw_html_show += '<span style="color:blue;">' + x + "</span>"
		} else if(x.match(/[!@#\$%\^\*\-=_+]/)) {
			pw_html_show += '<span style="color:red;">' + x + "</span>"
		} else {
			pw_html_show += x
		}

		pw_html_hide += "*"
		pw_val += x
	}

	pw_html_show += '</p>'
	pw_html_hide += '</p>'

	if(document.getElementById('myInput').checked) {
		document.getElementById("random alphanumeric").innerHTML = pw_html_show
	} else {
		document.getElementById("random alphanumeric").innerHTML = pw_html_hide
	}
}

function CopyToClipboard(containerid) {
	navigator.clipboard.writeText(pw_val).then(function() {
		/* clipboard successfully set */
	}, function() {
		/* clipboard write failed */
	});
}
function myFunction() {
	if(document.getElementById('myInput').checked) {
		document.getElementById("random alphanumeric").innerHTML = pw_html_show
	} else {
		document.getElementById("random alphanumeric").innerHTML = pw_html_hide
	}
}