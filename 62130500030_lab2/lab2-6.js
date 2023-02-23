"use strict";
exports.__esModule = true;
exports.convertTwoDimension = exports.convertNIToBr = exports.removeItemFromArray = exports.lastAmongTheeNum = void 0;
function lastAmongTheeNum(a, b, c) {
    var sorted = Math.max(a, b, c);
    //console.log(sorted);
    return sorted;
}
exports.lastAmongTheeNum = lastAmongTheeNum;
//lastAmongTheeNum(15,79,38);
function removeItemFromArray(B, A) {
    var index = B.indexOf(A);
    B.splice(index, 1);
    return B;
    // console.log(B);
}
exports.removeItemFromArray = removeItemFromArray;
//removeItemFromArray([10, 30, 20, 50, 40],30);
function convertNIToBr(A) {
    var data = A.split('\n').join('<br>');
    //console.log(A);
    return data;
}
exports.convertNIToBr = convertNIToBr;
//console.log(convertNIToBr('Program\nJavaScript\nTypeScript'));
function convertTwoDimension(A, B, C) {
    var res = [];
    while (A.length > 0) {
        var slice = A.splice(0, C);
        // console.log(slice);
        res.push(slice);
    }
    return res;
}
exports.convertTwoDimension = convertTwoDimension;
