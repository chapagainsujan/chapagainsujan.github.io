// Dropdown menus + mobile menu + footer year + image fallbacks
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".nav-left button.nav-link");
  document.querySelectorAll(".nav-left li.open").forEach(function (li) {
    if (!btn || li !== btn.parentElement) li.classList.remove("open");
  });
  if (btn) btn.parentElement.classList.toggle("open");
  if (e.target.closest(".menu-toggle")) document.querySelector(".navbar").classList.toggle("show");
});
var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
document.querySelectorAll("img[data-fallback]").forEach(function (img) {
  function miss() { img.parentElement.classList.add("noimg"); }
  if (img.complete && img.naturalWidth === 0) miss();
  img.addEventListener("error", miss);
});
