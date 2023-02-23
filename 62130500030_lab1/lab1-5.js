function convertTwoDimension(A, B, C) {
    var res = [];
    while (A.length > 0) {
        var slice = A.splice(0, C);
        console.log(slice);
        res.push(slice);
    }
    return res;
}
console.log(convertTwoDimension([1, 2, 3, 4, 5, 6], 2, 3));
