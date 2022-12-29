async function ff() {
  return 1;
}

ff().then((value) => alert(value)); // 1

async function p2() {
  // async을 지정해주면 Promise를 리턴하는 함수로 만들어줍니다.
  return "hello";
}

p2().then((n) => console.log(n));
// await는 async 함수 안에서만 동작합니다.
// let value = await promise;

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f2();

// Promise 사용
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

// async & await 사용
// Promise 와는 다르게 에러를 핸들링 할 수 있는 기능이 없다. 따라서 try-catch() 문을 활용하여 에러를 핸들링
(async () => {
  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });

  try {
    const result = await promise; // async 함수 내의 await 를 통해 Promise 의 반환 값을 result 변수에 담아 콘솔에 출력하는 코드
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

// Quiz
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...코드...
  // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
  // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!

  wait().then((result) => alert(result));
  // async 함수를 호출하면 프라미스가 반환되므로, .then을 붙이면 됩니다.
}
