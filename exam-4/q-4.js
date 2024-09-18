const string = (arr, len) => {
    if (len < 0) {
        return "";
    }
    return arr[len] + string(arr, len - 1); 
}
let str = "vandan";
let arr = str.split(""); 
console.log(string(arr, arr.length - 1)); 
