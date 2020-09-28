// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;
bonAppetit(bill, k, b);

function bonAppetit(bill, k, b) {
  const arrSum = (bill.reduce((a, b) => a + b) - bill[k]) / 2;

  if (arrSum === b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - arrSum);
  }
}
