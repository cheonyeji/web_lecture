// fetch와 체이닝 함께 응용하기
// fetch("api 주소")
//   .then((res) => res.json())
//   .then((res) => {
//     // data를 응답 받은 후의 로직
//   });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
