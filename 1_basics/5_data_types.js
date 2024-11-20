/**
 * Data Types
 * 
 * Primitive Type -> 6개
 * Object Type -> 1개
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */


// Number Type
const age = 32;
const tempature = -10;

console.log(typeof age);
console.log(typeof tempature);
console.log('------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);


//String Type
const name = 'name';
const company = "company";

console.log(name);
console.log(company);


/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력
 */

const newLine = 'my \n name'

const template = `그냥 쓰는대로 


다 나와?`

console.log(template);
console.log(`${newLine} 신기하다`);

/**
 * Boolean Type
 */

const isTrue = true;
const isFalse = false;


/**
 * Undefined Type
 * 
 * 사용자가 직접 값을 초기화하지 않았을때 지정되는 값
 * 
 * 직접 undefined 로 초기화는 지양
 */

let unInit;

/**
 * null Type
 * 
 * undefined와 마찬가지로 값이 없음
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할때 사용
 */

let init = null;
console.log(typeof init);

/**
 * Symbol Type
 * 
 * 유일무이한 값을 생성할때 사용
 * 다른 primitive 와는 다르게 Symbol 함수 호출
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * key:value
 */

const dictionary = {
    red : '빨간색',
    orange: '주황색',
    yellow: '노란색'
};

console.log(dictionary);
console.log(dictionary['red']);


/**
 * Array Type
 */

const number = [
    1,
    2,
    3,
    4,
];

console.log(number);
console.log(number[2]);

number[0] = 0;
console.log(number);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 '추론' 한다
 */
