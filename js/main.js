window.addEventListener('scroll', function () {
  let header = document.querySelector('.headerl');
  let windoposition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windoposition);
})

window.addEventListener('scroll', function () {
  
  if (window.scrollY > 0) {
    $(".back-home").fadeIn(750);
  }
  else{
    $(".back-home").fadeOut(550);
  }
})

        // window.addEventListener('scroll', function () {
        //     var windoposition = [];
        //     if (windoposition = window.scrollY > 0;) 
        //     {
        //     $(".back-home").style.classList("display: inline;")
        // }
        // })
        //  $(window).scroll(function () {
        //     if ($(this).scrollTop() > 100) {
        //         $('.back-home').fadeIn('slow');
        //     } else {
        //         $('.back-home').fadeOut('slow');
        //     }
        // });
        // $('.back-home').click(function () {
        //     $('html, body').animate({
        //         scrollTop: 0
        //     }, 1500, 'easeInOutExpo');
        //     return false;
        // });
        // window.addEventListener('scroll', function () {
        //     let header = document.querySelector('.back-home');
        //     let windoposition = window.scrollY > 0;
        //     header.classList.toggle('scrolling-c', windoposition);
        // })