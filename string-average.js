function stringAverage(str) {
/**
 * You are given a string of numbers between 0-9. Find the average of these numbers 
 * and return it as a floored whole number (ie: no decimal places) written out as a string. 
 * Eg: "zero nine five two" -> "four"
 * If the string is empty or includes a number greater than 9, return "n/a"
 */

    // split string into array
    let ary =  str.split(" ");

    // convert array values into number
    for(let i = 0; i < ary.length; i++) {
        ary[i] = mapStringToNumber(ary[i]);
    }

    // find the sum of array values
    let sum = 0;
    for( let i = 0; i < ary.length; i++ ){
        sum += parseInt( ary[i], 10 ); //don't forget to add the base
    }

    // find the floored average number
    let avg = Math.floor(sum/ary.length);

    // convert and return the average as a string
    return mapNumberToString(avg);
    
}

function mapNumberToString(num) {
    switch (num) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'n/a';
    }
}
function mapStringToNumber(str) {
    switch(String(str).toLowerCase()) {
        case 'zero': return 0;
        case 'one': return 1;
        case 'two': return 2;
        case 'three': return 3;
        case 'four': return 4;
        case 'five': return 5;
        case 'six': return 6;
        case 'seven': return 7;
        case 'eight': return 8;
        case 'nine': return 9;
        default: return null;
    }
}

module.exports = stringAverage;