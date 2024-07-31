

const find_larg=(arr)=>{
    let maxnum=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maxnum){
            maxnum=arr[i];
        }
    }
    return maxnum;
}

let arr=[1,2,3,4,5,6,7,14,8,9,10];

console.log(find_larg(arr));