// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.
// countApplesAndOranges has the following parameter(s):
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// The first line contains two space-separated integers denoting the respective values of s and t.
// The second line contains two space-separated integers denoting the respective values of a and b.
// The third line contains two space-separated integers denoting the respective values of m and n.
// The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
// The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

// Position of house
const s = 7;
const t = 11;
// Location Apple tree
const a = 5;
// Location Orange tree
const b = 15;
// distance each apple/oranges falls from tree
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // let countApple = 0;
  // let countOrange = 0;

  // let appleList = apples.map((apple) => apple + a);
  // let orangeList = oranges.map((orange) => orange + b);

  // appleList.map((list) => {
  //   if (list >= s && list <= t) {
  //     countApple++;
  //   }
  // });

  // orangeList.map((list) => {
  //   if (list >= s && list <= t) {
  //     countOrange++;
  //   }
  // });

  // console.log(countApple);
  // console.log(countOrange);
  console.log(apples.map((p) => p + a).filter((p) => p >= s && p <= t).length);
  console.log(oranges.map((p) => p + b).filter((p) => p >= s && p <= t).length);
}
