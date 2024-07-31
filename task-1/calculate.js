const sum_elements=(arr)=>{

    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}


let arr=[10,20,30,40,50]

let rusalt=sum_elements(arr)
console.log(rusalt); 