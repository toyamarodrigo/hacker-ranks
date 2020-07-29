// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);

// The minimum sum is 1 + 3 + 5 + 7 = 16  and the maximum sum is 3 +5 + 7 + 9 = 24 . The function prints 16 24

function miniMaxSum(arr) {
  arr = arr.sort();

  let maxSet = arr.slice(1);
  let minSet = arr.slice(0, -1);

  // console.log(maxSet);
  // console.log(minSet);

  const sumaMax = maxSet.reduce((a, b) => a + b, 0);
  const sumaMin = minSet.reduce((a, b) => a + b, 0);
  
  console.log(sumaMin, sumaMax);

  // const result = arr.reduce((a, b) => a + b, 0);
  // console.log(result - arr[arr.length - 1], result - arr[0])
}
