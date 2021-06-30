(function ($) {
  $(window).on("load", function () {
    aos_init();
  });

  $(".carousel").carousel({
    interval: 1000,
  });
  // slide partner

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // scroll view center
  // $(document).on(
  //   "click",
  //   ".navbar-brand, .nav-link, .dropdown-item, .btn-down",
  //   function () {
  //     var scrollView = $("#top-header").outerHeight() + 60;
  //     var locate = $(this.hash);
  //     if (locate.length) {
  //       var scrollto = locate.offset().top - scrollView;
  //       $("html, body").animate(
  //         {
  //           scrollTop: scrollto,
  //         },
  //         500,
  //         "easeInQuad"
  //       );
  //       return false;
  //     }
  //   }
  // );

  // hide nav
  var scrollNav = 0;
  $(window).scroll(function () {
    var scrollToHide = $(window).scrollTop();
    $(".navbar-header").toggleClass("hiden", scrollToHide > scrollNav);
    scrollNav = scrollToHide;
    $(".wrapper").children(".nav-links").removeClass("show-menu-left");
    $(".link-item").removeClass("active-nav");
    $(".mega-box").removeClass("show-drop-down");
    $(".icon-down").removeClass("rotate-icon");
  });
  // disable href # dropdown

  // click dropdown menu
  $(".btn-show-menu").on("click", function () {
    $(".wrapper").children(".nav-links").addClass("show-menu-left");
  });
  $(".btn-close-menu").on("click", function () {
    $(".wrapper").children(".nav-links").removeClass("show-menu-left");
    $(".wrapper")
      .children(".nav-links")
      .children(".box-nav-link")
      .children(".mega-box")
      .removeClass("show-drop-down");
    $(".wrapper")
      .children(".nav-links")
      .children(".box-nav-link")
      .children(".link-item")
      .children(".icon-down")
      .removeClass("rotate-icon");
  });
  // check size screen
  if ($(window).width() > 750) {
    $(window).scroll(function () {
      var initialSrc = "images/svg/logo.svg";
      var scrollSrc = "images/svg/logo-white.svg";
      if ($(this).scrollTop() > 10) {
        $(".wrapper").children(".nav-links").removeClass("show-menu-left");
        $(".logo-icon").attr("src", scrollSrc);
        $(".navbar-header").css({
          cssText: "background-color: var(--redColor)",
        });
        $(".link-item").css({ cssText: "color: var(--whiteColor)" });
        $(".menu-icon").css({cssText:"color: var(--whiteColor)"});
        $(".btn-show-menu").css({cssText:"border: 3px solid var(--whiteColor)"});
      } else {
        $(".logo-icon").attr("src", initialSrc);
        $(".navbar-header").css({ cssText: "background-color: transparent" });
        $(".link-item").css({ cssText: "color: var(--blackColor)" });
        $(".menu-icon").css({cssText:"color: var(--redColor)"});
        $(".btn-show-menu").css({cssText:"border: 3px solid var(--redColor)"});
      }
    });
    $(".box-nav-link").hover(
      function () {
        $(this)
          .children(".link-item")
          .children(".icon-down")
          .addClass("rotate-icon");
      },
      function () {
        $(this)
          .children(".link-item")
          .children(".icon-down")
          .removeClass("rotate-icon");
      }
    );
  }
  if ($(window).width() < 768) {
    $(".navbar-header")
      .find(".box-nav-link")
      .unbind("mouseenter")
      .unbind("mouseleave");
    $(".box-nav-link").on("click", function () {
      if ($(this).children(".mega-box").hasClass("show-drop-down")) {
        $(".mega-box").removeClass("show-drop-down");
      } else {
        $(".mega-box").removeClass("show-drop-down");

        $(this).children(".mega-box").addClass("show-drop-down");
      }

      if ($(this).children(".link-item").hasClass("active-nav")) {
        $(".link-item").removeClass("active-nav");
      } else {
        $(".link-item").removeClass("active-nav");
        $(this).children(".link-item").addClass("active-nav");
      }
      if (
        $(this)
          .children(".link-item")
          .children(".icon-down")
          .hasClass("rotate-icon")
      ) {
        $(".icon-down").removeClass("rotate-icon");
      } else {
        $(".icon-down").removeClass("rotate-icon");
        $(this)
          .children(".link-item")
          .children(".icon-down")
          .addClass("rotate-icon");
      }
    });
    $(document).mouseup(function (e) {
      if (
        !$(".nav-links").is(e.target) && // The target of the click isn't the container.
        $(".nav-links").has(e.target).length === 0
      ) {
        // Nor a child element of the container
        $(".nav-links").removeClass("show-menu-left");
      }
    });
  }

  // resize
  $(window).resize(function () {
    let width = $(window).width();
    if (width > 750) {
      $(window).scroll(function () {
        var initialSrc = "images/svg/logo.svg";
        var scrollSrc = "images/svg/logo-white.svg";
        if ($(this).scrollTop() > 10) {
          $(".wrapper").children(".nav-links").removeClass("show-menu-left");
          $(".logo-icon").attr("src", scrollSrc);
          $(".navbar-header").css({
            cssText: "background-color: var(--redColor)",
          });
          $(".link-item").css({ cssText: "color: var(--whiteColor)" });
          $(".menu-icon").css({cssText:"color: var(--whiteColor)"});
          $(".btn-show-menu").css({cssText:"border: 3px solid var(--whiteColor)"});
        } else {
          $(".logo-icon").attr("src", initialSrc);
          $(".navbar-header").css({ cssText: "background-color: transparent" });
          $(".link-item").css({ cssText: "color: var(--blackColor)" });
          $(".menu-icon").css({cssText:"color: var(--redColor)"});
          $(".btn-show-menu").css({cssText:"border: 3px solid var(--redColor)"});
        }
      });
      $(".box-nav-link").hover(
        function () {
          $(this)
            .children(".link-item")
            .children(".icon-down")
            .addClass("rotate-icon");
        },
        function () {
          $(this)
            .children(".link-item")
            .children(".icon-down")
            .removeClass("rotate-icon");
        }
      );
    } else if (width < 768) {
      $(".wrapper").children(".nav-links").removeClass("show-menu-left");
      $(".link-item").removeClass("active-nav");
      $(".mega-box").removeClass("show-drop-down");
      $(".icon-down").removeClass("rotate-icon");
      $(".box-nav-link").on("click", function () {
        $(window).scroll(function () {
          var initialSrc = "images/svg/logo.svg";
          var scrollSrc = "images/svg/logo-white.svg";
          if ($(this).scrollTop() > 10) {
            $(".logo-icon").attr("src", scrollSrc);
          } else {
            $(".logo-icon").attr("src", initialSrc);
          }
        });
        if ($(this).children(".mega-box").hasClass("show-drop-down")) {
          $(".mega-box").removeClass("show-drop-down");
        } else {
          $(".mega-box").removeClass("show-drop-down");

          $(this).children(".mega-box").addClass("show-drop-down");
        }

        if ($(this).children(".link-item").hasClass("active-nav")) {
          $(".link-item").removeClass("active-nav");
        } else {
          $(".link-item").removeClass("active-nav");

          $(this).children(".link-item").addClass("active-nav");
        }
        if (
          $(this)
            .children(".link-item")
            .children(".icon-down")
            .hasClass("rotate-icon")
        ) {
          $(".icon-down").removeClass("rotate-icon");
        } else {
          $(".icon-down").removeClass("rotate-icon");
          $(this)
            .children(".link-item")
            .children(".icon-down")
            .addClass("rotate-icon");
        }
      });
      $(document).mouseup(function (e) {
        if (
          !$(".nav-links").is(e.target) && // The target of the click isn't the container.
          $(".nav-links").has(e.target).length === 0
        ) {
          // Nor a child element of the container
          $(".nav-links").removeClass("show-menu-left");
        }
      });
      $(".navbar-header")
        .find(".box-nav-link")
        .unbind("mouseenter")
        .unbind("mouseleave");
    }
  });
  // back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  // faq template
  $(".faq-content-box > .faq-title").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".faq-content-box > .faq-title .icon-faq")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".faq-content-box > .faq-title .icon-faq")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this).find(".icon-faq").removeClass("fa-plus").addClass("fa-minus");
      $(".faq-content-box > .faq-title").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
  // back-to-top
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500,
      "easeInQuad"
    );
    return false;
  });
  // hover nav
  // slide partner, client
  $(".trusted-partners-list, .the-team-list, .client-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".partner-list").slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    autoplay: true,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".industrey-list").slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    autoplay: true,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".work-list").slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    autoplay: true,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".intergration-list").slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    autoplay: true,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".partners-list-logo").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".list-title-team").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // custom input file

  $("input[type='file']").change(function () {
    $("#valueFile").text(this.value.replace(/C:\\fakepath\\/i, ""));
  });

  $('[data-toggle="collapse"]').on("click", function () {
    $(".collapse.show").collapse("hide");
    if ($(this).children(".img-detail-us").hasClass("active-show-info")) {
      $(".img-detail-us").removeClass("active-show-info");
    } else {
      $(".img-detail-us").removeClass("active-show-info");
      $(this).children(".img-detail-us").addClass("active-show-info");
    }
  });

  // isotope
  $(window).on("load", function () {
    var thinkPiecesIsotope = $(".pieces-container").isotope({
      itemSelector: ".box-pieces",
      layoutMode: "fitRows",
    });
    $(".box-pieces-link .categories-pieces-link").on("click", function () {
      $(".box-pieces-link .categories-pieces-link").removeClass(
        "flters-active"
      );
      $(this).addClass("flters-active");
      thinkPiecesIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
  });
  // partners
  $(window).on("load", function () {
    var partnerIsotope = $(".list-partners-logo-info").isotope({
      itemSelector: ".col-partners-list",
      layoutMode: "fitRows",
    });
    $(".slide.slick-slide .partner-name").on("click", function () {
      $(".slide.slick-slide .partner-name").removeClass("active-partner ");
      $(this).addClass("active-partner ");
      partnerIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
  });
  // case studies
  $(window).on("load", function () {
    var partnerIsotope = $(".case-studies-content-box").isotope({
      itemSelector: ".list-post-container",
      layoutMode: "fitRows",
    });
    $(".slide.slick-slide .partner-name").on("click", function () {
      $(".slide.slick-slide .partner-name").removeClass("active-partner ");
      $(this).addClass("active-partner");
      partnerIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
  });

  // // the team
  // $(window).on("load", function () {
  //   var theTeamIsotope = $(".box-card-container").isotope({
  //     itemSelector: ".is-collapsed",
  //   });
  //   $(".list-title-team .title-team").on("click", function () {
  //     $(".list-title-team .title-team").removeClass("active-the-team");
  //     $(this).addClass("active-the-team");
  //     theTeamIsotope.isotope({
  //       filter: $(this).data("filter"),
  //     });
  //     aos_init();
  //   });

  //   $(".collapse").on("collapsing", function () {
  //     theTeamIsotope.isotope("layout");
  //   });
  // });

  //open and close card when clicked on card
  var $cell = $(".card");
  //open and close card when clicked on card
  $cell.find(".js-expander").click(function () {
    var $thisCell = $(this).closest(".card");

    if ($thisCell.hasClass("is-collapsed")) {
      $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");
      // .addClass("is-inactive");
      $thisCell.removeClass("is-collapsed").addClass("is-expanded");

      // if ($cell.not($thisCell).hasClass("is-inactive")) {
      //   //do nothing
      // } else {
      //   $cell.not($thisCell).addClass("is-inactive");
      // }
    } else {
      $thisCell.removeClass("is-expanded").addClass("is-collapsed");
      // $cell.not($thisCell).removeClass("is-inactive");
    }
  });

  //close card when click on cross
  $cell.find(".js-collapser").click(function () {
    var $thisCell = $(this).closest(".card");

    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
  });

  document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      themeSystem: "bootstrap",
      initialView: "dayGridMonth",
      timeFormat: "h(:mm)a",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,basicWeek,basicDay,agenda",
      },
      eventLimit: true,
      events: [
        {
          title: "Something",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",
          start: "2021-06-12T10:30:00",
          end: "2021-06-15T10:30:00",
        },
      ],
      eventClick: function (info, jsEvent, view) {
        selectedEvent = info;
        $("#myModal #eventTitle").text(info.event.title);
        var $description = $("<div/>");
        $description.append(
          $("<p/>").html(
            "<b>Start:</b>" + info.event.start.startformat("DD/MM/YYYY HH:mm A")
          )
        );
        if (info.end != null) {
          $description.append(
            $("<p/>").html(
              "<b>End:</b>" + info.event.end.format("DD/MM/YYYY HH:mm A")
            )
          );
        }
        $description.append(
          $("<p/>").html("<b>Description:</b>" + info.event.description)
        );
        $("#myModal #pDetails").empty().html($description);

        $("#myModal").modal();
      },
      selectable: true,
      select: function (start, end) {
        selectedEvent = {
          eventID: 0,
          title: "",
          description: "",
          start: start,
          end: end,
          allDay: false,
        };
        openAddEditForm();
      },
      editable: true,
    });
    calendar.render();
  });

  $("#btnEdit").click(function () {
    //Open modal dialog for edit event
    openAddEditForm();
  });
  $("#btnDelete").click(function () {
    //Validation/

    $("#myModal").modal("hide");
  });

  $("#chkIsFullDay").change(function () {
    if ($(this).is(":checked")) {
      $("#divEndDate").hide();
    } else {
      $("#divEndDate").show();
    }
  });

  $("#datetimepickerStart,#datetimepickerEnd").datetimepicker({
    format: "DD-MM-YYYY hh:mm A",
    icons: {
      time: "fas fa-clock",
      date: "fas fa-calendar",
      up: "fas fa-chevron-up",
      down: "fas fa-chevron-down",
      previous: "fas fa-chevron-left",
      next: "fas fa-chevron-right",
      today: "fas fa-check",
      clear: "fas fa-trash",
      close: "fas fa-times",
    },
  });

  function openAddEditForm() {
    $("#myModal").modal("hide");
    $("#myModalSave").modal();
  }

  $("#btnSave").click(function () {
    //Validation/

    SaveEvent();
  });

  function SaveEvent() {
    //Validation/

    $("#myModalSave").modal("hide");
  }
})(jQuery);
