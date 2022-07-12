import { gsap, Back, Expo } from "gsap";
// gsap.registerPlugin(ScrollTrigger);
console.log(gsap);
import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.75

});

// document.addEventListener('DOMContentLoaded', function () {
//   console.log("dom loaded");


//   function ScrollUpdateDelay() {
//     setTimeout(function () {
//       console.log("scroll update");
//       scroll.update();
//     }, 500);

//   }

//   ScrollUpdateDelay();
// });

new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
// const TL = gsap.timeline();
// TL.set(".front-top-line", { width: 0 });

// TL.to(".front-top-line", {

//   duration: 1,
//   width: "100%",
//   ease: Back.easeOut,
//   scrollTrigger: {
//     trigger: ".front-top-line",
//     markers: true
//   },

// });
