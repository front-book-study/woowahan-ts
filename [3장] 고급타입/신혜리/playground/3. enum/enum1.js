// enum의 등장배경
// 열거형을 위한 타입 = enum
// 타입으로 사용 : 변수의 타입
const favoriteFruit = 'apple';
// const alergicFruit: Fruit = 'mango';
// 타입으로 사용 : 함수의 인자 타입
function printFruit(fruit) {
    console.log('print fruit : ' + fruit);
}
printFruit(favoriteFruit);
// printFruit('mango'); //error
// Q2. 타입 리터럴의 한계는?
// A2. 타입만 필요한 경우에는 타입 리터럴만으로 가능.
//     하지만, 값으로 필요한 경우에는 타입 리터럴로 해결 불가능하기 때문에 enum 등장.
//     enum은 타입 리터럴과 달리 값으로도 쓰일 수 있기 때문.
// Use Cases 1: Fruit의 타입만으로 이뤄진 배열을 만들고 싶을때.
// 타입 리터럴 사용하면 수동적으로 배열을 만들어줘야함.
const fruitTypeArray = ['apple', 'banana', 'strawberry'];
var FruitEnum;
(function (FruitEnum) {
    FruitEnum[FruitEnum["Apple"] = 0] = "Apple";
    FruitEnum[FruitEnum["Banana"] = 1] = "Banana";
    FruitEnum[FruitEnum["Strawberry"] = 2] = "Strawberry";
})(FruitEnum || (FruitEnum = {}));
const fruitEnumArray = Object.values(FruitEnum);
console.log('fruitEnumArray : ' + fruitEnumArray);
console.log('fruitTypeArray : ' + fruitTypeArray);
