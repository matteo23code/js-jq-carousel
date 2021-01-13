$(document).ready(function() {

  $('.next').click(function() {
    //creo una variabile
    var activeImg = $('.images img.active');
    if (activeImg.hasClass('last')) {
      var firstImg = $('.images img.first');
      //aggiungi la classe active a firtsImg
      firstImg.addClass('active');
      activeImg.removeClass('active');
    }else {
      activeImg.removeClass('active').next().addClass('active');
    }
  });


  $('.prev').click(function() {
    var activeImg = $('.images img.active');
    if (activeImg.hasClass('first')) {
      var lastImg = $('.images img.last');
      lastImg.addClass('active');
      activeImg.removeClass('active');
    }else {
      activeImg.removeClass('active').prev().addClass('active');
    }
  });

});
