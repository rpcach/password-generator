function get_random_alphanumeric() {
	var crypto = window.crypto

	var randomValue = new Uint8Array(1)

	while(!String.fromCharCode(randomValue[0]).match(/[a-zA-Z0-9!@#\$%\^\*\-=_+]/)) {
		crypto.getRandomValues(randomValue)
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
	if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
		document.execCommand("copy");
		window.getSelection().removeAllRanges();
	}
}
function myFunction() {
	if(document.getElementById('myInput').checked) {
		document.getElementById("random alphanumeric").innerHTML = pw_html_show
	} else {
		document.getElementById("random alphanumeric").innerHTML = pw_html_hide
	}
}