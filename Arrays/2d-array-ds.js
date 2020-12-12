// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

// a b c
//   d
// e f g

// arr[i][j]    arr[i][j+1]     arr[i][j+2]
//              arr[i+1][j+1]
// arr[i+2][j]  arr[i+2][j+1]   arr[i+2][j+2]

// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.

// Constraints
// 9 <= arr[i][j] <= 9
// 0 <= i,j <= 5

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let result = hourglassSum(arr);

function hourglassSum(arr) {
  let maxHourglass = -63;
  // Columnas
  for (let i = 0; i < arr.length - 2; i++) {
    // Filas
    for (let j = 0; j < arr.length - 2; j++) {
      // El reloj de arena
      let hourglass = [
        arr[i][j],
        arr[i][j + 1],
        arr[i][j + 2],
        arr[i + 1][j + 1],
        arr[i + 2][j],
        arr[i + 2][j + 1],
        arr[i + 2][j + 2],
      ];

      // Suma valores del reloj de arena
      const sumHourglass = hourglass.reduce((a, b) => a + b);

      if (sumHourglass > maxHourglass) {
        maxHourglass = sumHourglass;
      }
    }
  }
  return maxHourglass;
}
