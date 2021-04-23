
/* box-wrap code*/
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");
var btnReset = document.getElementById("btn-reset")

var number = 0;
var a = 0;

// Function to change color of the number
// If number is less than 0 color is red, if more than 0 color is green and if 0, color is white.

function changeColor(number){
    var color = "";
    if (number > 0 ){
        color = "black";
    }else{
        color="white";
    }
    return color;
}
function reachedNumber(number){
    alert("تقبّل الله عملك وغفر لك");
}
var reset = function() {
    a = 0;
    counterPlaceHolder.innerHTML = a;
}


btnReset.addEventListener("click", function() {
    reset();
})
jQuery(document).ready(function() {

    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    
        Navigation
   
   $('a.scroll-link').on('click', function(e) {
        e.preventDefault();
        scroll_to($(this), 0);
    });



btnIncrement.addEventListener("click", function(){
    number++;
    if (number == 100){
      reachedNumber();
    }
    counterPlaceHolder.innerHTML = number;
counterPlaceHolder.style.color = changeColor(number);
});
