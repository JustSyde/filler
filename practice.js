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

    var $chk = 1;

    $('.threeLines').on('click', function(){
        if ($chk == 1){
            $('.hmhm').addClass('menuUL');
            $('.hmhm').css('display', 'block');
            $('html').addClass('scrollNo');
            $chk=2;
        }else{
            $('.hmhm').removeClass('menuUL');
            $('.hmhm').css('display', 'none');
            $('html').removeClass('scrollNo');
            $chk=1;
        }
    })

    var $slides = $('.slides');
    var $left = $('.leftarr');
    var $right = $('.rightarr');
    var $counter = 1;
    var $numberOfImages = 6;
    var $screenWidth = $('.screenWidth');
    var $fontSize = $screenWidth / 50;
    var $attentionText = $('.attention_text');
    var $press1 = $('.press1');

    $slides.css("margin-left", "0px");
    $counter = 1;
    $screenWidth = $(window).outerWidth();

    $(window).on('resize', function(){
        $slides.css("margin-left", "0px");
        $counter = 1;
        $screenWidth = $(window).outerWidth();
        $fontSize = $screenWidth / 50;
        $chk=1;
        $('html').removeClass('scrollNo');
        if ($screenWidth<1100){
            $text.css("font-size", $fontSize + "px");
            $text1.css("font-size", $fontSize+$fontSize/2 + "px");
            $press1.css("font-size", $fontSize+$fontSize/2 + "px");
            $press1.css("width", $fontSize*12 + "px")
            $('.press').css("width", $fontSize*6 + "px");
            $attentionText.css("font-size", $fontSize*2 + "px");
            $attentionText.css("max-width", (($fontSize*50)/1.22)  + "px");
            $attentionText.css("padding-top", (($fontSize*50)/18.33)/2  + "px");
            $attentionText.css("padding-bottom", (($fontSize*50)/18.33)/2  + "px");
            $('.hold_text').css("max-height", (($fontSize*50)/3.28)  + "px");
        }

        if ($screenWidth>=685){
            $('.hmhm').removeClass('menuUL');
            $('.hmhm').css('display', 'flex');
            $chk=1;
        }

        if ($screenWidth<=684){
            $('.hmhm').css('display', 'none');
        }

        if ($screenWidth<=390){
            $('.hmhm').css('display', 'none');
        }
        
    });

    $(window).trigger('resize');

    $right.on('click', function(){
        console.log('Counter:       ' + $counter);
        console.log('Screen Width:  ' + $screenWidth);
        if ($counter==$numberOfImages){
            $slides.css("margin-left", "0px");
            $counter = 1;
        } else {
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth*$counter + "px");
            $counter++;
        }
       });
       
    $left.on('click', function(){
        console.log('Counter:       ' + $counter);
        console.log('Screen Width:  ' + $screenWidth);
        if ($counter==1){
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth*($numberOfImages-1) + "px");
            $counter = $numberOfImages;
        } else {
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth * ($counter-2) + "px");
            $counter--;
        }
    });


});