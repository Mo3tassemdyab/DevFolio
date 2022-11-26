let aboutOffset =  $('#about').offset().top;
let navHeight = $('nav').outerHeight()
$(window).scroll(function(){
    let windowScroll =  $(window).scrollTop();
    if( windowScroll > aboutOffset - navHeight ){
        $('nav').css('backgroundColor' , 'rgba(0,0,0,0.7)')
        $('.backToTop').fadeIn(1000).css( "display" , "flex")
    }
    else{
        $('nav').css('backgroundColor' , 'transparent')
        $(".backToTop").fadeOut(500)
    }
})
$('a').click( function(e){
let linkHref = $(e.target).attr('href');
    let sectioneOffset = $(linkHref).offset().top;
    $('html , body').animate( { scrollTop: sectioneOffset }, 2000)
})
$('.backToTop').click( function(){
    $('html , body').animate( { scrollTop: 0 }, 2000)
})
$(document).ready( function(){
$('.loadingScreen').fadeOut(1000 , function(){
    $('.loadingScreen').remove()
    $('body').css("overflow" , "auto")
})
})
$('.fa-cogs').click( function(){
  let boxWidth = $('.coloringBox').innerWidth()  
  if($(".coloringBox").css("left") == "0px" ){
    $('.coloringBox').animate({ left: -boxWidth},1000)
  } 
  else{
    $('.coloringBox').animate({ left: 0},1000)
  }
})
