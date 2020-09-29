/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
const steps = 8;
const path = 'UDDDUDUU';

countingValleys(steps, path);

function countingValleys(steps, path) {
  let altitude = 0;
  let valleyCount = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      altitude++;
      if (altitude === 0) {
        valleyCount++;
      }
    } else {
      altitude--;
    }
  }
  return valleyCount;
}
