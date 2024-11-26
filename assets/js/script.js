console.log("yogort");

if(jQuery) {
    console.log("jQuery loaded");
}

else {
    console.log("no query")
}

$('.faq-question').click( function() {
    //get this faq questions cjild that
    $(this).children('p').slideToggle(500)
    $(this).children('button').toggleClass('closed open')
});


$('#menu-button').click( function(){
    $('#overlay-menu-container').fadeIn();

})
$('#close-menu').click( function(){
    $('#overlay-menu-container').fadeOut();
    
})