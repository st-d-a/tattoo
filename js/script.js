function slowScroll(id) {
  let offset = 55;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset
    },
    700
  );
  return false;
}

$(function() {
  $("#burger").on("click", function(event) {
    event.preventDefault();
    $("#header__menu").toggleClass("show");
  });

  $(".header__menu a").on("click", function() {
    $(".header__menu").removeClass("show");
  });
});
