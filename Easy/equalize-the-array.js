// Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum number of elements to delete to reach his goal.

// For example, if his array is arr = [1,2,2,3], we see that he can delete the 2 elements 1 and 3 leaving arr = [2,2] . He could also delete both twos and either the 1 or the 3, but that would take 3 deletions. The minimum number of deletions is 2.

// Function Description
// Complete the equalizeArray function in the editor below. It must return an integer that denotes the minimum number of deletions required.

// equalizeArray has the following parameter(s):
// arr: an array of integers

arr = [3, 3, 1, 2, 3, 2, 1];

const equalizeArray = (arr) => {
  const numMap = {};
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (numMap[arr[i]]) {
      numMap[arr[i]]++;
    } else {
      numMap[arr[i]] = 1;
    }
  }

  for (var num in numMap) {
    if (numMap[num] > maxNum) {
      maxNum = numMap[num];
    }
  }

  const keyWithMaxValue = Object.keys(numMap).find(
    (key) => numMap[key] == maxNum
  );

  let result = arr.filter((num) => num != keyWithMaxValue);
  return result.length;
};

console.log(equalizeArray(arr));
