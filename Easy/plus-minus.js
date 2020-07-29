// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

// Sample input
// 6
// -4 3 -9 0 4 1

// 3 positives, 2 negatives, 1 zero

// Sample Output
// 0.500000
// 0.333333
// 0.166667

function plusMinus(arr) {
  let counter = [0, 0, 0];

  arr.forEach((e) => {
    if (e > 0) {
      counter[0]++;
    } else if (e < 0) {
      counter[1]++;
    } else {
      counter[2]++;
    }
  });
  for(let result of counter) {
    console.log((result / arr.length).toFixed(6));
  }
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
