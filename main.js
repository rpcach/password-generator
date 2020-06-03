var match_1 = ''
var match_2 = ''
var match_3 = ''
var match_4 = ''
var pw_html_show = ''
var pw_html_hide = ''
var pw_val = ''

function get_match_string() {
	match_1 = document.getElementById('include_lowercase').checked ? 'a-z' : ''
	match_2 = document.getElementById('include_uppercase').checked ? 'A-Z' : ''
	match_3 = document.getElementById('include_numbers').checked ? '0-9' : ''
	match_4 = document.getElementById('include_symbols').checked ? '\!\@\#\$\%\^\*\\-\=\_\+' : ''
	
	return "[" + match_1 + match_2 + match_3 + match_4 + "]"
}

function get_password(length, match_string) {
	if(match_string == '[]') {
		return ''
	}
	var crypto = window.crypto
	var res = ''

	for(var i = 0; i < length; i++) {
		var randomValue = new Uint8Array(1)

		while(!String.fromCharCode(randomValue[0]).match(new RegExp(match_string))) {
			crypto.getRandomValues(randomValue)
		}

		res += String.fromCharCode(randomValue[0])
	}

	if(	(res.match(new RegExp('[' + match_1 + ']')) === null & match_1 != '') |
		(res.match(new RegExp('[' + match_2 + ']')) === null & match_2 != '') |
		(res.match(new RegExp('[' + match_3 + ']')) === null & match_3 != '') |
		(res.match(new RegExp('[' + match_4 + ']')) === null & match_4 != '') ) {
		res = get_password(length, match_string)
	}

	return res
}

function get_password_html(length) {
	pw_val = get_password(length, get_match_string())

	pw_html_show = '<p>'

	for (let x of pw_val) {
		if(x.match(/[0-9]/)) {
			pw_html_show += '<span style="color:blue;">' + x + "</span>"
		} else if(x.match(/[!@#\$%\^\*\-=_+]/)) {
			pw_html_show += '<span style="color:red;">' + x + "</span>"
		} else {
			pw_html_show += x
		}
	}

	pw_html_show += '</p>'
	pw_html_hide = '<p>' + "*".repeat(length) + '</p>'

	set_pw_visibility()
}

function copy_password() {
	navigator.clipboard.writeText(pw_val)
}

function set_pw_visibility() {
	document.getElementById("password").innerHTML = document.getElementById('myInput').checked ? pw_html_show: pw_html_hide
}