$(function () {
  $(".dropdown-menu").on("click", function (e) {
    e.stopPropagation();
  });

  $(".dropdown-menu .tab-car").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
