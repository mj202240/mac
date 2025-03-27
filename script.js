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
  const firstObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("text-focus-in"); // 첫 번째 애니메이션 실행
          entry.target.style.opacity = "1";

          // 애니메이션이 끝난 후 실행되도록 설정
          entry.target.addEventListener("animationend", function handleAnimationEnd() {
            // 두 번째 애니메이션 감지를 시작
            document.querySelectorAll(".mid_3_text_box2").forEach((el) => secondObserver.observe(el));

            // 한 번 실행된 후 다시 실행되지 않도록 이벤트 제거
            entry.target.removeEventListener("animationend", handleAnimationEnd);
          });

          observer.unobserve(entry.target); // 첫 번째 애니메이션 실행 후 감지 해제
        }
      });
    },
    {
      threshold: 0.3, // 30% 보였을 때 실행
    }
  );

  const secondObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("focus-in-contract-bck"); // 두 번째 애니메이션 실행
          observer.unobserve(entry.target); // 두 번째 애니메이션 실행 후 감지 해제
        }
      });
    },
    {
      threshold: 1.0, // 100% 보였을 때 실행
    }
  );

  // 첫 번째 애니메이션을 감지할 요소 등록
  document.querySelectorAll(".mid_3_text_box1").forEach((el) => firstObserver.observe(el));
});



//md4
var swiper = new Swiper(".swiper_md4", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//sns
var swiper = new Swiper(".swiper_sns", {
  slidesPerView: 'auto',
  loop: true,
  watchSlidesProgress: true,
  spaceBetween: 75,
  autoplay: {
    delay: 2500,
  },
});
// 스와이퍼 합친 것 :
// Freemode
// Autoplay
