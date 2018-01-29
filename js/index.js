$('.menu_btn').on('click', function(){
  $('.popup_menu_area').addClass('open');
  $('.close_btn').on('click', function(){
    $('.popup_menu_area').removeClass('open');
  });
});
