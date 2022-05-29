const feature = document.querySelector(".img__container");
const container = document.querySelector(".featureimg");
const hero = document.querySelector(".imghero");
const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const m3 = document.querySelector(".m3");
let query = window.matchMedia("(min-width:1024px)");
feature.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 3 - e.pageX)/10 ;
  let y =(e.pageY/2 - window.innerHeight  ) /10;

  if (query.matches) {
    feature.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    hero.style.transform = "translateZ(30px) ";
    m1.style.transform = "translateZ(60px)";
    m2.style.transform = "translateZ(70px)";
    m3.style.transform = "translateZ(90px)";
  }
});
feature.addEventListener("mouseleave", () => {
  feature.style.transition = "all 0.5s ease";
  feature.style.transform = `rotateY(0deg) rotateX(0deg)`;
  hero.style.transform = "translateZ(0px) ";
  m1.style.transform = "translateZ(0px)";
  m2.style.transform = "translateZ(0px)";
  m3.style.transform = "translateZ(0px)";
});
// feature.addEventListener("mouseenter", () => {
//   feature.style.transition = "all 0.1s ease";
// });

// const observ = new IntersectionObserver((entries) => {
//   // console.log(entries);
//   if (entries[0].intersectionRatio > 0) {
//     container.style.animation = `feature .3s forwards ease-in `;
//     // feature.style.animation = `feature .5s forwards ease-in `;
//     // hero.style.animation = `feature1 .7s forwards ease-in `;
//     // m1.style.animation = `feature1 .9s forwards ease-in `;
//     // m2.style.animation = `feature1 1s forwards ease-in `;
//     // m3.style.animation = `feature1 1.2s forwards ease-in `;
//     m1.animate(
//       [
//         { transform: "scale(1)" },
//         { transform: "scale(1.1)" },
//         { transform: "scale(1)" },
//       ],
//       {
//         duration: 900,

//         delay: 300,
//       }
//     );
//   }
//   setTimeout((e) => {
//     observ.unobserve(container);
//   }, 500);
// });
// observ.observe(container);
