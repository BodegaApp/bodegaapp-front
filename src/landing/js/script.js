
 $(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 50) {
        $('.navegation').addClass('bg-nav')
    } else{
        $('.navegation').removeClass('bg-nav')
    }
}); 

  $(function(){
        $('#close-toggle').click(function() {
            $('#navbarNav').toggleClass('open');
        });
        $('#close-x').click(function() {
             $('#navbarNav').removeClass('open show');
        });
        $("#navbarNav ul li a").click(function() {
            $('#navbarNav').toggleClass('open');
        });
    });
