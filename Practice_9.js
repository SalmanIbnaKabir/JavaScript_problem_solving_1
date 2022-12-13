// Remove duplicate from array

function removeDuplicate(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (unique.includes(arr[i]) == false) {
      unique.push(arr[i]);
    }
  }
  return unique;

};

const arr = [1, 2, 3, 2, 4, 6, 64, 34, 55, 55,]
const duplicateRemoveArray = removeDuplicate(arr)

console.log(duplicateRemoveArray)