scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);

function breakingRecords(scores) {
  let [hi, low] = [scores[0], scores[0]];
  let [max, min] = [0, 0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > hi) {
      hi = scores[i];
      max++;
    }
    if (scores[i] < low) {
      low = scores[i];
      min++;
    }
  }

  return [max, min];
}
