$(function(){

    var $readMore = $('.press');
    var $readLess = $('.press1');
    var $text = $('.text');
    var $text1 = $('.text1');
    var $overlay = $('.overlay')

    $readMore.on('click', function(){
        $text.hide();
        $text1.show();
        $overlay.css("background-color", "rgba(0, 107, 62, 0.75)");
    })

    $readLess.on('click', function(){
        $text1.hide();
        $text.show();
        $overlay.css("background-color", "rgba(0, 139, 186, 0.75)");
    })

    $overlay.mouseleave(function(){
        $text1.hide();
        $text.show();
        $overlay.css("background-color", "rgba(0, 139, 186, 0.75)");
      });
});