$(document).ready(function () {
  $('.menu-btn').click(function () {
    $('.nav-links').toggleClass('show');
    $('.menu-btn').toggleClass('menu_close');
    $('.nav-links').toggleClass('navbar_show');
    $('body').toggleClass('lock-scroll');
  });
});