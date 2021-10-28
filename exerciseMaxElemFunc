// result 23

const numbers = [1, 2, 3, 23];
const max = getMax(numbers);
const max2 = getMax2(numbers);

console.log(max);
console.log(max2);

function getMax(array) {
  let max = array[0];
  for (elem of array)
    if (elem > max)
      max = elem;
  return max;
}

function getMax2(array) {
  if (array.length === 0)
    return undefined;
  return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
}
