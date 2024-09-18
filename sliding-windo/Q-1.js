let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 3
let crrsum=0
let maxsum=0

for(let i=0; i<k; i++){
    crrsum+=arr[i]
    
    maxsum=crrsum
 
}

for(let i=k; i<arr.length; i++){
    crrsum+=arr[i]-arr[i-k]
    if(crrsum>maxsum){
        maxsum=crrsum
    }
}
console.log(maxsum);
