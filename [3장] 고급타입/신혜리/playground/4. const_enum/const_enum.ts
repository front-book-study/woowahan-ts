// const enum NumberEnum {
//   ONE = 1,
//   TWO = 2,
// }

// const a: NumberEnum = 99; // ✅ OK → a는 사실상 number로 인식됨
// NumberEnum['ONE'];

const enum STRING_NUMBER {
  ONE = 'ONE',
  TWO = 'TWO',
}

const myStringNumber: STRING_NUMBER = STRING_NUMBER['ONE'];
console.log(STRING_NUMBER['ONE']);
// console.log(STRING_NUMBER[0]);
