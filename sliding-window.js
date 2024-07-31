const removeDuplicates = (arr) => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = true;
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] == arr2[j]) {
        duplicate = false;
        break;
      }
    }
    if (duplicate) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

let arr = [1, 2, 3, 4, 2, 5, 2, 6];
console.log(removeDuplicates(arr));
