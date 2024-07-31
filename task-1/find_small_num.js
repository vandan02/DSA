const find_small=(arr)=>{
    let minnum=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minnum){
            minnum=arr[i];
        }
    }
    return minnum;
}

let arr=[5,-1,1,2,3,4,5,6,7,14,8,9,10];

console.log(find_small(arr));