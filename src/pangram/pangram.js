var Pangram = function(sentence) {
  var sentenceArray = sentence.toLowerCase().split('');    
  this.isPangram = function() {
    var usedLettersHash = {};
    for ( var i = 0; i < sentenceArray.length; i++ ) {
      var c = sentenceArray[i];
      // console.log("checking " + c);
      if ( c >= 'a' && c <= 'z' ) {
        // console.log("  adding to hash " + c);
        usedLettersHash[c] = 1;
      }
    }
    var length = Object.keys(usedLettersHash).length; // had to look up this function in google/stack exchange; usedLettersHash.length is undefined
    // console.log("  usedLettersHash length " + length);
    return length == 26;
  };  
};
