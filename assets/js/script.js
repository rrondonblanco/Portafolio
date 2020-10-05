$(function(){
    
    $("a").click(function(event){
        if (this.hash !=="") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 2000, function(){
                windows.location.hash = gato;
            });
        }  
    });

    $('[data-toggle="popover"]').popover();

});

$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
    $(".jumbotron").css({ height: $(window).height() + "px" });
});