// md1
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// md2
var swiper = new Swiper(".swiper_md2", {
  slidesPerView: 4,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination_md2",
    clickable: true,
  },
});

AOS.init();

// md3
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("tracking-in-expand"); // 애니메이션 클래스 추가
          entry.target.style.opacity = "1"; // 요소 표시
        }
      });
    },
    {
      threshold: 0.3, // 30% 이상 화면에 나타나면 실행
    }
  );

  document.querySelectorAll(".mid_3_text_box1").forEach((el) => observer.observe(el));
});

//md4
var swiper = new Swiper(".swiper_md4", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//sns
var swiper = new Swiper(".swiper_sns", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// 스와이퍼 합친 것 : 
// Freemode 
// Autoplay
