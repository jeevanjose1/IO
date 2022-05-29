const avtr = document.querySelectorAll(".i1");
const quote = document.querySelectorAll(".quote");
const img = document.querySelector(".images");
const imageicons = document.querySelector(".imageicons");

const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");
const out = document.querySelector(".out");
const goto = function () {
  avtr.forEach((e, i) => {
    quote.forEach((r) => {
      r.classList.add("out");
    });
    e.addEventListener("mouseover", () => {
      document
        .querySelector(`.quote[data-slide="${i + 1}"]`)
        .classList.add("in");
    });
    e.addEventListener("mouseleave", () => {
      document
        .querySelector(`.quote[data-slide="${i + 1}"]`)
        .classList.remove("in");
    });
  });
};
goto();
