/**
 * Hoisting
 */

console.log('Hello');
console.log('World');

console.log('===============');

console.log(name);
var name = 'name'
console.log(name);

/**
 * Hoisting?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

console.log(company);
// let company = 'company';