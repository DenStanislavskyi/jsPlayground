// except(numbers, [1, 2]); result [3, 4]

const numbers = [1, 2, 3, 4, 1];
const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excludedArray) {
  const newarray = [];
  for (let element of array)
    if (!excludedArray.includes(element))
      newarray.push(element);
  return newarray;
}
