let arr=[1,3,8,7,5,10,20]
let max=0
let secondmax=0
for (let i=0; i<arr.length; i++){
    if (arr[i]>max){
        max=arr[i]
    }
}
for (let i=0; i<arr.length; i++){
    if (arr[i]<max&&arr[i]>secondmax){
        secondmax=arr[i]
    }
}
console.log(max*secondmax);





