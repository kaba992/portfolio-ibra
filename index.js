// Animation projets
import { gsap } from "gsap";

console.log(gsap);
const project = document.querySelectorAll('.project-item');
const projectImg = document.querySelector('.projects-img');
const project1 = document.querySelector('.project-link-1');
const project2 = document.querySelector('.project-link-2');
const project3 = document.querySelector('.project-link-3');
const project4 = document.querySelector('.project-link-4');


document.addEventListener('DOMContentLoaded', () => {

  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    mobile: {
      smooth: true
    },
    tablet: {
      smooth: true,
      breakpoint: 0,
    },
    multiplier: 0.75,

  });
  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))


  const tl = gsap.timeline();
  tl.set(".projects-img", { width: 0 });
  project.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tl.to(".projects-img", { duration: 1, width: "90%", ease: Expo.easeInOut, delay: 0.5 });
      console.log('mouseover');
    })
    item.addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tl.to(".projects-img", { duration: 0.5, width: 0, ease: Expo.easeInOut });
      console.log('mouseout');
    })
  });



  project1.addEventListener('mouseover', (e) => {
    projectImg.style.background = "url('/assets/images/projets/Capture.PNG') no-repeat 50% 50%";
    projectImg.style.backgroundSize = "cover";
    console.log('hovered');
  })

  project2.addEventListener('mouseover', (e) => {
    projectImg.style.background = "url('/assets/images/projets/neighborfood.PNG') no-repeat 50% 50%";
    // projectImg.style.backgroundSize = "cover";
    console.log(projectImg.style.backgroundImage);
  })

  project3.addEventListener('mouseover', (e) => {
    projectImg.style.background = "url('/assets/images/projets/32-bits.PNG') no-repeat 50% 50%";
    projectImg.style.backgroundSize = "cover";
    console.log(projectImg.style.backgroundImage);
  })
  project4.addEventListener('mouseover', (e) => {
    projectImg.style.background = "url('/assets/images/projets/watch-list.PNG') no-repeat 50% 50%";
    projectImg.style.backgroundSize = "cover";
    console.log(projectImg.style.backgroundImage);
  })
});
// Animation heider
const tlheader = gsap.timeline();
const projectTitle = gsap.utils.toArray(document.querySelectorAll('.project-title'));
tlheader.set(".project-header", { opacity: 0, height: 0 });
tlheader.to(".project-header", { duration: 1, opacity: 1, height: "80vh", ease: Back.easeOut })
  .fromTo(projectTitle, { duration: 1, opacity: 0, y: 100 }, { duration: 1.5, opacity: 1, y: 0, ease: Back.easeOut, stagger: 0.5 }
  )
