// const confirmBtn = document.getElementsByTagName("button")[0];
// const cancelBtn = document.getElementsByTagName("button")[1];
// const resetBtn = document.getElementsByTagName("button")[2];

const [confirmBtn, cancelBtn, resetBtn] =
  document.getElementsByTagName("button");

confirmBtn.addEventListener("click", () => console.log("클릭됨"));
