// spread operator 실습

// 1. 배열 병합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log('Merged:', merged);

// 2. 객체 병합
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { job: 'Engineer' };

const combinedObj = { ...obj1, ...obj2 };
console.log('Combined Object:', combinedObj);
