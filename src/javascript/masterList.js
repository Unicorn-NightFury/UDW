

(function(window, document) {
    window.onload = function() {
        $('.main-title-line').addClass('main-title-ani');
        $('.nav').addClass('nav_slide')
    }
})(window, document);




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
            <div class="unit-item-lecturer unit-item-tip">Lecturer:&nbsp;<span class="change-item-val">${data.lecturer};</span></div>
            <div class="unit-item-capacity unit-item-tip">Capacity:&nbsp;<span class="change-item-val">${data.capacity};</span></div>
            <div class="unit-item-campause unit-item-tip">Campause:&nbsp;<span class="change-item-val">${data.campuses};</span></div>
            <div class="unit-item-period unit-item-tip">Period:&nbsp;<span class="change-item-val">${data.periods};</span></div>
            <div class="unit-item-description unit-item-unshow">Description:&nbsp;&nbsp;&nbsp;<p><span class="change-item-val">${data.description};</span></p></div>
            <div class="unit-item-croll">
                <div class="unit-item-delete unit-item-controll">Delete</div>
                <div class="unit-item-change unit-item-controll">修改</div>
                <div class="unit-item-show unit-item-controll">show detail</div>
            </div>
        </div>
        `

        $('.main-list-unit').append(el);
        $("#unit-name").val("");
        $("#unit-lecturer").val("");
        $("#unit-capacity").val("");
        $("#unit-campuses").val("");
        $("#unit-periods").val("");
        $("#description").val("");
    }

})(window, document);


// unit-item-controll
((window, document) => {
    $(document).on("click", ".unit-item-show" ,function() {
        $(this).parent().parent().addClass("unit-item-detail");
        $(this).parent().siblings(".unit-item-description").removeClass('unit-item-unshow');
    });


    $(document).on('click', '.unit-item-change', function() {
        $('.main-list-unit').addClass('shadow-show');
        $('.unit-change-box').fadeIn();
        let name = $(this).parent().parent().find('.unit-item-name').text();
        let text = $(this).parent().parent().find('.change-item-val').text();
        let arr = text.split(";");
        let data = {
            name: name,
            lecturer: arr[0],
            capacity: arr[1],
            campuse: arr[2],
            period: arr[3],
            description: arr[4]
        }
        
        console.log(data);
        let el = `
        <div class="unit-change-box">
            <div class="unit-change-close"><span>+</span></div>
            <div class="unit-change-input unit-change-input-name">
                <span>Name: &nbsp;</span>
                <input type="text" id="change-name">
            </div>
            <div class="unit-change-input">
                <span>Lecturer:</span>
                <input type="text" id="change-lecturer">
            </div>
            <div class="unit-change-input">
                <span>Capacity:</span>
                <input type="text" id="change-capacity">
            </div>
            <div class="unit-change-input">
                <span>Campuse:</span>
                <select class="form-control" name='expertise' required='required' id="change-campuses">
                    <option value='Pandora'>Pandora</option>
                    <option value='Rivendell'>Rivendell</option>
                    <option value='Neverland'>Neverland</option>
                </select>
            </div>
            <div class="unit-change-input">
                <span>Period:</span>
                <select class="form-control" name='expertise' required='required' id="change-periods">
                    <option value='Semester 1'>Semester 1</option>
                    <option value='Semester 2'>Semester 2</option>
                    <option value='Winter School'>Winter School</option>
                    <option value='Spring School'>Spring School</option>
                </select>
            </div>
            
            <div class="unit-change-descript">
                <textarea name=""  cols="30" rows="10" id="change-description"></textarea>
            </div>

            <div class="float-clear"></div>
            <div class="unit-change-btn">
                Change
            </div>
        </div>
        `
        $('.main-list').append(el);

        $('#change-name').val(data.name);
        $('#change-lecturer').val(data.lecturer);
        $('#change-capacity').val(data.capacity);
        $('#change-campuses').val(data.campuse);
        $('#change-periods').val(data.period);
        $('#change-description').val(data.description);

        console.log(data.campuse);
        console.log(data.description);

        $(document).on('click', '.unit-change-close', function() {
            $('.unit-change-box').remove();
            $('.main-list-unit').removeClass('shadow-show');
        })

        $(document).on('click', '.unit-item-delete', function() {
            $(this).parent().parent().remove();
        })
    })
})(window, document);
