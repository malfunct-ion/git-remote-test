$(function () {
  $(".dropdown-menu").on("click", function (e) {
    e.stopPropagation();
  });

  $(".dropdown-menu .tab-car").click(function () {
    $(this).tab("show");
  });
});
