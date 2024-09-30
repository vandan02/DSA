let arr=[5,7,7,8,8,10]
let target=8

for (let i=0; i<arr.length-1; i++){
if(arr[i]==target && arr[i+1]==target){
    console.log(i,i+1);
    
}
}