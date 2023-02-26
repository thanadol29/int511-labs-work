function convertTwoDimension(A : number[],B: number,C: number) :number []{
   const res : number[] = [];
   while(A.length > 0){
        const slice : any = A.splice(0,C)
        console.log(slice);
        res.push(slice);
   }
   return res;
}
console.log(convertTwoDimension([1,2,3,4,5,6], 2 ,3 )); 