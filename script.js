$(document).ready(function(){
    $(".pict").hide();
    $(".pict:first").show();
    $(".next").click(function(){
        var curring = $(".active")
        var nextImg = $(currImg).next()

        if(nextImg.length){
            nextImg.addClass("active")
            currImg.removeClass("active")
            nextImg.fadeIn(1000)
        }
        else{
            $("pict: first").addClass("active")
            currImg.removeClass("active")
            $("pict: first").fadeIn(1000)
        }

    })

})