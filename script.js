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


  


  const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Let's",
    "Connect With Us ",
    "#BeOurPlusOne"
];

const morphTime = 1;
const cooldownTime = 1;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 2
  });