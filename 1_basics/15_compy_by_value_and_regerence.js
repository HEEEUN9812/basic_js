/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 사람입니다';
console.log('---------------');
console.log(original);
console.log(clone);

let originalObj = {
    name: 'park',
    age:20
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('---------------');

originalObj['age'] =  30;
console.log(originalObj);
console.log(cloneObj);

console.log(original === clone);
console.log(originalObj === cloneObj);

console.log('---------------');

let originalObj2 = {
    name: 'park',
    age:20
};

let cloneObj2 = {
    name: 'park',
    age:20
};

console.log(originalObj2 === cloneObj2);


console.log('---------------');

const person = {
    name : 'park',
    age : 20
}
const person2 = person;
const person3 = {
    name:'park',
    age:20
}

console.log(person === person2);
console.log(person2 === person3);
console.log(person === person3);

/**
 * Spread Operator
 */
const person4 = {
    ...person3
};
console.log(person4);
console.log(person4 === person3);

const person5 = {
    year:2024,
    ...person3
}
console.log(person5)

const person6 = {
    name: 'jang',
    ...person3
}
console.log(person6)

const person7 = {
    ...person3,
    name: 'jang',
}
console.log(person7)

const number = [1,3,5]
const number2 = [
    ...number,
    10
]
const number3 = [
    10,
    ...number,
]
console.log(number2)
console.log(number3)