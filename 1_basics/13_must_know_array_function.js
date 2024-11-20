/**
 * array function
 */

let member = [
    'a',
    'b',
    'c',
]

console.log(member);

// push()
console.log(member.push('d')); // 길이 반환
console.log(member);

console.log('--------------');

// pop()
console.log(member.pop());
console.log(member);

console.log('--------------');

// shift()
console.log(member.shift());
console.log(member);

console.log('--------------');

// unshify()
console.log(member.unshift('a'))
console.log(member);

console.log('--------------');

console.log(member.splice(0, 2));
console.log(member);

member = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];

console.log(member);

// concat()
console.log(member.concat('g')); // 새로운 array 반환
console.log(member);

// slice()
console.log(member.slice(0, 3));
console.log(member);

// spread operator
let member2 =[
    ...member,
]
console.log(member2);

let member3 = [
    member
]
console.log(member3);

let member4 = member;
console.log(member4);
console.log(member === member4);

console.log([
    ...member
] === member);

// join()
console.log(member.join());
console.log(member.join('/'));
console.log(member.join(', '));

// sort()
// 오름차순
member.sort();
console.log(member);

console.log(member.reverse());

let number = [
    1,
    9,
    7,
    5,
    4,
];
console.log(number);

// a, b를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0 반환
number.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(number);

number.sort((a, b) => a > b ? -1 : 1);
console.log(number);

// map()
console.log('-------------------------')
console.log(member.map((x) => x));
console.log(member.map((x) => `member: ${x}`));

console.log(member.map((x) => {
    if(x === 'a') {
        return `member: ${x}`;
    } else {
        return x;
    }
}))

console.log(member);

// filter()
console.log('-------------------------')
number = [
    1,
    8,
    7,
    6,
    4
];

console.log(number.filter((x) => x % 2 === 0));

//find()
console.log(number.find((x) => x % 2 === 0));

// findIndex()
console.log(number.findIndex((x) => x % 2 === 0));

// reduce()
console.log(number.reduce((p, n) => p + n, 0));

