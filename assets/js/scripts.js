// tooltips
// vaksin
const tooltipsPship = document.querySelectorAll(".vaksin__tt");
tooltipsPship.forEach((t) => {
  new bootstrap.Tooltip(t);
});

// status kuota
const tooltipsKuota = document.querySelectorAll(".kuota__status");
tooltipsKuota.forEach((t) => {
  new bootstrap.Tooltip(t);
});

// scroll to up button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 720) {
      $(".scroll__up").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $(".scroll__up").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });

  $(".scroll__up").click(function () {
    $("html").animate({ scrollTop: 0 }, 150);
  });
});

// modal
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
