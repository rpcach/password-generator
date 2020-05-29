function get_random_alphanumeric() {
	var crypto = window.crypto

	var randomValue = new Uint8Array(1)

	while(!String.fromCharCode(randomValue[0]).match(/[a-zA-Z0-9]/)) {
		crypto.getRandomValues(randomValue)
	}

	randomValue = String.fromCharCode(randomValue[0])

	return randomValue
}

function display_random_alphanumeric(val) {
	var string = '<p style="font-family:Courier New; display:inline; font-size:25px; font-weight:bold; letter-spacing:7px; word-wrap:break-word;">'
	
	for (var i = 0; i < val; i++) {
		x = get_random_alphanumeric()
		if(x.match(/[0-9]/)) {
			string += '<span style="color:blue;">' + x + "</span>"
		} else {
			string += x
		}
	}

	string += '</p>'

	document.getElementById("random alphanumeric").innerHTML = string
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