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
  $(document).on(
    "click",
    ".navbar-brand, .nav-link, .dropdown-item, .btn-down",
    function () {
      var scrollView = $("#top-header").outerHeight() + 60;
      var locate = $(this.hash);
      if (locate.length) {
        var scrollto = locate.offset().top - scrollView;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          500,
          "easeInQuad"
        );
        return false;
      }
    }
  );

  // hide nav
  var scrollNav = 0;
  $(window).scroll(function () {
    var scrollToHide = $(window).scrollTop();
    $(".navbar").toggleClass("hidden", scrollToHide > scrollNav);
    scrollNav = scrollToHide;
  });
  // hover
  if ($(window).width() > 750) {
    $(".title-menu").hover(
      function () {
        $(this).children(".title-dropdown-item").css({
          cssText: "color: #e02e5b !important; background-color: transparent;",
        });
      },
      function () {
        $(this).children(".title-dropdown-item").css({
          cssText: "color: #000 !important; background-color: transparent;",
        });
      }
    );
    $(".navbar .dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(10).fadeIn(10);
      },
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(150).fadeOut(50);
      }
    );
    $(".title-dropdown-item").css({ cssText: " color: #27282e" });
    $(".navbar .dropdown .dropdown-menu").css({
      cssText: "background-color: #f4f4f4",
    });
  }
  if ($(window).width() < 768) {
    $(".navbar .dropdown")
      .find(".dropdown-menu")
      .unbind("mouseenter")
      .unbind("mouseleave");
    $(".navbar .dropdown .dropdown-menu").css({
      cssText: "background-color: #c03",
    });
    $(".title-dropdown-item").css({ cssText: " color: #fff" });
    $(".nav-item").click(function () {
      $(this)
        .children(".nav-link")
        .children(".fa-caret-left")
        .attr("class", "fas fa-chevron-down icon-dropdown");
    });
  }
  $(".nav-item").hover(
    function () {
      $(this)
        .children(".nav-link")
        .children(".fa-caret-left")
        .css({ cssText: "transform: rotate(-90deg);" });
    },
    function () {
      $(this)
        .children(".nav-link")
        .children(".fa-caret-left")
        .css({ cssText: "transform: rotate(0);" });
    }
  );
  // resize
  $(window).resize(function () {
    let width = $(window).width();
    if (width > 750) {
      $(".nav-item").hover(
        function () {
          $(this)
            .children(".nav-link")
            .children(".fa-caret-left")
            .css({ cssText: "transform: rotate(-90deg);" });
        },
        function () {
          $(this)
            .children(".nav-link")
            .children(".fa-caret-left")
            .css({ cssText: "transform: rotate(0);" });
        }
      );
      $(".title-menu").hover(
        function () {
          $(this).children(".title-dropdown-item").css({
            cssText:
              "color: #e02e5b !important; background-color: transparent;",
          });
        },
        function () {
          $(this).children(".title-dropdown-item").css({
            cssText: "color: #000 !important; background-color: transparent;",
          });
        }
      );
      $(".title-dropdown-item ").css({
        cssText: "color: #000;",
      });
      // $(".nav-item").hover(
      //   function () {
      //     $(this).css("background-color", "#27282e");
      //   },
      //   function () {
      //     $(this).css("background-color", "transparent");
      //   }
      // );
      $(".navbar .dropdown").hover(
        function () {
          $(this).find(".dropdown-menu").stop(true, true).delay(10).fadeIn(10);
        },
        function () {
          $(this)
            .find(".dropdown-menu")
            .stop(true, true)
            .delay(150)
            .fadeOut(50);
        }
      );
      $(".navbar .dropdown .dropdown-menu").css({
        cssText: "background-color: #f4f4f4;",
      });
      $(
        ".navbar-collapse.collapse.show > .navbar-nav > .nav-item > .nav-link"
      ).css({ cssText: "color: red !important" });

      if ($(this).scrollTop() > 30) {
        $(".navbar-collapse.collapse")
          .css("background-color", "transparent")
          .collapse("hide")
          .children(".navbar-nav")
          .children(".nav-item")
          .children(".nav-link")
          .css({ cssText: "color: #fff !important" });
      } else {
        $(".navbar-collapse.collapse")
          .css("background-color", "transparent")
          .collapse("hide")
          .children(".navbar-nav")
          .children(".nav-item")
          .children(".nav-link")
          .css({ cssText: "color: #000 !important" });
      }
    } else if (width < 768) {
      $(".nav-item").hover(
        function () {
          $(this)
            .children(".nav-link")
            .children(".fa-caret-left")
            .css({ cssText: "transform: rotate(-90deg);" });
        },
        function () {
          $(this)
            .children(".nav-link")
            .children(".fa-caret-left")
            .css({ cssText: "transform: rotate(0);" });
        }
      );
      $(".navbar .dropdown").unbind("mouseenter").unbind("mouseleave");
      $(".title-menu").hover(
        function () {
          $(this).children(".title-dropdown-item").css({
            cssText: "color: #fff !important; background-color: transparent;",
          });
        },
        function () {
          $(this).children(".title-dropdown-item").css({
            cssText: "color: #fff !important; background-color: transparent; ",
          });
        }
      );
      $(".navbar .dropdown .dropdown-menu").css({
        cssText: "background-color: #c03;",
      });
      $(".title-dropdown-item ").css({
        cssText: "color: #fff;",
      });
      // $(".nav-item").hover(
      //   function () {
      //     $(this).css("background-color", "#c03");
      //   },
      //   function () {
      //     $(this).css("background-color", "transparent");
      //   }
      // );
      $(".navbar-collapse.collapse")
        .css("background-color", "#c03")
        .collapse("hide")
        .children(".navbar-nav")
        .children(".nav-item")
        .children(".nav-link")
        .css({ cssText: "color: #fff !important" });
      $(".navbar .dropdown")
        .find(".dropdown-menu")
        .unbind("mouseenter")
        .unbind("mouseleave");
    }
  });
  // back to top
  $(window).scroll(function () {
    var initialSrc = "images/svg/logo.svg";
    var scrollSrc = "images/svg/logo-white.svg";
    if ($(this).scrollTop() > 10) {
      $(".logo-icon").attr("src", scrollSrc);
      $(".back-to-top").fadeIn("slow");
      $(".navbar").css("background-color", "#c03");
      $(".navbar-collapse.collapse.show").css("background-color", "#c03");
      $(".navbar-collapse.collapse")
        .collapse("hide")
        .children(".navbar-nav")
        .children(".nav-item")
        .children(".nav-link")
        .css({ cssText: "color: #fff !important" });
      // $(".nav-item").hover(
      //   function () {
      //     $(this).css("background-color", "#fff");
      //     $(this)
      //       .children(".nav-link")
      //       .css({ cssText: "color: #000 !important" });
      //   },
      //   function () {
      //     $(this).css("background-color", "transparent");
      //     $(this)
      //       .children(".nav-link")
      //       .css({ cssText: "color: #fff !important" });
      //   }
      // );
    } else {
      $(".logo-icon").attr("src", initialSrc);
      $(".back-to-top").fadeOut("slow");
      $(".navbar").css("background-color", "transparent");
      // $(".dropdown-items,.dropdown-menu").css("background-color", "#f4f4f4");

      $(".navbar-collapse.collapse.show").css("background-color", "#c03");

      if ($(window).width() > 750) {
        $(".navbar-collapse.collapse")
          .collapse("hide")
          .children(".navbar-nav")
          .children(".nav-item")
          .children(".nav-link")
          .css({ cssText: "color: #000 !important" });
      } else if ($(window).width() < 768) {
        $(".navbar-collapse.collapse")
          .collapse("hide")
          .children(".navbar-nav")
          .children(".nav-item")
          .children(".nav-link")
          .css({ cssText: "color: #fff !important" });
      }

      // $(".nav-item").hover(
      //   function () {
      //     $(this).css("background-color", "#f4f4f4");
      //     $(this)
      //       .children(".nav-link")
      //       .css({ cssText: "color: #000 !important" });
      //   },
      //   function () {
      //     $(this).css("background-color", "transparent");
      //     if ($(window).width() > 750) {
      //       $(this)
      //         .children(".nav-link")
      //         .css({ cssText: "color: #000 !important" });
      //     }
      //     if ($(window).width() < 765) {
      //       $(this)
      //         .children(".nav-link")
      //         .css({ cssText: "color: #fff !important" });
      //     }
      //   }
      // );
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

  // custom input file

  $("input[type='file']").change(function () {
    $("#val").text(this.value.replace(/C:\\fakepath\\/i, ""));
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
  // the team
  $(window).on("load", function () {
    var partnerIsotope = $(".box-info-the-team").isotope({
      itemSelector: ".col-info-the-team",
      layoutMode: "fitRows",
    });
    $(".list-title-team .title-team").on("click", function () {
      $(".list-title-team .title-team").removeClass("active-the-team");
      $(this).addClass("active-the-team");
      partnerIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
  });
  // calendar config
  // calendar libary
  mobiscroll.setOptions({
    locale: mobiscroll.localeEn, // Specify language like: locale: mobiscroll.localePl or omit setting to use default
    theme: "auto", // Specify theme like: theme: 'ios' or omit setting to use default
    themeVariant: "light", // More info about themeVariant: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-themeVariant
  });

  $(function () {
    var oldEvent,
      tempEvent = {},
      deleteEvent,
      restoreEvent,
      $title = $("#event-title"),
      $description = $("#event-desc"),
      $allDay = $("#event-all-day"),
      $statusFree = $("#event-status-free"),
      $statusBusy = $("#event-status-busy"),
      $deleteButton = $("#event-delete"),
      datePickerResponsive = {
        medium: {
          controls: ["calendar"],
          touchUi: false,
        },
      },
      datetimePickerResponsive = {
        medium: {
          controls: ["calendar", "time"],
          touchUi: false,
        },
      },
      now = new Date(),
      myData = [{}];

    function createAddPopup(elm) {
      // hide delete button inside add popup
      $deleteButton.hide();

      deleteEvent = true;
      restoreEvent = false;

      // set popup header text and buttons for adding
      popup.setOptions({
        headerText: "New event", // More info about headerText: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-headerText
        buttons: [
          "cancel",
          {
            // More info about buttons: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-buttons
            text: "Add",
            keyCode: "enter",
            handler: function () {
              calendar.updateEvent({
                id: tempEvent.id,
                title: tempEvent.title,
                description: tempEvent.description,
                allDay: tempEvent.allDay,
                start: tempEvent.start,
                end: tempEvent.end,
                color: tempEvent.color,
              });

              // navigate the calendar to the correct view
              calendar.navigate(tempEvent.start);

              deleteEvent = false;
              popup.close();
            },
            cssClass: "mbsc-popup-button-primary",
          },
        ],
      });

      // fill popup with a new event data
      $title.mobiscroll("getInst").value = tempEvent.title;
      $description.mobiscroll("getInst").value = "";
      $allDay.mobiscroll("getInst").checked = true;
      range.setVal([tempEvent.start, tempEvent.end]);
      $statusBusy.mobiscroll("getInst").checked = true;
      range.setOptions({
        controls: ["date"],
        responsive: datePickerResponsive,
      });

      // set anchor for the popup
      popup.setOptions({ anchor: elm });

      popup.open();
    }

    function createEditPopup(args) {
      var ev = args.event;
      // show delete button inside edit popup
      $deleteButton.show();

      deleteEvent = false;
      restoreEvent = true;

      // set popup header text and buttons for editing
      popup.setOptions({
        headerText: "Edit event", // More info about headerText: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-headerText
        buttons: [
          "cancel",
          {
            // More info about buttons: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-buttons
            text: "Save",
            keyCode: "enter",
            handler: function () {
              var date = range.getVal();

              // update event with the new properties on save button click
              calendar.updateEvent({
                id: ev.id,
                title: $title.val(),
                description: $description.val(),
                allDay: $allDay.mobiscroll("getInst").checked,
                start: date[0],
                end: date[1],
                free: $statusFree.mobiscroll("getInst").checked,
                color: ev.color,
              });

              // navigate the calendar to the correct view
              calendar.navigate(date[0]);

              restoreEvent = false;
              popup.close();
            },
            cssClass: "mbsc-popup-button-primary",
          },
        ],
      });

      // fill popup with the selected event data
      $title.mobiscroll("getInst").value = ev.title || "";
      $description.mobiscroll("getInst").value = ev.description || "";
      $allDay.mobiscroll("getInst").checked = ev.allDay || false;
      range.setVal([ev.start, ev.end]);

      if (ev.free) {
        $statusFree.mobiscroll("getInst").checked = true;
      } else {
        $statusBusy.mobiscroll("getInst").checked = true;
      }

      // change range settings based on the allDay
      range.setOptions({
        controls: ev.allDay ? ["date"] : ["datetime"],
        responsive: ev.allDay ? datePickerResponsive : datetimePickerResponsive,
      });

      // set anchor for the popup
      popup.setOptions({ anchor: args.domEvent.currentTarget });
      popup.open();
    }

    var calendar = $("#demo-add-delete-event")
      .mobiscroll()
      .eventcalendar({
        clickToCreate: "double", // More info about clickToCreate: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-clickToCreate
        dragToCreate: true, // More info about dragToCreate: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-dragToCreate
        dragToMove: true, // More info about dragToMove: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-dragToMove
        dragToResize: true, // More info about dragToResize: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-dragToResize
        view: {
          // More info about view: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-view
          calendar: { labels: true },
        },
        data: myData, // More info about data: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-data
        onEventClick: function (args) {
          // More info about onEventClick: https://docs.mobiscroll.com/5-5-1/eventcalendar#event-onEventClick
          oldEvent = { ...args.event };
          tempEvent = args.event;

          if (!popup.isVisible()) {
            createEditPopup(args);
          }
        },
        onEventCreated: function (args) {
          // More info about onEventCreated: https://docs.mobiscroll.com/5-5-1/eventcalendar#event-onEventCreated
          popup.close();

          // store temporary event
          tempEvent = args.event;
          createAddPopup(args.target);
        },
        onEventDeleted: function () {
          // More info about onEventDeleted: https://docs.mobiscroll.com/5-5-1/eventcalendar#event-onEventDeleted
          mobiscroll.snackbar({
            button: {
              action: function () {
                calendar.addEvent(args.event);
              },
              text: "Undo",
            },
            message: "Event deleted",
          });
        },
      })
      .mobiscroll("getInst");

    var popup = $("#demo-add-popup")
      .mobiscroll()
      .popup({
        display: "bottom", // Specify display mode like: display: 'bottom' or omit setting to use default
        contentPadding: false,
        fullScreen: true,
        onClose: function () {
          // More info about onClose: https://docs.mobiscroll.com/5-5-1/eventcalendar#event-onClose
          if (deleteEvent) {
            calendar.removeEvent(tempEvent);
          } else if (restoreEvent) {
            calendar.updateEvent(oldEvent);
          }
        },
        responsive: {
          // More info about responsive: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-responsive
          medium: {
            display: "anchored", // Specify display mode like: display: 'bottom' or omit setting to use default
            width: 400, // More info about width: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-width
            fullScreen: false,
            touchUi: false,
          },
        },
      })
      .mobiscroll("getInst");

    $title.on("input", function (ev) {
      // update current event's title
      tempEvent.title = ev.target.value;
    });

    $description.on("change", function (ev) {
      // update current event's title
      tempEvent.description = ev.target.value;
    });

    $allDay.on("change", function () {
      var checked = this.checked;

      // change range settings based on the allDay
      range.setOptions({
        controls: checked ? ["date"] : ["datetime"],
        responsive: checked ? datePickerResponsive : datetimePickerResponsive,
      });

      // update current event's allDay property
      tempEvent.allDay = checked;
    });

    var range = $("#event-date")
      .mobiscroll()
      .datepicker({
        controls: ["date"],
        select: "range",
        startInput: "#start-input",
        endInput: "#end-input",
        showRangeLabels: false,
        touchUi: true,
        responsive: datePickerResponsive, // More info about responsive: https://docs.mobiscroll.com/5-5-1/eventcalendar#opt-responsive
        onChange: function (args) {
          var date = args.value;

          // update event's start date
          tempEvent.start = date[0];
          tempEvent.end = date[1];
        },
      })
      .mobiscroll("getInst");

    $("input[name=event-status]").on("change", function () {
      // update current event's free property
      tempEvent.free = $statusFree.mobiscroll("getInst").checked;
    });

    $deleteButton.on("click", function () {
      // delete current event on button click
      calendar.removeEvent(oldEvent);

      popup.close();

      mobiscroll.snackbar({
        button: {
          action: function () {
            calendar.addEvent(tempEvent);
          },
          text: "Undo",
        },
        message: "Event deleted",
      });
    });
  });
})(jQuery);
