const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

// Toggle işlemleri
searchBtn.onclick = (e) => {
  e.stopPropagation();
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
};

cartBtn.onclick = (e) => {
  e.stopPropagation();
  cartItem.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

menuBtn.onclick = (e) => {
  e.stopPropagation();
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// Sayfanın boş bir yerine tıklanınca her şeyi kapat
document.onclick = (e) => {
  if (!e.target.closest(".search-form") && !e.target.closest("#search-btn")) {
    searchForm.classList.remove("active");
  }

  if (
    !e.target.closest(".cart-items-container") &&
    !e.target.closest("#cart-btn")
  ) {
    cartItem.classList.remove("active");
  }

  if (!e.target.closest(".navbar") && !e.target.closest("#menu-btn")) {
    navbar.classList.remove("active");
  }
};

