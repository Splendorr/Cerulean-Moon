console.log 'hello there!'

# Begin document.ready:
$ ->
  $('.slider').slick
    slidesToShow: 1
    slidesToScroll: 1
    speed: 300
    arrows: true
    dots: true
    adaptiveHeight: false
    # asNavFor: '.responsiveslider'
# End document.ready