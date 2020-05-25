

(function(window, document) {
    window.onload = function() {
        $('.main-title-line').addClass('main-title-ani');
        $('.nav').addClass('nav_slide')
    }
})(window, document);

((window, document) => {
    const $ = ele => typeof ele === "string" ? document.querySelector(ele) : "";
    let CLICK = 0;
    const con = $(".nav-btn");
    const slide = $('.nav');
    con.classList.add("nav-btn-click");


    con.onmouseenter = () => con.classList.add("nav-btn-hover");
    con.onmouseleave = () => con.classList.remove("nav-btn-hover");

    con.onclick = () => {
       if (CLICK === 0) {
        con.classList.remove("nav-btn-hover");
        con.classList.remove("nav-btn-click");
        slide.classList.remove("nav_slide");
        CLICK = 1;
       } else {
        con.classList.add("nav-btn-click");
        slide.classList.add("nav_slide");
        CLICK = 0;
       }
    }
    // window.onclick = e => {
    //     if( e.target.className.split(' ')[0] !== "nav-btn" && e.target.className.split(' ')[0] !== "line" ) 
    //         con.classList.remove("nav-btn-click");
    // }

})(window, document);


(function(window, document) {
    $('.register').mouseenter(function() {
        $(".sign-light-box").addClass("sign-light-box-ani")
        $('.login').addClass('choose-color-one')
        $('.register').addClass('choose-color-two')
    })
    $('.register').mouseleave(function() {
        $(".sign-light-box").removeClass("sign-light-box-ani")
        $('.login').removeClass('choose-color-one')
        $('.register').removeClass('choose-color-two')
    })
    
})(window, document);

(function(window, document) {
    $('.login').click(function() {
        $('.main-login').removeClass('main-login-tran')
    })
    $('.login-fork-btn').click(function() {
        $('.main-login').addClass('main-login-tran')
    })
})(window, document);


(function(window, document) {
    $('.login-btn').click(function() {

        let data = {
            id: $('#sid').val(),
            password: $("#spassword").val()
        }

        if (data.id.length == 7) {
            studentLogin(data)
        }

        if (data.id.length == 11) {
            staffLogin(data)
        }

    })


    function studentLogin(data) {
        $.get("./php/api/student/login.php", data, function(data) {
            if(data.error === 0) {
                localStorage.udw = JSON.stringify(data.data);
            }
            else alert(data.data);
        })
    } 

    function staffLogin(data) {
        $.post('./php/api/staff/login.php', data, function(data) {
            if(data.error === 0) {
                localStorage.udw = JSON.stringify(data.data);
            }
            else alert(data.data);
        })
    }
})(window, document);