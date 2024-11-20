/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i,j);
    }
}

// *을 이용한 6x6 정사각형
let star = "";
for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
        star += '*';
    }
    star += '\n'
}
console.log(star);

/**
 * for...in
 */

const info = {
    name: 'name',
    year: 2000,
    age: 25
}

for(let key in info) {
    console.log(key);
}

const member = ['a', 'b', 'c'];

for(let key in member) {
    console.log(key);
    console.log(`${key}:${member[key]}`)
}

/**
 * for...of
 */

for(let value of member) {
    console.log(value);
}

/**
 * While
 */

let number = 0;

while(number < 10){
    number++;
}
console.log(number);

/**
 * do...while
 */

number = 0;

do{
    number++;
} while(number < 10);
console.log(number);

/**
 * break
 */
console.log('-----------------');

for(let i = 0; i < 10; i++){
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log('-----------------');

number = 0;

while(number < 10) {
    if(number === 5){
        break;
    }

    number++;
    console.log(number);
}

/**
 * continue
 */

console.log('-----------------');

for(let i =0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

console.log('-----------------');

number = 0;

while(number < 10) {
    number++;
    if(number === 5){
        continue;
    }
    console.log(number);
}