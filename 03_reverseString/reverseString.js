const reverseString = function(string) {

    let newString ="";
    for(let i = string.length; i >= 0; i--){
        newString = newString + string.charAt(i);
    }
    return newString;

    //return string.split("").reverse().join("");
};



// Do not edit below this line
module.exports = reverseString;
