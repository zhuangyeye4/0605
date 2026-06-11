document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector(".site-header-toggle");
  var siteMenu = document.querySelector(".site-menu");

  if (menuButton && siteMenu) {
    menuButton.setAttribute("aria-label", "切換網站選單");
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", function (event) {
      event.preventDefault();
      var isOpen = siteMenu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 自動為卡片加上滾動淡入動畫基礎類別
  var revealItems = document.querySelectorAll(".card, .widget, .content, .sidebar");
  revealItems.forEach(function (item) {
    item.classList.add("js-reveal");
    // 本機預設直接顯示，若有 IntersectionObserver 則動態觸過進場動畫
    item.style.opacity = "1"; 
    item.style.transform = "translateY(0)";
    item.style.transition = "all 0.6s ease-out";
  });
});