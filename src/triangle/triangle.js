
var Triangle = function(side1, side2, side3) {
	var self = this;
	
	var sides = [side1, side2, side3];
	sides = sides.sort(function(a,b) { return a-b; }); //Defaults to string sort, so had to force number sort (used Mozilla's array.sort documentation for help)
	var illegalTriangle = sides[0] + sides[1] <= sides[2]; //I had used wrong ineqality here
	console.log("sides: " + sides);
	
	var hasInvalidSides = side1 <= 0 || side2 <= 0 || side3 <= 0;
	
	var isEquilateral = (side1 == side2) && (side2 == side3);
	var isIsosceles = (side1 == side2) || (side2 == side3) || (side1 == side3);
	
	self.kind = function() {
		if ( hasInvalidSides ) {
			throw "Invalid triangle - sides must be greater than zero";
		}
		if ( illegalTriangle ) {
			throw "Invalid triangle - sides must conform to triangle ineqality";
		}
		if ( isEquilateral ) {
			return "equilateral";
		}
		if ( isIsosceles ) {
			return "isosceles"; //I had misspelled here 'isoceles'
		}
		return "scalene";
	};
};
