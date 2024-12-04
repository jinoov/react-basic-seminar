// var, let, const 실습
var oldVariable = 'I can be re-declared and updated';
console.log(oldVariable);

let newVariable = 'I can be updated but not re-declared';
console.log(newVariable);

const constantVariable = 'I cannot be updated or re-declared';
console.log(constantVariable);

// 재할당/재선언 테스트
newVariable = 'Updated value';
// constantVariable = 'This will throw an error'; // Uncomment to see the error
