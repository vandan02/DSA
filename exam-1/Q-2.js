let arr1 = [1, 4, 2];
let arr2 = [3, 6, 5];

let arr3 = [];
let i = 0;
let j = 0;
let a1 = arr1.length;
let a2 = arr2.length;

while (i < a1 && j < a2) { 
    if (arr1[i] < arr2[j]) {
        arr3.push(arr1[i]);
        i++;
    } else {
        arr3.push(arr2[j]);
        j++;
    }
}

while (i < a1) {
    arr3.push(arr1[i]);
    i++;
}

while (j < a2) {
    arr3.push(arr2[j]);
    j++;
}

console.log(arr3);
