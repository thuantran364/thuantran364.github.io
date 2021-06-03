!(function ($) {
  // jQuery counterUp
  $('[data-toggle="count-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });

  //portolio
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
    $("#portfolio-flters .filter-btn-ctrl").on("click", function () {
      $("#portfolio-flters .filter-btn-ctrl").removeClass("flters-active");
      $(this).addClass("flters-active");
      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
  });
  // Owl Carousel library
  $(".testimonial-slide").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 1,
      },
      993: {
        items: 2,
      },
      1201: {
        items: 3,
      },
    },
  });

  // venobox
  $(document).ready(function () {
    $(".venobox").venobox();
  });
  // hide nav
  var scrollNav = 0;
  $(window).scroll(function () {
    var scrollToHide = $(window).scrollTop();
    $(".navbar").toggleClass("hidden", scrollToHide > scrollNav);
    scrollNav = scrollToHide;
  });

  $(window).resize(function () {
    let width = $(window).width();
    if (width > 767.98) {
      $(".navbar-collapse.collapse.show").css({
        cssText: "background-color: transparent !important",
      });
      $(
        ".navbar-collapse.collapse.show > .navbar-nav > .nav-item > .nav-link"
      ).css({ cssText: "color: #fff !important" });
    } else if (width < 767.98) {
      $(".navbar-collapse.collapse.show").css("background-color", "#fff");
      $(
        ".navbar-collapse.collapse.show > .navbar-nav > .nav-item > .nav-link"
      ).css({ cssText: "color: #000 !important" });
    }
  });

  // back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
      $(".navbar").css("background-color", "rgba(103, 176, 209, 0.8)");
      $(".navbar-collapse.collapse.show").css({
        cssText: "background-color: transparent",
      });
      $(
        ".navbar-collapse.collapse.show > .navbar-nav > .nav-item > .nav-link"
      ).css({ cssText: "color: #fff !important" });
    } else {
      $(".back-to-top").fadeOut("slow");
      $(".navbar").css("background-color", "transparent");
      $(".navbar-collapse.collapse.show").css("background-color", "#fff");
      $(
        ".navbar-collapse.collapse.show > .navbar-nav > .nav-item > .nav-link"
      ).css({ cssText: "color: #000 !important" });
    }
  });
  
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300,
      "easeInQuad"
    );
    return false;
  });
})(jQuery);
