const find_arr_target=(arr,target)=>{
      let i=0
      let j=arr.length-1
      while(i<j){
        if(arr[i]+arr[j]==target){
            return[i,j]
        }
        else if(arr[i]+arr[j]<target){
            i++
        }
        else{
            j--
        }
      }
      return[-1,-1]
}

let arr=[1,2,3,4,5,6,7]
let target=12
console.log(find_arr_target(arr,target)) 