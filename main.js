function get_random_number() {
	var random_number = Math.floor(Math.random()*10)

	return random_number
}

function display_random_number() {
	var string = "<pre>"
	
	for (var i = 1; i <= get_random_number()+1; i++) {
		string += get_random_number()
	}
	string += "</pre>"

	document.getElementById("random number").innerHTML = string
}