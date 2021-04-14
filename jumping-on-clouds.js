// Complete the jumpingOnClouds function below.
let c = [0, 1, 1, 0, 0, 1, 0];

// Index the array from 0.....6. The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5. They could follow these two paths:
// 0 -> 2 -> 4 -> 6
// 0 -> 2 -> 3 -> 4 -> 6
// The first path takes 3 jumps while the second takes 4. Return 3.

// Constraints
// 2 <= n <= 100
// c[i] E {0,1}
// c[0] = c[n-1] = 0

// solo podemos saltar 1 o 2

function jumpingOnClouds(c) {
  let count = 0;
  let i = 0;

  // Recorremos el array
  while (i < c.length - 1) {
    // Si c[i + 2] es 0, i se le suma 2, sino i se le suma 1
    // Si es 0 quiere decir que podemos hacer un salto de 2 posiciones, caso contrario 1 salto.
    !c[i + 2] ? (i += 2) : (i += 1);

    // Contamos los salto
    count += 1;
  }

  return count;
}

jumpingOnClouds(c);
