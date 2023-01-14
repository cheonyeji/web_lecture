const funcName0 = "func0";
const funcName1 = "func1";
const funcName2 = "func2";

const obj = {
  [funcName0]() {
    return "func0 is called";
  },
  [funcName1]() {
    return "func1 is called";
  },
  [funcName2]() {
    return "func2 is called";
  },
};

for (let index = 0; index < 3; index++) {
  console.log(obj[`func${index}`]());
}
