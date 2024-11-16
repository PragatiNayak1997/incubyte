function add(numbers) {
  if (!numbers) return 0;

  if (numbers.length === 1) return Number(numbers);

  const parts = numbers.split(",");

  return parts.reduce((accumulator, number) => accumulator + Number(number), 0);
}

module.exports = { add };
