((window, document) => {
    $('.text').mousedown(function() {
        $(this).addClass('text-click')
    })

    $('.text').mouseup(function() {
        $(this).removeClass('text-click')
    })

    $('.text-staff').click(() => {
        $('.title-line').addClass('title-line-ani')
        $('.box-child').addClass('box-child-ani')
    })

    $('.text-student').click(() => {
        $('.title-line').removeClass('title-line-ani')
        $('.box-child').removeClass('box-child-ani')
    })
})(window, document);

((window, document) => {
    $('input').focus(function() {
        $(this).siblings('label').addClass("label-ani")
    })

    $('input').blur(function(e) {
        if (!e.target.value)
            $(this).siblings('label').removeClass("label-ani")
    })
})(window, document);