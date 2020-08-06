// Determine which type of bird in a flock occurs at the highest frequency

arr = [1, 4, 4, 4, 5, 5];
migratoryBirds(arr);

function migratoryBirds(arr) {
  let sortArr = arr.sort();
  const numMap = {};
  let maxNum = 0;
  let maxChar = 0;

  // for(let num of sortArr)
  // numMap[num]
  for (let i = 0; i < sortArr.length; i++) {

    console.log(numMap)

    // Count numbers
    if (numMap[sortArr[i]]) {
      numMap[sortArr[i]]++;
      console.log(numMap[sortArr[i]])
    } else {
      numMap[sortArr[i]] = 1;
      console.log(numMap[sortArr[i]])
    }
  }

  // Iterate over object keys
  for (var num in numMap) {
    console.log(numMap[num]);
    if (numMap[num] > maxNum) {
      maxNum = numMap[num];
      maxChar = num;
    }
  }
  return maxChar;
}
