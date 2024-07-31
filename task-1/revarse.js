const reverse=(arr)=>{
    let temp=[]
    for(let i=arr.length-1; i>=0; i--){
        
       temp.push(arr[i])
    }
    return temp
}
let arr=[1,2,3,4,5,6,7,8,9]

console.log(reverse(arr));