function add(numbers) {
  let delimiters = [",", "\n"];

  if (!numbers) return 0;

  if (numbers.length === 1) return Number(numbers);

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiters = [parts[0].slice(2)];
    numbers = parts.slice(1).join("\n");
  }

  const splitNumbers = splitByDelimiters(numbers, delimiters);

  const negatives = splitNumbers.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

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
