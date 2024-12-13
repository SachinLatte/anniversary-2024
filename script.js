gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        scrub: 2,
    }
});

tl.fromTo('#bg',{y:-50}, {y: 0, duration: 3})
  .to('#moon', {x : -100, duration:3}, '-=3')
  .to('#moon', {y : -120, duration:3}, '-=3')
  .to('#drive', {y : 100, duration:3}, '-=3')
  .to('#drive', {scale : 1.2, duration:3}, '-=3')
  .to('#drive', {scale : 1.2, duration:3}, '-=3')
  .to('#car', {x : 110, duration:3}, '-=3')
  .to('#car', {y : -80, duration:3}, '-=3')
  .to('#mountain', {scale : 1.1, duration:3}, '-=3')
  .fromTo('#drive', {opacity:1}, {opacity: 0,  duration: 2}, '-=3')
  .fromTo('.scroll-down', {opacity:1}, {opacity: 0,  duration: 1}, '-=3')
