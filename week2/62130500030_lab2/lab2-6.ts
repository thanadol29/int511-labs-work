function lastAmongTheeNum(a : number,b : number,c : number){
    let sorted : number = Math.max(a,b,c);
    //console.log(sorted);
    return sorted;
}
//lastAmongTheeNum(15,79,38);

function removeItemFromArray(B: number[],A : number) {
    let index : number = B.indexOf(A);
    B.splice(index,1)
    return B;
   // console.log(B);
}
//removeItemFromArray([10, 30, 20, 50, 40],30);

function convertNIToBr(A: String): String{
    let data = A.split('\n').join('<br>')
    //console.log(A);
    return data;
}
//console.log(convertNIToBr('Program\nJavaScript\nTypeScript'));

function convertTwoDimension(A : number[],B: number,C: number) :number []{
    const res : number[] = [];
    while(A.length > 0){
         const slice : any = A.splice(0,C)
        // console.log(slice);
         res.push(slice);
    }
    return res;
 }
// console.log(convertTwoDimension([1,2,3,4,5,6], 2 ,3 )); ;

export {lastAmongTheeNum, removeItemFromArray, convertNIToBr, convertTwoDimension};


