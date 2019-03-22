console.log("i am in");
$(document).ready(function() {
$("p").css('border-bottom','1px solid black')
$('.first').css('border-color','red')

$('#special').css('background-color','yellow')
$('p.first small').css('background-color','lightgrey')
$('.first').html('lets learn <em> jquery </em>')
$('.first').prepend('<h2> welcome</h2>')
$('.first').after('<small>make web pages interactive</small>')
$('#yourName').val('bob builder')

/*attribute selectors*/
$('a[href="#"]').css('background-color', 'tomato')
$('a[href^="#"]').css('color', 'grey')//$ end with a number sign
$('a[href*="google"]').css('font-weight', 'bold')

//animation functions

/* $('.card:first').delay(1000).hide(400).show(800, function(){
  alert('we are ba')
})*/
$('.card').animate({borderRadius: '20px'}, 1000)


//attribute method
$('img:first').attr('src','./img/image-5.jpg')


//class method

console.log($('img:first').hasClass('special'));
//$('img').addClass('special')
$('img').toggleClass('special')

//events
$('img').click(function(){
  console.log($(this).attr('src'))
  $('img').toggleClass('special')
})
} );
