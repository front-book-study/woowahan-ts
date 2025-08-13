// enum의 등장배경
// 열거형을 위한 타입 = enum

// Q1. enum없이는 열거형을 표현할 수 없나?
// A1. type literal union
type Fruit = 'apple' | 'banana' | 'strawberry';

// 타입으로 사용 : 변수의 타입
const favoriteFruit: Fruit = 'apple';
// const alergicFruit: Fruit = 'mango';

// 타입으로 사용 : 함수의 인자 타입
function printFruit(fruit: Fruit) {
  console.log('print fruit : ' + fruit);
}

printFruit(favoriteFruit);
// printFruit('mango'); //error

// Q2. 타입 리터럴의 한계는?
// A2. 타입만 필요한 경우에는 타입 리터럴만으로 가능.
//     하지만, 값으로 필요한 경우에는 타입 리터럴로 해결 불가능하기 때문에 enum 등장.
//     enum은 타입 리터럴과 달리 값으로도 쓰일 수 있기 때문.

// [Use Cases 1]: Fruit의 타입만으로 이뤄진 배열을 만들고 싶을때.

// 타입 리터럴 사용하면 수동적으로 배열을 만들어줘야함.
const fruitTypeArray: Fruit[] = ['apple', 'banana', 'strawberry'];

// Enum은 타입을 기반으로 자동적으로 객체 생성 -> 객체를 기반으로 배열 생성 가능
enum FruitEnum {
  Apple,
  Banana,
  Strawberry,
}

const fruitEnumArray = Object.values(FruitEnum);

console.log('fruitEnumArray : ' + fruitEnumArray);
console.log('fruitTypeArray : ' + fruitTypeArray);

// [Use Case 2] : 객체의 키로 쓰고 싶을때
const fruitPrice1: Record<Fruit | 'mango', number> = {
  apple: 1000,
  banana: 2000,
  strawberry: 3000,
  mango: 5000,
};

const mangoPrice = fruitPrice1.mango;

const fruitPrice2 = {
  apple: 1000,
  banana: 2000,
  strawberry: 3000,
  mango: 5000,
  // mango: 5000,
} satisfies Record<Fruit | 'mango', number>;

const strawberryPrice = fruitPrice2.mango;

const fruitKoreanName1: Record<Fruit, string> = {
  strawberry: '딸기',
  banana: '바나나',
  apple: '사과',
};

const appleKoreanName = fruitKoreanName1['apple'];

const fruitKoreanName2 = {
  strawberry: '딸기',
  banana: '바나나',
  apple: '사과',
} satisfies Record<Fruit, string>;

const strawberryKoreanName = fruitKoreanName2['apple'];

const obj2 = {
  apple: 1000,
  banana: 2000,
  strawberry: 3000,
} satisfies Record<Fruit, number>;

obj2.apple; // 🔹 타입: 1000 (리터럴 유지)
