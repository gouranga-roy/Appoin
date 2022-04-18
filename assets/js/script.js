$(document).ready(function () {
  // AOS.init();
  AOS.init();
  // Owl-carousel
  $(".partner-item").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 4,
      },
    },
  });
  // Mobile menu
  $(".menu-bars").click(function () {
    $(".menu").animate({
      right: 0,
    });
  });
  $(".nav-close").click(function () {
    $(".menu").animate({
      right: -300,
    });
  });
  //Click event to scroll to top
  $("#scrollBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
    return false;
  });
  // MixiTup
  var containerEl = $(".portfolio-gallery");
  var mixer = mixitup(containerEl, {
    load: {
      filter: ".graphic",
    },
    animation: {
      effectsIn: "fade translateY(-100%)",
      effects: "fade translateZ(-100px)",
    },
  });
});

// ScrollBar
$(window).scroll(function () {
  const scrollBar = $(window).scrollTop();
  if (scrollBar > 300) {
    $("#scrollBtn").fadeIn();
    $(".header-top-area").addClass("header-fixed");
    $(".menu").css({
      top: "100%",
    });
  } else {
    $("#scrollBtn").fadeOut();
    $(".header-top-area").removeClass("header-fixed");
    $(".menu").css({
      top: "20%",
    });
  }
});

// Preeloader
$(window).on("load", function () {
  $(".preeloader-item").fadeOut().delay(200);
});
// Rating-item
const planSwitch = document.querySelector("#select-monthYear");
const ratingTime = document.querySelector("#ratingTime");
const ratmonthYear = document.querySelector("#ratmonthYear");
planSwitch.addEventListener("change", function () {
  if (planSwitch.checked) {
    ratingTime.innerText = "100";
    ratmonthYear.innerText = "Year";
  } else {
    ratingTime.innerText = "9";
    ratmonthYear.innerText = "Month";
  }
});
