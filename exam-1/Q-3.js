const Find_Sum = (arr, target)=>{
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] + arr[j] === target) {
            return [arr[i] , arr[j]];
        } else if (arr[i] + arr[j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return [arr[i-1] , arr[j]];
}

let arr = [1,2,3,4,5];
let result = Find_Sum(arr,10);
console.log(result);
