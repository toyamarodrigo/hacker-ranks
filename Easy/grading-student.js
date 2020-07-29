grades = [73, 67, 38, 33];
gradingStudents(grades);

function gradingStudents(grades) {
  // for (let result of grades) {
  //   if (result >= 38) {
  //     if (result % 5 > 2) {
  //       result += 5 - (result % 5);
  //     }
  //   }
  //   console.log(result);
  // }

  return grades.map((num) => {
    let diff = 5 - (num % 5);
    // console.log(diff)
    if (diff < 3 && num >= 38) {
      num += diff;
    }
    // console.log(num)
    return num;
  });
}
