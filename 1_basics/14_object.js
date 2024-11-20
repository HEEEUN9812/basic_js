/**
 * Object / 객체
 */

// key : value pair
let person = {
    name:"park",
    age:20,
    dance: function(){
        return `${this.name}가 춤을 춥니다`;
    }
};

console.log(person);
console.log(person.name);
console.log(person['name']);

const key = 'name';
console.log(person[key]);

console.log(person.dance());

const nameKey = 'name';
const nameValue = 'park';

const ageKey = 'age';
const ageValue = 20;

const person2 = {
    [nameKey] : nameValue,
    [ageKey] : ageValue,
    dance: function() {
        return `${this.name}가 춤을 춥니다`;
    }
};

console.log(person2);
console.log(person2.dance());

person2['age'] = 30;
console.log(person2);

person2['englishName'] = 'parkpark';
console.log(person2);

delete person2['englishName'];
console.log(person2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체르 변경할 수 없다
 * 2) 객체 안의 프로퍼티나 메서드는 편경할 수 있다
 */

const person3 = {
    name : 'jang',
    age : 23
}
// person3 = {}; X

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(person3));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(person3));

const name = 'kim';

const person4 = {
    name,
}
console.log(person4);