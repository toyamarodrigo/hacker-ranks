// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer p, the page to turn to.

pageCount(10, 4);

function pageCount(n, p) {
  const totalTurns = Math.floor(n / 2);
  const pageTurns = Math.floor(p / 2);
  return Math.min(pageTurns, totalTurns - pageTurns);
}
