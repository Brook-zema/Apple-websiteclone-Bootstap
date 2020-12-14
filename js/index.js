$(".footer-link-wrapper h3").click(function () {
  $(this).next("ul").toggleClass("active");
  $(this).toggleClass("active");
});
