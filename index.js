'use strict';

module.exports = function isOdd(value) {
    let number = Math.abs(value);
    // not a number ?
    // definitely not a odd integer then
    if (isNaN(number)) {
        return false;
    }
    return Boolean( number & 1 );
}
