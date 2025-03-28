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
console.clear();

function TypingEffect1__init($el) {
  const text = $el.attr('data-text');
  const inter = parseInt($el.attr('data-inter')) || 50; // 기본 타이핑 속도
  const delay = parseInt($el.attr('data-delay')) || 0; // 개별 딜레이

  $el.find(' > div').empty();
  const textBits = text.split('');

  setTimeout(() => {
    $el.data('typing-effect-1__index', 0);
    $el.data('typing-effect-1__inter', inter);
    $el.data('typing-effect-1__$div', $el.find(' > div'));

    TypingEffect1__start($el, textBits);
  }, delay);
}

function TypingEffect1__start($el, textBits) {
  const index = $el.data('typing-effect-1__index');
  const inter = $el.data('typing-effect-1__inter');
  const $div = $el.data('typing-effect-1__$div');

  setTimeout(function () {
    $div.append(textBits[index]);

    if (index + 1 == textBits.length) {
      return;
    }

    $el.data('typing-effect-1__index', index + 1);

    TypingEffect1__start($el, textBits);
  }, inter);
}

// 👇 스크롤 시 요소 감지 후 실행
function observeTypingEffect() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const $el = $(entry.target);
        if (!$el.hasClass("activated")) {
          $el.addClass("activated"); // 한 번만 실행되도록 설정
          TypingEffect1__init($el);
        }
      }
    });
  }, { threshold: 0.8 }); // 요소가 50% 이상 보이면 실행

  $(".typing-effect-1").each((index, el) => {
    observer.observe(el);
  });
}

// 페이지 로드 후 실행
$(document).ready(() => {
  observeTypingEffect();
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
