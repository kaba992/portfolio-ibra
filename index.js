import { gsap } from "gsap";

console.log(gsap);
const project = document.querySelectorAll('.project-item');
const projectImg = document.querySelector('.projects-img');
const project1 = document.querySelector('.project-link-1');
const project2 = document.querySelector('.project-link-2');
const project3 = document.querySelector('.project-link-3');
const project4 = document.querySelector('.project-link-4');


document.addEventListener('DOMContentLoaded', () => {



  const tl = gsap.timeline();
  tl.set(".projects-img", { width: 0 });
  project.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tl.to(".projects-img", { duration: 1, width: "90%", ease: Expo.easeInOut,delay: 0.5 });
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
    projectImg.style.background = "url('/assets/projets/watch-list.PNG') no-repeat 50% 50%";
    projectImg.style.backgroundSize = "cover";
    console.log(projectImg.style.backgroundImage);
  })
});
