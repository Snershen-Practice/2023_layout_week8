import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import { gsap } from "gsap";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

AOS.init();

const introSwiper = new Swiper(".intro-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const commentSwiper = new Swiper(".comment-swiper", {
  slidesPerView: "1",
  // initialSlide: 0,

  observer: true,
  observeParents: true,
  enabled: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: "auto",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: "2",
      enabled: true,
      // spaceBetween: 40,
    },
    1200: {
      slidesPerView: "auto",
      enabled: true,
      // spaceBetween: 40,
    },
  },
});

const productSwiper = new Swiper(".product-swiper", {
  slidesPerView: "1",
  initialSlide: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // observer: true,
  // observeParents: true,
});

// productSwiper.init();

const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});

gsap.to(".banner__card", {
  y: -200,
  duration: 0.25,
  stagger: {
    each: 0.1,
    from: "center",
  },
});
