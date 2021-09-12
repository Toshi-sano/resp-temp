$(function() {

  // コピペここから
  var gnav = $('.gnav');
    var gnav_content = $('.gnav-content');
    gnav.css('cursor', 'pointer');
    gnav.on('click', function () {
        $(this).toggleClass('active');
        gnav_content.fadeToggle(500, 'swing');
    });
    gnav_content.on('click', function () {
        $(this).fadeToggle(500, 'swing');
        gnav.removeClass('active');
    });
  // コピペここまで
  
});
