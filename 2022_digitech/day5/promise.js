// promise 객체를 만드는 기본 문법
let promise = new Promise(function (resolve, reject) {
  // executor (결과를 최종적으로 만들어내는 코드)
});

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve: p1"), 3000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve: p2"), 5000);
  // setTimeout(() => reject(new Error("에러 발생!")), 1000);
});
console.time("test");

// 소비자 : then, catch, finally

Promise.all([p1, p2]).then(([r1, r2]) => {
  console.log(r1, r2);
  console.timeEnd("test");
});

// then 기본 문법. 성공했을 때 실행할 함수와 실패했을 때 실행할 함수를 넘겨준다.
promise.then(
  function (result) {
    /* 결과(result)를 다룹니다 */
  },
  function (error) {
    /* 에러(error)를 다룹니다 */
  }
);
