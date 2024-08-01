let string="vandan"

const reverse=(arr)=>{
    let temp=[]
    let j=arr.length
    while(j>=0){
        temp.push(arr[j])
        j--
    }
    return temp
}

console.log(reverse(string));