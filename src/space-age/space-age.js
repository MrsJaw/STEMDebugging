
var SpaceAge = function(seconds) {
	var self = this;
	
	self.seconds = seconds;
	
	var earthYears = seconds / 31557600; //orbital period (year) in seconds
	
	var format = function(number) {
		//I had not restricted result to 2 decimal places
		//And toFixed returns a string
		//So looked up a way to return a two-decimal place number, but it seems like Number(x.toFixed(2)) is the normal way
		//then I decided to separate it out into it's own 'format' function
		return Number(number.toFixed(2));
	};
	
   //I messed up and used 'this.format()' and 'formatNumber()' instead of 'format()' 
	 // the first error was due to forgetting how I had format() declared, 
	 // and the second was a copy-pasting error		
	self.onEarth = function() {
		return format(earthYears);
	};
	
	//Ideally, all of these 'magic numbers' would be separated out into named variables
	// so that it's clear what they represent
	self.onMercury = function() {
		return format(earthYears / 0.2408467); //Mercury: orbital period 0.2408467 Earth years
	};
	
	self.onVenus = function() {
		return format(earthYears / 0.61519726); //Venus: orbital period 0.61519726 Earth years
	};
	
	self.onMars = function() {
		return format(earthYears / 1.8808158); //Mars: orbital period 1.8808158 Earth years		
	};
	
	self.onJupiter = function() {
		return format(earthYears / 11.862615); //Jupiter: orbital period 11.862615 Earth years
	};
	
	self.onSaturn = function() {
		return format(earthYears / 29.447498); //Saturn: orbital period 29.447498 Earth years
	};
	
	self.onUranus = function() {
		return format(earthYears / 84.016846); //Uranus: orbital period 84.016846 Earth years
	};
	
	self.onNeptune = function() {
		return format(earthYears / 164.79132); //Neptune: orbital period 164.79132 Earth years
	};
};
