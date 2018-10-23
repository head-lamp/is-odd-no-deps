'use strict';

module.exports = function isOdd(value) {
    let parsed = parseInt(value);
    // not a number ?
    // definitely not a odd integer then
    if (isNaN(parsed)) {
        return false;
    }
    return Boolean( parsed & 1 );
}
