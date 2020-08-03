// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

// Print YES if they can land on the same location at the same time; otherwise, print NO.

// Note: The two kangaroos must land at the same location after making the same number of jumps.

function kangaroo(x1, v1, x2, v2) {
  // Kangaroo Position, y = Number of Jumps, v = Distance Per Jump, and x = Starting Position.
  // K = yv + x
  // (y * v1) + x1 = (y * v2) + x2
  // (x1 - x2) = (y * v2) - (y * v1)
  // (x1 - x2) = y(v2 - v1)
  // (x1 - x2) / (v2 - v1) = y
  let result = 'NO';
  if (v2 < v1) {
    if ((x1 - x2) % (v2 - v1) == 0) {
      result = 'YES';
    }
  }
  return result;
}
