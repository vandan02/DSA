let arr=[5,6,7,8,10,0,1,2,3]

const findpeek=(arr)=>{
    for(let i=0; i<arr.length-1;i++) {
        if(arr[i]>arr[i+1]) {
       return i;
        }
    }
    
}
console.log(findpeek(arr));
