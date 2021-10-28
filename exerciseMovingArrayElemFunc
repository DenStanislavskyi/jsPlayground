// output = move(numbers, 0, 1);  result [2, 1, 3, 4];

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);

console.log(output);


function move(array, index, offset) {
  const position = index + offset;
  if (position < 0 || position >= array.length){
    console.error("Ivalid offset.");
    return;
  }

  const output = [...numbers];
  const element = output.splice(index, 1);
  output.splice(position, 0, element[0]);
  return output;
}
