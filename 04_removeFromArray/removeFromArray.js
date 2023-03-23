const removeFromArray = function(myArray, ...args) {

//Brute force solution to remove argument(s) from array.
    let newArray =[];
    for(let i = 0; i < myArray.length; i++){
        let exists = false;
        for(let j = 0; j < arguments.length; j++){
            if (myArray[i] === arguments[j]){
                exists = true;
                break;
            }
        }
        if(!exists){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
