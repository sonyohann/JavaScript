function max(...numbers) {
  return numbers.reduce((acc, cur) => (acc > cur ? acc : cur), numbers[0]);
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

export default max;
