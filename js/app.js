// const sidebar = document.querySelector(".dropdown");
// const nav = document.querySelector(".navigation");
// const link = document.querySelectorAll(".link");
// const item = document.querySelectorAll(".item");
// const imgnav = document.querySelector(".imgnav");
// const imgnav2 = document.querySelector(".imgnav2");

// nav.addEventListener("click", () => {
//   sidebar.classList.toggle("show");
//   nav.classList.toggle("active");
//   item.forEach((e) => {
//     e.classList.toggle("it");
//   });
// });

// link.forEach((e) => {
//   e.addEventListener("mouseenter", () => {
//     e.classList.contains("pro") && imgnav.classList.add("op");
//     e.classList.contains("gam") && imgnav2.classList.add("op");
//   });
//   e.addEventListener("mouseleave", () => {
//     e.classList.contains("pro") && imgnav.classList.remove("op");
//     e.classList.contains("gam") && imgnav2.classList.remove("op");
//   });
//   e.addEventListener("mousemove", (p) => {
//     let x = p.pageX;
//     let y = p.pageY;
//     if (e.classList.contains("pro")) {
//       imgnav.style.top = y + "px";
//       imgnav.style.left = x / 8 - 100 + "px";
//     } else if (e.classList.contains("gam")) {
//       imgnav2.style.top = y + "px";
//       imgnav2.style.left = x / 8 - 100 + "px";
//     }
//   });
// });
const ham = document.querySelector(".hammenu");
const navm = document.querySelector(".navm");

ham.addEventListener("click", () => {
  navm.classList.toggle("current");
});

const heroentry = document.querySelectorAll(".i1");

const observer = new IntersectionObserver((entries) => {
  // console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `headerentry .5s ${entry.target.dataset.delay} forwards ease-in `;
    }
  });
});

heroentry.forEach((e) => {
  observer.observe(e);
});
