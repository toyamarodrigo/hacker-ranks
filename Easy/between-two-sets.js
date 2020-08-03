let a = [2, 3];
let b = [2, 4];
getTotalX(a, b);

// Not counting in vscode + Quokka for some reason, but working on hackerrank

function getTotalX(a, b) {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (a.every((int) => i % int == 0)) {
      if (b.every((int) => int % i == 0)) {
        count++;
      }
    }
  }
  return count;
}
