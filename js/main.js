var btn = document.getElementById('btn');
btn.onclick = function() {
    var text = document.querySelector('p.intro');
    text.classList.add('.red');
}

$(function () {
    $(window).scroll(function() {
        $('.learn__title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
});