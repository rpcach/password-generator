function get_random_alphanumeric() {
	var crypto = window.crypto

	var randomValue = new Uint8Array(1)
	randomValue[0] = 64

	while(randomValue[0] > 62) {
		crypto.getRandomValues(randomValue)
		randomValue[0] = (randomValue[0] % 64 + 1)
	}
	randomValue = randomValue[0]

	if(randomValue >= 1 & randomValue <= 10) {
		randomValue = String.fromCharCode(47 + randomValue)
	} else if(randomValue >= 11 & randomValue <= 36) {
		randomValue = String.fromCharCode(54 + randomValue)
	} else if(randomValue >= 37 & randomValue <= 62) {
		randomValue = String.fromCharCode(60 + randomValue)
	}

	return randomValue
}

function display_random_number() {
	var string = "<pre>"
	
	for (var i = 0; i < 20; i++) {
		string += get_random_alphanumeric() + " "
	}
	string += "</pre>"

	document.getElementById("random number").innerHTML = string
}