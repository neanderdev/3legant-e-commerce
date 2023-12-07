var swiper = new Swiper(".swiper-product-carrousel", {
  slidesPerView: "auto",
  spaceBetween: 24,
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
