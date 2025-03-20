var positionElementInPage = $('#headerMenu').offset().top;
$(window).scroll(
	
    function() {
        if ($(window).scrollTop() >= positionElementInPage) {
            // fixed
				
            $('#headerMenu').addClass("floatable");
        } else {
            // relative
				
            $('#headerMenu').removeClass("floatable");
        }
    }
);

$('#headerMenu1').click(function() {
     $('html,body').animate({scrollTop: $("#employmentTitle").offset().top-25}, 'slow');
   });

$('#headerMenu2').click(function() {
     $('html,body').animate({scrollTop: $("#companyTitle").offset().top-25}, 'slow');
   });
$('#headerMenu3').click(function() {
     $('html,body').animate({scrollTop: $("#activityTitle").offset().top-25}, 'slow');
   });
$('#headerMenu4').click(function() {
     $('html,body').animate({scrollTop: $("#creditContainer").offset().top-25}, 'slow');
   });