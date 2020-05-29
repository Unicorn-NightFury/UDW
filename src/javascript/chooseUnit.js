(function(window, document) {
    window.onload = function() {
        $('.main-title-line').addClass('main-title-ani');
        $('.nav').addClass('nav_slide');

        $.get('/data.json', function(data) {
            if (data.errcode === 0) {
                let arr = data.data,
                    len = arr.length;

                for(let i = 0; i < len; i++) {
                    let item = arr[i],
                        el = createDetail(item);
                    if (i%2 === 0)  
                        $('.main-left').append(el);
                    else    
                        $('.main-right').append(el)
                }
            }
            else console.error('error!')
        })
    }


    function createDetail(item) {
        let el = `
        <div class="unit-item">
            <div class="unit-detail unit-id">ID: ${item.unit_id}</div>
            <div class="unit-detail unit-name">Name: ${item.name}</div>
            <div class="unit-detail unit-lecturer">Lecturer: ${item.lecturer_name}</div>
            <div class="unit-detail unit-campus">Campus: ${item.campus}</div>
            <div class="unit-detail unit-capacity">Capacity: ${item.capacity}</div>
            <div class="unit-detail unit-time">Time: ${item.time}</div>
            <div class="unit-detail unit-uc">UC: ${item.un_name}</div>
            <div class="unit-detail unit-tutor">Tutor: ${item.tutor_name}</div>
            <div class="unit-detail unit-description">Desctiption: ${item.description}</div>
            <div class="unit-choose">Choose</div>
        </div>
        `
        return el;
    }
})(window, document);

// go to choose
((window, document) => {

    

})(window, document)