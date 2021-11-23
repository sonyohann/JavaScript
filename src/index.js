const numbers = [10, 20, 30, 40];

const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);

const numbers2 = [10, 20, 30, 40];

const index = numbers.indexOf(30);
const spliced = numbers2.splice(index, 1);
console.log(spliced);
console.log(numbers2);
