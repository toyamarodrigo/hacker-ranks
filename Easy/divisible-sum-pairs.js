// Count the number of pairs in an array having sums that are evenly divisible by a given number

n = 6;
k = 3;
ar = [1, 3, 2, 6, 1, 2];
divisibleSumPairs(n, k, ar);

function divisibleSumPairs(n, k, ar) {
  let count = 0;

  // for (var i = 0; i < n; i++) {
  //   for (var j = i + 1; j < n; j++) {
  //     if ((ar[i] + ar[j]) % k == 0 && i < k) {
  //       count++;
  //     }
  //   }
  // }

  for (var i = 0; i < n; i++) {
    count += ar.slice(i+1,n).map((res) => res + ar[i]).filter(res => res % k == 0).length
  }
  
  return count;
}
