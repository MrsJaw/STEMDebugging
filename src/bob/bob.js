var Bob = function() {};

Bob.prototype.hey = function(input) {
	if ( input === undefined || input === null || input.trim().length === 0 ) {
		return "Fine. Be that way!";
	}
	
	var hasLowerCase = input.match(/[a-zäëïöüáéíóúàèìòùñçß]/);
	var hasUpperCase = input.match(/[A-ZÄËÏÖÜÁÉÍÓÚÀÈÌÒÙÑÇ]/);
	
	if ( !hasLowerCase && hasUpperCase ) {
		return 'Whoa, chill out!';		
	}
	
	if ( input.indexOf("?") == input.length-1 ) {
		return "Sure.";
	}
	
	return "Whatever.";	
};
