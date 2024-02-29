(function($){
    // 'use strict';
    if($("#switch-title").length){
        var switchTitle = $("#switch-title").find("a");
        var switchbox = $(".content").find(".slide");
        switchTitle.each(function(){
            var Self = $(this);
            var switchID = Self.attr("href");
            Self.on("click", function(){
                switchTitle.removeClass("active");
                Self.addClass("active");
                switchbox.removeClass("active");
                $(switchID).addClass("active");
                return false;
            })
        })
    }
// })(jQuery);

// magnific Script
// (function($){
    $(".open").magnificPopup({
            type:'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeButtonInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
    });
// login-signup
$(document).on("click", ".user, .already-account", function(){
    $(".banner-form").addClass("login-active").removeClass("sign-up-active");
})
$(document).on("click", ".sign-up-btn", function(){
    $(".banner-form").addClass("sign-up-active").removeClass("login-active");
})

// cancel-btn
$(document).on("click", ".form-cancel", function(){
    $(".banner-form").removeClass("login-active").removeClass("sign-up-active");
})
// login-signup

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 0){
    $('.home').addClass('scrolled');
    }else{
        $('.home').removeClass('scrolled');
    }
});
    
})(jQuery);



function show(){
    var popup = document.querySelector(".popup");
    popup.classList.toggle("active");
}
function menuToggle(){
    var nav = document.querySelector(".menu-overlay");
    nav.classList.toggle("active");
    var toggleIcon = document.querySelector(".toggleIcon");
    toggleIcon.classList.toggle("active");
}

// circular menu

var i = 0;
function menus(){
    if (i == 0) {
        document.getElementById('links').style.transform = "scale(1.5)";
        document.getElementById('plus').style.transform = "rotate(45deg)";
        i = 1;
    }
    else{
        document.getElementById('links').style.transform = "scale(0)";
        document.getElementById('plus').style.transform = "rotate(0deg)";
        i = 0;
    }
}
const image_input = document.querySelector("image_box");
var upload_image = "";

image_input .addEventListener  ("change",function(){
    const reader = newFileReader();
    reader.addEventListener ("load",()=>{
        upload_image =reader.result;
        document.querySelector("post_area").style.backgroundImage='url(${uploaded_image}}';
         reader.readAsDataURL(this.file[0]);
    })
})