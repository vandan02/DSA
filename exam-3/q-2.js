let arr=[7,1,5,6,5]
let buy=arr[0]
let sell=0
for (let i=1; i<arr.length; i++){
    if(buy>arr[i]){
        buy=arr[i]
    }
    if(sell<arr[i]){
        sell=arr[i]-buy
    }
   
}
console.log(buy: ${buy} profit: ${sell});