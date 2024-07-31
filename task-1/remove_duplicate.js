let arr = [1, 2, 3, 4, 2, 5, 2, 6];


const removeduplicate=(arr)=>{
 let arr2=[]
 for(let i=0; i<arr.length; i++){
    if(arr[i]!=arr[i+1]){
        arr2.push(arr[i])
    }
    
 }
 return arr2;
}


console.log(removeduplicate(arr));


