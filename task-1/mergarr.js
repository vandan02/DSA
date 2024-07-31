let arr=[1,2,3,4,5]
let arr2=[6,7,8,9,10]

const mergearr=(arr,arr2) =>{
    let merged_arr=[];
    
    for(let i=0; i<arr.length; i++){
        merged_arr.push(arr[i]);
        if(arr[i] == arr2.length){
            for(let j=0; j<arr.length; j++){
                merged_arr.push(arr2[j]);
            }
        } 
    }
    
  return merged_arr;

    }

    console.log(mergearr(arr,arr2));