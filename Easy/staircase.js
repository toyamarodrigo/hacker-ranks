// Consider a staircase of size n = 4:
//    #
//   ##
//  ###
// ####
// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of 4.

function staircase(n) {
  // for (let i = 1; i <= n; i++) {
  //   let col = i;
  //   for (let j = 1; j <= n - col; j++) {
  //     process.stdout.write(' ');
  //   }
  //   for (let j = 1; j <= col; j++) {
  //     process.stdout.write('#');
  //   }
  //   process.stdout.write('\n');
  // }

  let separator = '';
  for (let i = 1; i <= n; i++) {
      separator += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
  }
  process.stdout.write(separator)
}

staircase(6);
