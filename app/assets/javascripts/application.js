//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require application
console.log("hello there")


$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("banner2").offset().top},
        'slow');
});
