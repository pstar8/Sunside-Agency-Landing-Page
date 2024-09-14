$(document).ready(function () {
  $('.menu-btn').click(displayNav);
  function displayNav() {
    $('.nav-links').toggleClass('show');
    $('.menu-btn').toggle(2000);
    $('body').toggleClass('lock-scroll');
  }
});
