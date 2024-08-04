// Main Menu JS
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("site-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      $("nav").addClass("site-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});

// Shopping Cart JS
$(function () {
  $("#shopping-cart").on("click", function () {
    $("#cart-content").toggle("blind", "", 500);
  });
});

// Back-To-Top Button JS
$(function () {
  $("#back-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
