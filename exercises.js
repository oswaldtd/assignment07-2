// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
  if (x > y){
    return x;
  }
  else{
    return y;
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
  if (x > y && x > z){
    return x;
  }
  else if (y > x && y > z){
    return y;
  }
  else{
    return z;
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char ==='u'){
    return true;
  }else{
    return false;
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(str){
  var newStr = "";
  for(var i = 0; i < str.length; i++) {
    if(!isVowel(str[i]) && str[i] !== " ") {
      newStr += str[i] + "o" + newStr[i];
    }
      else{
        newStr += str[i];
      }
    }
    return newStr;
  };

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
  var length = array.length;
  var total = 0;
  for (i = 0; 1 < length; i++){
    total+= array[i];
  }
  return total;
};

function multiply(array){
  var length = array.length;
  var total = 1;
  for (i = 1; 1 < length; i++){
    total*=array[i];
  }
  return total;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
  var newStr = "";
  for(var i = str.length -1; i >= 0; i--) {
    newStr += str[i];
  }
 return newStr;
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function findLongestWord(words){
  var largest = 0;
  var largestName = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > largest) {
        largest = words[i].length;
        largestName = words[i];
    }
  }
  return largestName;
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  return words.filter(function(longest){
    return (longest.length > i);
  })
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var obj = {};
  for(i = 0; i < string.length; i++){
    if(obj.hasOwnProperty(string[i])){
       obj[string[i]] += 1;
    }
    else{
      obj[string[i]] = 1;
    }
  }
  return obj;
};
