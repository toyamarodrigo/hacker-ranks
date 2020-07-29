// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

// Function Description

// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an aray of integers representing candle heights

ar = [3, 2, 1, 3];
birthdayCakeCandles(ar);

function birthdayCakeCandles(ar) {
  // ar = ar.sort((a, b) => {
  //   return a - b;
  // });
  // let count = 0;

  // for (let i = 0; i <= ar.length; i++) {
  //   if (ar.slice(-1) == ar[i]) {
  //     count++;
  //   }
  // }

  // console.log(count);

  var max = Math.max(...ar);
  var result = ar.filter((c) => c === max);
  console.log(max);
  console.log(result);
  console.log(result.length);
}
