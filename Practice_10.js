// Check if a number is Prime

// 1 n 11
// 2 -> n-1

function isPrime(number) {

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;

}

function primeRange(arr) {
  let primeArray = [];
  for (let i = 0; i < arr.length; i++) {
    const prime = isPrime(arr[i]);
    primeArray.push(arr[i] + "-" + 'number Prime:' + prime)
  }
  return primeArray
}

console.log("is Prime", isPrime(12));

const arr = [2, 3, 4, 6, 7, 8, 9, 10, 35, 86, 99, 100]

console.log("Prime range", primeRange(arr))