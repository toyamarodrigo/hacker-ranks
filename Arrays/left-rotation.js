// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.
// rotLeft has the following parameter(s):

// * int a[n]: the array to rotate
// * int d: the number of rotations

// Returns
// int a'[n]: the rotated array

// Input format

// The first line contains two space-separated integers n and d, the size of a and the number of left rotations.
// The second line contains n space-separated integers, each an a[i].

// SAMPLE
// 5 4
// 1 2 3 4 5

// 4 STEPS
// start = 1 2 3 4 5
// 1 step = 2 3 4 5 1
// 2 step = 3 4 5 1 2
// 3 step = 4 5 1 2 3
// 4 step = 5 1 2 3 4

// OUTPUT
// 5 1 2 3 4

a = [1, 2, 3, 4, 5];
d = 4;

// Simple solution
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let temp = a.shift();
    a.push(temp);
  }
  return a;
}

// With WHILE
function rotLeft(a, d) {
  let size = a.length;
  let newArr = [];
  let rotateLeftIdx = d;

  let i = 0;
  while (rotateLeftIdx < size) {
    newArr[i] = a[rotateLeftIdx];
    i++;
    rotateLeftIdx++;
  }

  rotateLeftIdx = 0;
  while (rotateLeftIdx < d) {
    newArr[i] = a[rotateLeftIdx];
    i++;
    rotateLeftIdx++;
  }
  return newArr;
}

// With FOR LOOP
function rotLeft(a, d) {
  let sizeArr = a.length;
  let newArr = [];
  let rotateLeft = d;

  let i = 0;
  for (let j = rotateLeft; j < sizeArr; j++) {
    newArr[i] = a[j];
    i++;
  }

  for (let j = 0; j < rotateLeft; j++) {
    newArr[i] = a[j];
    i++;
  }
}

const result = rotLeft(a, d);
