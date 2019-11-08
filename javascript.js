$(document).ready(function () {

    $("body").fadeIn(1000);


    $(".scroll").click(function (event) {
        event.preventDefault();
        let hash = this.hash;
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    });

});






var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myContainer");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
