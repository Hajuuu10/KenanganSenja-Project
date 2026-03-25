// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Fitur Pencarian di Menu
searchBox.addEventListener("keyup", function() {
  const filter = searchBox.value.toLowerCase();
  const menuCards = document.querySelectorAll('.menu-card');

  menuCards.forEach((card) => {
    const title = card.querySelector('.menu-card-title').innerText.toLowerCase();
    if (title.indexOf(filter) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// Fitur Form Contact dan Toast Notification
const contactForm = document.querySelector("#contact-form");
const toastNotification = document.querySelector("#toast-notification");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    
    // Tampilkan notifikasi
    toastNotification.classList.add("active");
    
    // Reset form
    contactForm.reset();
    
    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
      toastNotification.classList.remove("active");
    }, 3000);
  });
}
