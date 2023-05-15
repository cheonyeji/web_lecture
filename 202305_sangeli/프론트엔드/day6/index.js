// number의 종류들
console.log(1 * "Hello");
console.log(10 / 0);
console.log(10 / -0);

// 문자열 증감 연산자
console.log("1" + 2); // '12'
console.log(1 + "2"); // '12'
console.log(1 + 2); // 3
console.log(1 + true); // 2. true : 1로 타입변환
console.log(1 + false); // 1. false : 0으로 타입변환
console.log(1 + null); // 1. null : 0으로 타입변환
console.log(1 + undefined); // NaN. undefined는 숫자로 타입변환X

var person = {
  name: "Lee",
};

console.log(person["name"]);

var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2); // ①
console.log(person1.name === person2.name); // ②

function test(a, a) {
  console.log(a, a);
}

// test2 = (a, a) => console.log(a, a);

test(1, 1);
// test2(2, 2);

function foo(...rest) {
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}
// 매개변수의 개수를 사전에 알 수 없는 가변 인자 함수
// 가변 인자 함수는 arguments 객체를 통해 인수를 전달받는다.
function sum() {
  console.log(arguments);
}

sum(1, 2); // {length: 2, '0': 1, '1': 2}

// 배열
const arr = ["apple", "banana", "orange"];
arr[0]; // -> 'apple'
arr[1]; // -> 'banana'
arr[2]; // -> 'orange'
arr.length; // -> 3

typeof arr; // -> object

// ES5
var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3

const arr = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3

// ES5
var user = { firstName: "Ungmo", lastName: "Lee" };

var firstName = user.firstName;
var lastName = user.lastName;

console.log(firstName, lastName); // Ungmo Lee

const user = { firstName: "Ungmo", lastName: "Lee" };

// ES6 객체 디스트럭처링 할당
// 변수 lastName, firstName을 선언하고 user 객체를 디스트럭처링하여 할당한다.
// 이때 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
const { lastName, firstName } = user;

console.log(firstName, lastName); // Ungmo Lee

const title = document.querySelector("h2");
title.innerText = "안녕하세요";
title.style.color = "red";

const h2 = document.createElement("h2");
h2.innerText = "안녕!";
h2.style.color = "blue";

const div = document.querySelector("div");
div.appendChild(h2);
