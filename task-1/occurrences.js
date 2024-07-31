let arr = [1, 2, 3, 4, 2, 5, 2, 6];
let count = 0;
let target = 2;  

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        count++;
    }
}

console.log(count); 