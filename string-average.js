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

let numberStringMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function mapNumberToString(num) {
    let str = numberStringMap[num];
    return (str !== undefined)? str: 'n/a';
}
function mapStringToNumber(str) {
    let num = numberStringMap.indexOf(String(str).toLowerCase());
    return (num !== undefined)? num: null;

}

module.exports = stringAverage;