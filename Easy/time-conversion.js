// Input
// 07:05:45PM

// Output
// 19:05:45

s = '07:05:45AM';
timeConversion(s);

function timeConversion(s) {
  let ampm = s.slice(-2);
  // console.log(ampm);

  let timeArr = s.slice(0, -2).split(':');
  // console.log(timeArr);

  if (ampm === 'AM' && timeArr[0] === '12') {
    timeArr[0] = '00';
    // console.log(timeArr);
  } else if (ampm === 'PM') {
    timeArr[0] = (timeArr[0] % 12) + 12;
    // console.log(timeArr);
  }

  // console.log(timeArr.join(':'));
  return timeArr.join(':');
}
