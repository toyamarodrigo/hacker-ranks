// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget

// budget
const b = 10;
// prices Keyboards
const keyboards = [3, 1];
// prices USB drives
const drives = [5, 2, 8];

function getMoneySpent(keyboards, drives, b) {
  const keyboard = Math.min(...keyboards);
  const usb = Math.max(...drives);

  const total = keyboard + usb;

  return total > b ? -1 : total;
}

getMoneySpent(keyboards, drives, b);
