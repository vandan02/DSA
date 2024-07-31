const pelindrom=(arr)=>{
    let i=0
    let j=arr.length-1
    arr = arr.toLowerCase(); 
    while(i<j){
      if(arr[i]==arr[j]){
          i++
          j--
      }
      else{
        return false
      }
    }
    return true
}

let string="Nayan"

console.log(pelindrom(string)) 