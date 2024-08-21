let arr=[7,1,5,3,6,4,7]
let buy=arr[0]
shell=0
for(let i=0; i<arr.length-1; i++){
    if(buy>arr[i]){
        buy=arr[i]
        shell-=buy
    }
   if(buy<arr[i+1]){
    shell+=arr[i+1]
   buy=arr[i+1]
   }
}

console.log(buy,shell);