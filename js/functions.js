$(function (){ // document ready
    
// Wrap every letter in a span
$('.ml3').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 350,
      delay: function(el, i) {
        return 100 * (i+1)
      }
    });
      
      
  $('.toggle1').on({
          'click':function(){
            $('.text1').fadeOut();
          $('.skills1').fadeIn();
          }
      });
  
  $('.back1').on({
  'click':function(){
          $('.skills1').fadeOut();
      $('.text1').fadeIn();
          }
   });
    
    
$('.toggle1').on({
        'click':function(){
          $('.text1').fadeOut();
        $('.skills1').fadeIn();
		}
	});

$('.back1').on({
'click':function(){
		$('.skills1').fadeOut();
    $('.text1').fadeIn();
		}
 });

$('.toggle2').on({
        'click':function(){
          $('.text2').fadeOut();
        $('.skills2').fadeIn();
		}
	});

$('.back2').on({
'click':function(){
		$('.skills2').fadeOut();
    $('.text2').fadeIn();
		}
 });

$('.toggle3').on({
        'click':function(){
          $('.text3').fadeOut();
        $('.skills3').fadeIn();
		}
	});

$('.back3').on({
'click':function(){
		$('.skills3').fadeOut();
    $('.text3').fadeIn();
		}
 });
    
$(".contact").click(function(){
  $("#contact").slideToggle();
});
    
$(".contactClose").click(function(){
  $("#contact").slideToggle();
});
    
var circles;
    circles = $('.circle:not(.center)');
$(document).ready(function () {

    
    


    $('.person_image').mouseenter(function(){
        circles.removeClass('slidein');
            //console.log( "ready!" );
    var circlesize = 0;
    circlesize = $('.circle-container').width();
    var rot = 42.5; /* Starting point and Rotation angle for the current item */
    var spread = 120;
    var angle = spread / circles.length; /* Angle between two items */
    var vCSS;
        circles.each(function (index, el) {
            //Transform position around the circle
            vCSS = "rotate(" + rot + "deg) translate(" + circlesize / 2 + "px) rotate(-" + rot + "deg)";
            $(el).css({
                'transform': vCSS
            });
            rot = rot + angle; /* Increments the rotation variable for next item */
            //Animation Delay
            //vCSS = parseInt(index / 10, 2) + "." + index % 10 + "s";
            vCSS = "0." + index % 20 + "s";
            $(el).css({
                'animation-delay': vCSS
            });
            //$('#debug').append('<p>' + vCSS + '</p>');
            $(el).css({'opacity':'0'});
            $(el).addClass('slideout');
        });
    });




    $('.circle_icons_wrapper').mouseleave(function(){
        //circles.removeClass('slideout');
          //circles.css({'animation-delay': 0});
        circles.css({'opacity': 1});
          circles.each(function (index, el) {
                //
                $(el).addClass('slidein');
                //circles.css({'transform':'all 1s'});
                //circles.css({'transform':'rotate(0deg) translate(0px)'});
          });
    });
    
    
    
    
    
});
  
$('a').smoothScroll();

});

//enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body'
  })
});

// popovers Initialization
$(function () {
  $('[data-toggle="popover"]').popover({
    container: 'body'
  })
  })

// popovers initialization - on hover
$('[data-toggle="popover-hover"]').popover({
  html: true,
  trigger: 'hover',
  placement: 'bottom',
  content: function () { return '<img src="' + $(this).data('img') + '" />'; }
});
