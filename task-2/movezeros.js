const moveZero = (arr) => {
  let i = 0;
  let count = 0;
  let length = arr.length;
  while (i < length) {
    if (arr[i] == 0) {
      count++;
      arr.splice(i, 1);
      length--;
    } else {
      i++;
    }
  }
  while (count > 0) {
    arr.push(0);
    count--;
  }
  return arr;
};
let arr = [1, 0, 3, 4, 5, 0, 4];
console.log(moveZero(arr));
