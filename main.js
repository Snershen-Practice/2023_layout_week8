import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

AOS.init();
// console.log("Hello world!");

const introSwiper = new Swiper(".intro-swiper", {
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const commentSwiper = new Swiper(".comment-swiper", {
  slidesPerView: "auto",
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const productSwiper = new Swiper(".product-swiper", {
  slidesPerView: "1",
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});
