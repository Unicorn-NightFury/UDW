

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


((window, document) => {
    $('.main-create-btn').click(() => {
        let data = {
            name: $("#unit-name").val(),
            lecturer: $("#unit-lecturer").val(),
            capacity: $("#unit-capacity").val(),
            campuses: $("#unit-campuses").val(),
            periods: $("#unit-periods").val(),
            description: $("#description").text()
        }

        console.log(data)
    })
})(window, document)


