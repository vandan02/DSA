let arr=[4,5,6,7,0,1,2]
let target=0
for(let i=0; i<arr.length; i++){
    if(arr[i]==target){
        console.log(i);
        break;
    }
}