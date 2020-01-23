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

    var $slides = $('.slides');
    var $left = $('.leftarr');
    var $right = $('.rightarr');
    var $counter = 1;
    var $imgWidth = 1100;
    var $numberOfImages = 6;

    $right.on('click', function(){
        if ($counter==$numberOfImages){
            $slides.css("margin-left", "0px");
            $counter = 1;
        } else {
            $slides.css("margin-left", "-" + $imgWidth*$counter + "px");
            $counter++;
        }
        
    });

    $left.on('click', function(){

        if ($counter==1){
            $slides.css("margin-left", "-" + $imgWidth*($numberOfImages-1) + "px");
            $counter = $numberOfImages;
        } else {
            $slides.css("margin-left", "-" + $imgWidth*($counter-2) + "px");
            $counter--;
        }
        
    });

});