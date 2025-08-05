# 2.1 ] 타입이란

## 1. 자료형으로서의 타입

---

# 2.2 ]

### 9. 타입을 확인하는 방법

---

`typeof` 

**값의 typeof**

- 런타임의 typeof 연산자
- 자바스크립트의 typeof 연산자와 동일하게 동작
- boolean, null, undefined, number, bigInt, string, symbol, function, object 를 문자열로 반환.
- 주의할점 : 자바스크립트의 클래스는 함수이기 때문에 Class의 typeof = ‘function’ 이 됨.

**타입의 typeof**

- 타입스크립트의 타입을 반환
- 클래스는 생성자 함수인 경우 typeof Class가 반환, 인스턴스는 Class가 반환.

`instanceof`

- 프로토타입 체이닝 어딘가에 생성자의 프로토타입 속성이 존재하는지 판단할 수 있음.

# 2.3 ] 원시 타입

- boolean : true / false
    - truthy, falsy value (false제외) 는 boolean을 반환하지 않음.
    - falsy value = 0 (number)  / -0 (number) / 0n (bigInt)  / null (null) / undefined (undefined) / NaN (number)  / ‘’  (string)
- undefined :  초기값이 설정되어 있지 않을때 주로 할당되는 값
- null : 빈값을 할당할때 사용. 명시적 의도적으로 값이 비어있음을 나타냄.
- number : 숫자에 해당하는 모든 값을 할당할 수 있음.
    - java, c 와 달리 정수, 부동소수점수를 구분하지 않음.
    - NaN (Not a Number), Infinity 도 할당 가능.
- bigInt : Number.MAX_SAFE_INTEGER(2^53-1) 을 넘어가는 값을 할당할 수 있음.
    - bigInt와 number는 다른 타입
    - ES2020에서 도입된 새로운 데이터 타입
- string : 문자열 (빈문자열, 템플릿 리터럴 포함) 을 할당할 수 있음.
- symbol : Symbol 함수를 이용해서 유니크한 값을 할당할 수 있음.
    - ES2015에서 도입된 새로운 데이터 타입

# 2.4 ] 객체 타입

- object : 객체, 배열, 정규표현식, 함수, 클래스 모두 object 타입과 호한
    - 광범위한 타입으로 가급적 사용하지 않는 것을 권장.
    - 객체안에서의 any 느낌?
- {} : 객체의 속성 타입을 지정해줄 때 사용.
    - {} 를 타입으로 지정하는 경우 속성을 추가할 수 없음
    - {} 더라도 프로토타입 체이닝으로 Object 객체 래퍼에서 제공하는 속성에는 정상적으로 접근 가능.
- array : Array 키워드 / [] 로 선언 가능.
- type vs interface 키워드 : {} 대신 사용할 수 있는 객체 타입 지정 방식
- function : 호출 시그니처 ((매개변수 타입) ⇒ 반환 타입) 으로 함수의 타입 정의
    - 호출 시그니처는 화살표 함수 방식으로 작성함.