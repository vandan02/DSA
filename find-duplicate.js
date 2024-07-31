let arr=[1,2,3,4,2,5,2,6]
let count=0
for(let i=0;i<arr.length;i++){

  if(arr[i]==arr[i+1])
  {
    count++
  }  
}
console.log(count);

