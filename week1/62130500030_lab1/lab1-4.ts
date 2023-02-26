function convertNIToBr(A: String): String{
    let data = A.split('\n').join('<br>')
    console.log(A);
    return data;
}
console.log(convertNIToBr('Program\nJavaScript\nTypeScript'));