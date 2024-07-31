
let arr=[1,2,4,21]

const sorted=(arr)=>{
    
    for(let i=0; i<arr.length-1; i++){
        
         if(arr[i]>=arr[i+1]){
            return false
         }
    }
  return true
}

console.log(sorted(arr));