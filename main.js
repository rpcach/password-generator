function get_random_alphanumeric() {
	var crypto = window.crypto

	var randomValue = new Uint8Array(1)

	while(!String.fromCharCode(randomValue[0]).match(/^[a-zA-Z0-9]$/)) {
		crypto.getRandomValues(randomValue)
	}

	randomValue = String.fromCharCode(randomValue[0])

	return randomValue
}

function display_random_alphanumeric() {
	var string = '<br>'
	
	for (var i = 0; i < 20; i++) {
		string += '<pre style="display:inline; padding-right:8px;">' + get_random_alphanumeric() + "</pre>"
	}

	document.getElementById("random alphanumeric").innerHTML = string
}