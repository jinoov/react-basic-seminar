// map, filter, reduce 실습

const numbers = [1, 2, 3, 4, 5];

// 1. map: 배열을 쭉 돌면서, 하나씩 값을 변환해줌
const doubled = numbers.map(function (num) {
  return num * 2;
});

// const doubled = numbers.map((num) => num * 2);

console.log('Doubled:', doubled);

// 2. filter: 배열을 쭉 돌면서, 조건에 맞는 값들만 필터링 해준다
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});

// const evens = numbers.filter((num) => num % 2 === 0);

console.log('Evens:', evens);

// 3. reduce: 배열을 쭉 돌면서, 값을 하나로 축약해준다
const sum = numbers.reduce(function (acc, num) {
  return acc + num;
});

// const sum = numbers.reduce((acc, num) => acc + num);

console.log('Sum:', sum);
