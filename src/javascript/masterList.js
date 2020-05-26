

(function(window, document) {
    window.onload = function() {
        $('.main-title-line').addClass('main-title-ani');
        $('.nav').addClass('nav_slide')
    }
})(window, document);

// ((window, document) => {
//     $('.main-create-btn').click(() => {
//         let data = {
//             name: $("#unit-name").val(),
//             lecturer: $("#unit-lecturer").val(),
//             capacity: $("#unit-capacity").val(),
//             campuses: $("#unit-campuses").val(),
//             periods: $("#unit-periods").val(),
//             description: $("#description").text()
//         }

//         console.log(data)
//     })
// })(window, document);


// change
((window, document) => {


    $('.li-unit').click(function() {
        console.log("123")
        $('.main-create').removeClass('main-change');
        $('.main-list').removeClass('main-list-change');
    })

    $('.li-staff').click(function() {
        $('.main-create').addClass('main-change');
        $('.main-list').addClass('main-list-change');
    })
})(window, document);



// create unit
((window, document) => {

    $('.main-create-btn').click(function() {
        createItem();
    })

    function createItem() {
        let data = {
            name: $("#unit-name").val(),
            lecturer: $("#unit-lecturer").val(),
            capacity: $("#unit-capacity").val(),
            campuses: $("#unit-campuses").val(),
            periods: $("#unit-periods").val(),
            description: $("#description").val()
        }

        let el = `
        <div class="main-list-unit-item">
            <div class="unit-item-id">ID: 1</div>
            <div class="unit-item-name">
                ${data.name}
            </div>
            <div class="unit-item-lecturer unit-item-tip">Lecturer:&nbsp;${data.lecturer}</div>
            <div class="unit-item-capacity unit-item-tip">Capacity:&nbsp;${data.capacity}</div>
            <div class="unit-item-campause unit-item-tip">Campause:&nbsp;${data.campuses}</div>
            <div class="unit-item-period unit-item-tip">Period:&nbsp;${data.period}</div>
            <div class="unit-item-description unit-item-detail">Description:&nbsp;&nbsp;&nbsp;${data.description}</div>
        </div>
        `

        $('.main-list-unit').append(el);
    }

})(window, document);