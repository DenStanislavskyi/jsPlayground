// result of the functions 3

const numbers = [1, 2, 3, 4, 1, 1];
const count = countOccurences(numbers, 1);
const count2 = countOccurences2(numbers, 1);

console.log(count);
console.log(count2);


function countOccurences(array, searchElement) {
  let count = 0;
  for (elem of array)
    if (elem === searchElement)
      count++; 
  return count;
}

function countOccurences2(array, searchElement) {
  return numbers.reduce(function(accumulator, current) {
  const occurence = (current === searchElement) ? 1 : 0;
  return accumulator + occurence;
}, 0);
}
