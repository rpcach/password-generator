var match_1 = ''
var match_2 = ''
var match_3 = ''
var match_4 = ''
function get_random_alphanumeric() {
	var crypto = window.crypto

	var randomValue = new Uint8Array(1)

	match_1 = document.getElementById('include_lowercase').checked ? 'a-z' : ''
	match_2 = document.getElementById('include_uppercase').checked ? 'A-Z' : ''
	match_3 = document.getElementById('include_numbers').checked ? '0-9' : ''
	match_4 = document.getElementById('include_symbols').checked ? '\!\@\#\$\%\^\*\\-\=\_\+' : ''
	
	var match_string = "[" + match_1 + match_2 + match_3 + match_4 + "]"

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
	do {
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

	} while (
		(pw_val.match(new RegExp('[' + match_1 + ']')) === null & match_1 != '') |
		(pw_val.match(new RegExp('[' + match_2 + ']')) === null & match_2 != '') |
		(pw_val.match(new RegExp('[' + match_3 + ']')) === null & match_3 != '') |
		(pw_val.match(new RegExp('[' + match_4 + ']')) === null & match_4 != '')
	)

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
function toggle_pw_visibility() {
	if(document.getElementById('myInput').checked) {
		document.getElementById("random alphanumeric").innerHTML = pw_html_show
	} else {
		document.getElementById("random alphanumeric").innerHTML = pw_html_hide
	}
}