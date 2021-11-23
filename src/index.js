const numbers = [10, 20, 30, 40, 50];

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
