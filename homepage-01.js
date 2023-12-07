var swiper = new Swiper(".swiper-slide-banner", {
  //   cssMode: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //   },
  navigation: {
    nextEl: ".swiper-button-next-slide-banner",
    prevEl: ".swiper-button-prev-slide-banner",
  },
  pagination: {
    el: ".swiper-pagination-slide-banner",
    clickable: true,
    renderBullet: function (index, className) {
      return "<div class='" + className + "'></div>";
      // return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  keyboard: true,
});

var swiper = new Swiper(".swiper-product-carrousel", {
  //   slidesPerView: 5,
  slidesPerView: "auto",
  spaceBetween: 24,
  //   centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar-product-carrousel",
    // Makes the Scrollbar Draggable
    draggable: true,
    // Snaps slider position to slides when you release Scrollbar
    snapOnRelease: true,
    // Size (Length) of Scrollbar Draggable Element in px
    dragSize: "auto",
  },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 24,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 24,
  //     },
  //     1024: {
  //       slidesPerView: 5,
  //       spaceBetween: 24,
  //     },
  //   },
});

const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(
  ".sidebar .sidebar-container .sidebar-top .sidebar-header .close-menu"
);
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth <= 768) {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});

const cartButton = document.querySelector("nav .icons .checkout");
const cartSidebarButton = document.querySelector(
  ".sidebar .sidebar-container .sidebar-bottom .sidebar-buttons-icon .sidebar-button-icon.checkout"
);
const closeCartButton = document.querySelector(
  ".cart-flyout .cart-flyout-container .cart-flyout-top .cart-flyout-top-header .close-cart-flyout"
);
const cart = document.querySelector(".cart-flyout");

cartButton.addEventListener("click", () => {
  cart.style.display = "block";
});

cartSidebarButton.addEventListener("click", () => {
  cart.style.display = "block";
});

closeCartButton.addEventListener("click", () => {
  cart.style.display = "none";
});
