function removeItemFromArray(B, A) {
    var index = B.indexOf(A);
    B.splice(index, 1);
    console.log(B);
}
removeItemFromArray([10, 30, 20, 50, 40], 30);
