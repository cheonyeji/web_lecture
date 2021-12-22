const moreBtn = document.querySelector(".info .channel .moreBtn");
const title = document.querySelector(".info .channel .metadata .info .details");

moreBtn.addEventListener("click", () => {
  title.classList.toggle("active");
});
