

$(function() {
	$(".vertical-btn").click(function () {

      $('html, body').animate({
        scrollTop:($("#submission").offset().top)-50
       }, 600);
    });
	
	 $(".span").click(function (event) {
        event.preventDefault();
        $( this ).prev().removeClass("hidden");
        this.style.display='none';

  });
	
    if(window.location.hash){
    // smooth scroll to the anchor id
    $('html,body').animate({
        scrollTop:$(window.location.hash).offset().top + 'px'
        },1000,'swing');
    }
 $("#nav-item-1").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 600);
  });
  $("#nav-item-2").click(function () {

    $('html, body').animate({
      scrollTop:($("#about").offset().top)-50
    }, 600);
  });
  $("#nav-item-3").click(function () {
    $('html, body').animate({
      scrollTop: $("#submission").offset().top
    }, 600);
  });
  $("#nav-item-4").click(function () {
    $('html, body').animate({
      scrollTop: ($("#section4").offset().top)-80
    }, 600);
  });
 $("#nav-item-5").click(function () {
    $('html, body').animate({
      scrollTop: ($("#accommodation").offset().top)-50
    }, 600);
  });
$("#nav-item-6").click(function () {
    $('html, body').animate({
      scrollTop: ($("#info").offset().top)-50
    }, 600);
  });
 

  $("#nav-item-1").click(function () {
    $("a").removeClass('active');
    $("#nav-item-1").addClass('active');
  });
  $("#nav-item-2").click(function () {
    $("a").removeClass('active');
    $("#nav-item-2").addClass('active');
  });
  $("#nav-item-3").click(function () {
    $("a").removeClass('active');
    $("#nav-item-3").addClass('active');
  });
  $("#nav-item-4").click(function () {
    $("a").removeClass('active');
    $("#nav-item-4").addClass('active');
  });
$("#nav-item-5").click(function () {
    $("a").removeClass('active');
    $("#nav-item-5").addClass('active');
  });
$("#nav-item-6").click(function () {
    $("a").removeClass('active');
    $("#nav-item-6").addClass('active');
  });
$("#nav-item-7").click(function () {
    $("a").removeClass('active');
    $("#nav-item-7").addClass('active');
  });
 

});
