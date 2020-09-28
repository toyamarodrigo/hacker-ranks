// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
sockMerchant(9, arr);

function sockMerchant(n, ar) {
  const obj = {};
  let pairs = 0;

  ar.forEach((element) => {
    if (obj[element]) {
      pairs++;
      obj[element] = 0;
    } else {
      obj[element] = 1;
    }
  });

  console.log(pairs);
  return pairs;
}
