// map: 각 요소를 2배로 변환
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log('Doubled:', doubled);

// filter: 짝수만 필터링
const evens = numbers.filter((num) => num % 2 === 0);
console.log('Evens:', evens);

// reduce: 배열 합산
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('Sum:', sum);
