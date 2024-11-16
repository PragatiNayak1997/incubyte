function add(numbers) {
  const delimiter = [",", "\n"];
  if (!numbers) return 0;

  if (numbers.length === 1) return Number(numbers);

  const splitNumbers = splitByDelimiters(numbers, delimiter);
  return splitNumbers.reduce(
    (accumulator, number) => accumulator + Number(number),
    0
  );
}

function splitByDelimiters(str, delimiters) {
  let result = [str]; // Start with the entire string
  for (const delimiter of delimiters) {
    const temp = [];
    for (const part of result) {
      temp.push(...part.split(delimiter)); // Split each part further by the current delimiter
    }
    result = temp; // Update the result with the newly split parts
  }
  return result;
}

module.exports = { add };
