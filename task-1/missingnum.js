let arr = [1, 2, 3, 5, 6];
const missingnumber = (arr) => {
    let sum = 0;
    let arrsum = 0;

    for (let i = 1; i <= arr.length + 1; i++) {
        sum += i;
    }

    for (let j = 0; j < arr.length; j++) {
        arrsum += arr[j];
    }

    return sum - arrsum;
}

console.log(missingnumber(arr));
