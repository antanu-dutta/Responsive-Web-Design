const bar = document.querySelector(".fa-bars");
const navBar = document.querySelector(".navbar");
bar.addEventListener("click", function () {
  this.classList.toggle("fa-times");
  navBar.classList.toggle("activenav");
});
$(document).ready(function () {
  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("activenav");
    if ($(window).scrollTop() > 30) {
      $("header").addClass("headeractive");
    } else {
      $("header").removeClass("headeractive");
    }
  });
});
