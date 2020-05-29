

(function(window, document) {
    window.onload = function() {
        $('.main-title-line').addClass('main-title-ani');
        $('.nav').addClass('nav_slide')
    }
})(window, document);




// change
((window, document) => {


    $('.li-unit').click(function() {
        $('.main-create').show();
        $('.main-list').show();
        $('.main-create').removeClass('main-change');
        $('.main-list').removeClass('main-list-change');
    })

    $('.li-staff').click(function() {
        $('.main-create').addClass('main-change').hide();
        $('.main-list').addClass('main-list-change').hide();
        
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
            lecturer_id: $("#unit-lecturer").val(),
            capacity: $("#unit-capacity").val(),
            campus: $("#unit-campuses").val(),
            semester: $("#unit-periods").val(),
            description: $("#description").val()
        }

        $.post('./php/api/unit/create.php', data, function(data) {
            if (data.errcode === 0) {
                let obj = data.data;

                let el = `
                    <div class="main-list-unit-item">
                        <div class="unit-item-id">${obj.unit_id}</div>
                        <div class="unit-item-name">
                            ${obj.name}
                        </div>
                        <div class="unit-item-lecturer unit-item-tip">Lecturer:&nbsp;<span class="change-item-val">${obj.lecturer_id};</span></div>
                        <div class="unit-item-capacity unit-item-tip">Capacity:&nbsp;<span class="change-item-val">${obj.capacity};</span></div>
                        <div class="unit-item-campause unit-item-tip">Campause:&nbsp;<span class="change-item-val">${obj.campus};</span></div>
                        <div class="unit-item-period unit-item-tip">Period:&nbsp;<span class="change-item-val">${obj.semester};</span></div>
                        <div class="unit-item-description unit-item-unshow">Description:&nbsp;&nbsp;&nbsp;<p><span class="change-item-val">${obj.description};</span></p></div>
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
                // $("#unit-campuses").val("");
                // $("#unit-periods").val("");
                $("#description").val("");
            }

            else console.error("error!")
        })
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
        let unit_id = $(this).parent().parent().find('.unit-item-id').text()
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

        
        $(document).on('click', '.unit-change-btn', function() {
            
            let data = {
                unit_id: unit_id,
                name: $('#change-name').val(data.name),
                capacity: $('#change-capacity').val(data.capacity),
                description: $('#change-description').val(data.description),
                lecturer_id:  $('#change-lecturer').val(data.lecturer),
                semester: $('#change-periods').val(data.period),
                campus: $('#change-campuses').val(data.campuse)
            }

            $.post('./php/api/unit/modify.php', data, function(data) {
                if (data.errcode === 0) {
                    $(this).parent().parent().remove();
                    let obj = data.data;
                    let el = `
                    <div class="main-list-unit-item">
                        <div class="unit-item-id">${obj.unit_id}</div>
                        <div class="unit-item-name">
                            ${obj.name}
                        </div>
                        <div class="unit-item-lecturer unit-item-tip">Lecturer:&nbsp;<span class="change-item-val">${obj.lecturer_id};</span></div>
                        <div class="unit-item-capacity unit-item-tip">Capacity:&nbsp;<span class="change-item-val">${obj.capacity};</span></div>
                        <div class="unit-item-campause unit-item-tip">Campause:&nbsp;<span class="change-item-val">${obj.campus};</span></div>
                        <div class="unit-item-period unit-item-tip">Period:&nbsp;<span class="change-item-val">${obj.semester};</span></div>
                        <div class="unit-item-description unit-item-unshow">Description:&nbsp;&nbsp;&nbsp;<p><span class="change-item-val">${obj.description};</span></p></div>
                        <div class="unit-item-croll">
                            <div class="unit-item-delete unit-item-controll">Delete</div>
                            <div class="unit-item-change unit-item-controll">修改</div>
                            <div class="unit-item-show unit-item-controll">show detail</div>
                        </div>
                    </div>
                `
                $('.main-list-unit').append(el);
                }
            })
            
        })

        $(document).on('click', '.unit-change-close', function() {
            $('.unit-change-box').remove();
            $('.main-list-unit').removeClass('shadow-show');
        })

        $(document).on('click', '.unit-item-delete', function() {
            $(this).parent().parent().remove();
        })
    })
})(window, document);
