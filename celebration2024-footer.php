<!-- partial -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/ScrollTrigger.min.js'></script>
<script type="text/javascript" src="https://digitallatte.in/js/smoothscroll.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script  src="https://www.digitallatte.in/anniversary-2024/script.js"></script>
<script>
  AOS.init();
</script>
<script>
  var swiperEffect = new Swiper(".swiperEffect", {
  loop: true,
  effect: "cards",
  grabCursor: true,
  navigation: false,
  pagination: false,
  dots:true,
  speed: 1000,
  parallax: true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
});
</script>
<script>
  var swiper = new Swiper(".my-carousel__swiper", {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      navigation: {
          nextEl: ".my-carousel__control--next",
          prevEl: ".my-carousel__control--prev",
      },
      slidesPerView: 4,
      effect: "creative",
      creativeEffect: {
        perspective: true,
        limitProgress: 3,
        prev: {
            translate: ['-90%', '20%', -100],
            rotate: [0, 0, -20],
            origin: "bottom"
        },
        next: {
            translate: ['90%', '20%', -100],
            rotate: [0, 0, 20],
            origin: "bottom"
        },
    },
  //   speed: 1000,
  // parallax: true,
  // autoplay: {
  //     delay: 1500,
  //     disableOnInteraction: false,
  // },
});
// $('.swiper-slide').hover(function(){
//   swiper.autoplay.stop();
// }, function(){
//   swiper.autoplay.start();
// });
</script>
</body>
</html>
