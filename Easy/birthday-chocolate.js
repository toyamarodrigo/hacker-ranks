// Given an array of integers, find the number of subarrays of length k having sum 2.
// The first line contains an integer n, the number of squares in chocolate bar.
// The second line contains n space-separated integers s[i], the numbers on the chocolate squares where 0 <= i < n
// The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.

s = [1, 2, 1, 3, 2];
d = 3;
m = 2;

birthdays(s, d, m);

function birthdays(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
      count++;
    }
  }
  return count;
}
