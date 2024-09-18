let arr = [2,5, 3, 1, 8, 9, 2];
let k = 2
let crrsum=1
let maxsum=0

for(let i=0; i<k; i++){
    crrsum=crrsum*arr[i]
    
    maxsum=crrsum
    console.log(crrsum);
}

for(let i=k; i<arr.length; i++){


crrsum=arr[i-k]*arr[i-[k-1]]
    crrsum*=arr[i]
    
    console.log(crrsum);
    
    if(crrsum>maxsum){
        maxsum=crrsum
    }
}
console.log(maxsum);