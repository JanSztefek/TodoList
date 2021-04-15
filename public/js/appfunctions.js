baseurl = window.origin;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('actualTime').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 900);
    setDate();
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function setDate(method){
    var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "")))) return "th"; a = parseInt((a + "")); return 1 == a}(),
    dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[objToday.getMonth()];
    if(dayOfMonth < 10){dayOfMonth = '0' + dayOfMonth};
    var today =  dayOfWeek + ", " + curMonth + ' ' + dayOfMonth;
    var todaynoyear = dayOfWeek + ", " + curMonth;
    $("#actualDate").text(today);
    datese = curMonth + ' ' + dayOfMonth;
    if(method == 'return'){
        return datese;
    }
}


function openbackground(){
    $('.box').toggleClass('active');
    $('.close').toggleClass('hidden');
    $('body').toggleClass('b-dashboard');
}


function deleteItem(id){
    let _token = $('meta[name="csrf-token"]').attr('content');
    let record_id = id;
    $('.alert-success').hide();
    $.ajax({
        url: baseurl + "/item/delete",
            type: "POST",
            data:{
                id:  record_id,
                _token: _token
            },
            success:function(response){
                if(response){
                    if(response){
                        if(response == 'success'){
                            $('.alert-success').show();
                            $('.alert-success').addClass('active');
                            setTimeout(() => {
                                $('.alert-success').removeClass('active');
                                $('.alert-success').hide();
                            }, 1000);
                        }
                        else{
                            $('.alert-failed').show();
                            $('.alert-failed').addClass('active');
                            setTimeout(() => {
                                $('.alert-failed').removeClass('active');
                                $('.alert-failed').hide();
                            }, 1000);
                        }
                    }
                }
            }
    });
}

function deleteContainer(id){
    let _token = $('meta[name="csrf-token"]').attr('content');
    let record_id = id;
    $('.alert-success').hide();
    $.ajax({
        url: baseurl + "/heading/delete",
            type: "POST",
            data:{
                id:  record_id,
                _token: _token
            },
            success:function(response){
                if(response){
                    if(response){
                        if(response == 'success'){
                            $('.alert-success').show();
                            $('.alert-success').addClass('active');
                            setTimeout(() => {
                                $('.alert-success').removeClass('active');
                                $('.alert-success').hide();
                            }, 1000);
                        }
                        else{
                            $('.alert-failed').show();
                            $('.alert-failed').addClass('active');
                            setTimeout(() => {
                                $('.alert-failed').removeClass('active');
                                $('.alert-failed').hide();
                            }, 1000);
                        }
                    }
                }
            }
    });
}

function editItem(id, column, value){
    let _token = $('meta[name="csrf-token"]').attr('content');
    let record_id = id;
    let column_name = column;
    let column_value = value;
    $('.alert-success').hide();
    $.ajax({
        url: baseurl + "/item/edit",
            type: "POST",
            data:{
                id:  record_id,
                column: column_name,
                value: column_value,
                _token: _token
            },
            success:function(response){
                if(response){
                    if(response){
                        if(response == 'success'){
                            $('.alert-success').show();
                            $('.alert-success').addClass('active');
                            setTimeout(() => {
                                $('.alert-success').removeClass('active');
                                $('.alert-success').hide();
                            }, 1000);
                        }
                        else if(response == 'failed'){
                            $('.alert-failed').show();
                            $('.alert-failed').addClass('active');
                            setTimeout(() => {
                                $('.alert-failed').removeClass('active');
                                $('.alert-failed').hide();
                            }, 1000);
                        }
                        else{
                            console.log(response);
                        }
                    }
                }
            }
    });
}

function editHeading(id, column, value){
    let _token = $('meta[name="csrf-token"]').attr('content');
    let record_id = id;
    let column_name = column;
    let column_value = value;
    $('.alert-success').hide();
    $.ajax({
        url: baseurl + "/heading/edit",
            type: "POST",
            data:{
                id:  record_id,
                column: column_name,
                value: column_value,
                _token: _token
            },
            success:function(response){
                if(response){
                    if(response){
                        if(response == 'success'){
                            $('.alert-success').show();
                            $('.alert-success').addClass('active');
                            setTimeout(() => {
                                $('.alert-success').removeClass('active');
                                $('.alert-success').hide();
                            }, 1000);
                        }
                        else if(response == 'failed'){
                            $('.alert-failed').show();
                            $('.alert-failed').addClass('active');
                            setTimeout(() => {
                                $('.alert-failed').removeClass('active');
                                $('.alert-failed').hide();
                            }, 1000);
                        }
                        else{
                            console.log(response);
                        }
                    }
                }
            }
    });
}

used = [];
function fetchdata(page){
    if(!used.includes(page)){
        let _token = $('meta[name="csrf-token"]').attr('content');
        let team_id = page;
        $.ajax({
            url: baseurl + "/heading/"+page,
                type: "POST",
                data:{
                    team_id: team_id,
                    _token: _token
                },
                success:function(response){
                    if(response){
                       

                        response.forEach(element => {
                            var heading = `
                                <div class="items-container row purple-v1" item_id="` + element['id'] + `">
                                <div class="grid-container">
                                <div class="row">
                                <div class="item-heading" contenteditable="true" >
                                ` + element['name'] + `
                                </div>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M0.697979 1.85245C0.29663 1.21275 0.874335 0.389547 1.70949 0.411098L10.551 0.639248C11.3447 0.659726 11.7799 1.43571 11.3452 2.05511L6.75266 8.5993C6.31797 9.2187 5.32833 9.23267 4.94694 8.62479L0.697979 1.85245Z" fill="white"></path></svg></span><button class="btn-1 addelement"><img src="./img/plus.svg" alt=""></button></div><p class="text-normal">Comments</p><p class="text-normal">Status</p><p class="text-normal">Date</p><p class="text-normal">Priority</p><button class="btn-1 deletecontainer"><img src="./img/trash.svg" alt=""></button></div><div class="item-body"></div></div>
                            `;
                            let heading_id = element['id'];
                            $.ajax({
                                url: baseurl + "/items",
                                    type: "POST",
                                    data:{
                                        heading_id: heading_id,
                                        _token: _token
                                    },
                                    success:function(response){
                                        if(response){
                                            response.forEach(element => {
                                                var item = `
                                                <div class="item row grid-container" id_item="` + element['id']  +`">
                                                    <div class="row alc grid-item-1">
                                                        <div class="image">
                                                            <img src="./img/profile.png" alt="">
                                                        </div>        
                                                            
                                                        <span></span>
                                                        <p class="item-description" contenteditable="true">` + element['description'] +`</p>
                                                    </div>
                                                    
                                                    <div class="coments text-normal grid-item-2"></div>
                                                    
                                                    <div class="status grid-item-3">
                                                        <span class="` + element['status'] + `"></span>
                                                    </div>
                                                    
                                                    <p class="date-added text-normal grid-item-4">April 06</p>
                                                    
                                                    <div class="priority grid-item-5">
                                                        <span class="` + element['priority'] + `"></span>
                                                    </div>
                                                    <button class="btn-1 deleteRecord deleteItem">
                                                        <img src="./img/delete.svg" alt="">
                                                    </button>
                                                </div>   
                                              `;
                                              $("[item_id='" + heading_id +"'] .item-body").append(item);
                                            });
                                            
                        
                                        }
                                    }
                                });
                            $('#' + page + ' .scroll-container').append(heading);
                        });

                       // console.log('headings' + response);                         
                            
                            
                    }
                    else{
                        console.log('failed to create');
                    }
                }
            });
        used.push(page);
    }
}

function showWorkspace(page){
    fetchdata(page);
    $('.workspace').removeClass('active');
    $('#' + page).addClass('active');
}


function showSection(page){
    //$('.workspace').removeClass('active');
    $('.box > section.active').removeClass('active');
    $('#' + page).addClass('active');
}

$(document).on('click', function (e) {
    if ($(e.target).closest(".colorpicker").length === 0 && $(e.target).closest(".status").length === 0 && $(e.target).closest(".priority").length === 0 || $(e.target).closest(".colorpicker .row").length === 1) {
        $(".colorpicker").hide();
    } 
});

function createMenuItem(name, id){
    workspace_name = name;
    var menu = $('.overview ul');
    workspace_name_value = "'" + workspace_name + "'";
    var menu_item = $('<li class="text-normal" onclick="showWorkspace(' + id + ')">' + workspace_name + '</li>');
    menu_item.appendTo(menu);
}

function createWorkspace(name, id){
    workspace_name = name;
    var container = $('#dashboard');
    workspace_name_value = "'" + workspace_name + "'";
    var workspace = $('<div class="workspace active row" id="' + id + '"><div class="padding-default"><div class="row alt spb"><h1 class="heading">' + workspace_name +'</h1><div class="row">                  <button class="btn-1 addcontainer"><img src="./img/plus.svg" alt=""></button>                <img class="infoAboutProject" src="./img/dots-vertical.svg" alt="">            </div>        </div>        <div class="scroll-container">                                </div>    </div>    <div class="containerInfoAboutProject">        <div class="contentpadding">            <div class="row">                <p>name:</p>                <p>Academy</p>            </div>            <div class="row">                <p>created:</p>                <p>14.07.2021</p>            </div>            <div class="col"><p>people</p><div class="row grid-container"><div class="user-project"><img src="./img/profile.png" alt=""></div></div></div></div></div></div>');
    workspace.appendTo(container);
}


$(document).ready(function() {
    //var dasboard_ul = ;
    var item = '<div class="item row grid-container"><div class="row alc grid-item-1"><div class="image"><img src="./img/profile.png" alt=""></div><span></span><p class="item-description" contenteditable="true"></p></div><div class="coments text-normal grid-item-2"></div><div class="status grid-item-3"><span class="unactive"></span></div><p class="date-added text-normal grid-item-4">' + setDate('return') +  '</p><div class="priority grid-item-5"><span class="unactive"></span></div><button class="btn-1 deleteRecord deleteItem"><img src="./img/delete.svg" alt=""></button></div>';

    $('nav').on('click', '#createnewdashboard', function(){
        $('#openoverview').addClass('active');
        $('#overview').removeClass('hide');
        $('.cratenewdash-container').toggleClass('show');
        var cloneitem = $(item).clone();
        place = $(this).parent().parent().siblings('.item-body');
        cloneitem.appendTo(place);
    })
    

    $('#workspace-create').click((e) => {
        e.preventDefault();
        if($('#workspace-name').val().length > 0){
            let name = $('#workspace-name').val();
            let _token = $('meta[name="csrf-token"]').attr('content');
            $.ajax({
            url: baseurl + "/workspace/save",
                type: "POST",
                data:{
                    name: name,
                    _token: _token
                },
                success:function(response){
                    if(response){
                        //console.log('response');
                        createMenuItem($('#workspace-name').val(), response);
                        createWorkspace($('#workspace-name').val(), response);
                        showWorkspace(response, $('#workspace-name').val());
                        $('#workspace-name').val('');
                        $('.cratenewdash-container').removeClass('show');
                    }
                }
            });
        }
    })




    
    //edit text
    
    //$('#dashboard .addelement').click((e) => {
        
    $('#dashboard').on('click', '.addelement', function(e){
        place = $(this).parent().parent().siblings('.item-body');
        e.preventDefault();
        let heading_id = $(this).closest(".items-container").attr('item_id');
        let description = 'nic';
        let priority = 'unactive';
        let status_ = 'unactive';
        let date = String(setDate('return'));
        let _token = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
        url: baseurl + "/item/save",
            type: "POST",
            data:{
                heading_id: heading_id,
                description: description,
                date: date,
                status: status_,
                priority: priority,
                _token: _token
            },
            success:function(response){
                if(response){
                    var item = `
                    <div class="item row grid-container" id_item="`+ response +`"><div class="row alc grid-item-1"><div class="image"><img src="./img/profile.png" alt=""></div><span></span><p class="item-description" contenteditable="true"></p></div><div class="coments text-normal grid-item-2"></div><div class="status grid-item-3"><span class="unactive"></span></div><p class="date-added text-normal grid-item-4">`+ setDate('return') +`</p><div class="priority grid-item-5"><span class="unactive"></span></div><button class="btn-1 deleteRecord deleteItem"><img src="./img/delete.svg" alt=""></button></div>
                    `;
                    var cloneitem = $(item).clone();
                    cloneitem.appendTo(place);
                }
            }
        });
    })

    colorpicker = $('.colorpicker');

    var container = '<div class="items-container row purple-v1"><div class="grid-container"><div class="row"><div class="item-heading" contenteditable="true">name</div><span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M0.697979 1.85245C0.29663 1.21275 0.874335 0.389547 1.70949 0.411098L10.551 0.639248C11.3447 0.659726 11.7799 1.43571 11.3452 2.05511L6.75266 8.5993C6.31797 9.2187 5.32833 9.23267 4.94694 8.62479L0.697979 1.85245Z" fill="white"></path></svg></span><button class="btn-1 addelement"><img src="./img/plus.svg" alt=""></button></div><p class="text-normal">Comments</p><p class="text-normal">Status</p><p class="text-normal">Date</p><p class="text-normal">Priority</p><button class="btn-1 deletecontainer"><img src="./img/trash.svg" alt=""></button></div><div class="item-body"></div></div>';

    $('#dashboard').on('click', '.addcontainer', function(){
        var cloneitem = $(container).clone();
        place = $(this).parent().parent().siblings('.scroll-container');
        cloneitem.appendTo(place);
        let color = 'red';
        let name = 'name';
        let _token = $('input[name=_token').val();
        let workspace_id = Number($('.workspace.active').attr('id'));
        //console.log(name, _token, workspace_id);
        $.ajax({
        url: baseurl + "/heading/save",
            type: "POST",
            data:{
                name: name,
                workspace_id: workspace_id,
                color: color,
                _token: _token
            },
            success:function(response){
                if(response){
                    $('.scroll-container > .items-container').last().attr('item_id', response);
                }
                else{
                    $('.scroll-container > .items-container .item-heading').last().remove();
                }
            }
        });
    }) 

        
    //open color picker
    
    $('#dashboard').on('click', '.deleteItem', function(){
        deleteItem($(this).parent().attr('id_item'));
        $(this).parent().remove();
    })

    $('#dashboard').on('click', '.deletecontainer', function(){
        deleteContainer($(this).parent().parent().attr('item_id'));
        $(this).parent().parent().remove();
    })

    $('#dashboard').on('click', '.status', function(){
        $(this).append(colorpicker);
        $('.colorpicker .second').hide();
        $('.colorpicker .first').show();
        colorpicker.show();
    })

    $('#dashboard').on('click', '.priority', function(){
        $(this).append(colorpicker);
        $('.colorpicker .first').hide();
        $('.colorpicker .second').show();
        colorpicker.show();
    })
    //color picker functionality

    $(".colorpicker .row").on('click', function() {
        id = $(this).closest('.item').attr('id_item');
        if($(this).closest('.grid-item-3').hasClass('status')){
            column = 'status';
        }
        else{
            column = 'priority'
        }
        $(this).parent().siblings('span').removeClass();
        class_name = $(this).attr('class').split(' ')[1];
        $(this).parent().siblings('span').addClass(class_name);

        editItem(id, column, class_name);
    });

    $('#dashboard').on('click', '.item-description', function(e){
        id = $(this).closest('.item').attr('id_item');
        //editItem(id, column, class_name);
    });

    const log = document.getElementById('dashboard');

    document.getElementById("dashboard").addEventListener('keypress', logKey);
    
    function logKey(e) {
        if (e.which == '13') {
            if($(document.activeElement).hasClass('item-description') ){
                e.preventDefault();
                id = $(document.activeElement).closest('.item').attr('id_item');
                value = $(document.activeElement).text();
                editItem(id, 'description', value);
                
            }
            if($(document.activeElement).hasClass('item-heading')){
                e.preventDefault();
                id = $(document.activeElement).closest('.items-container').attr('item_id');
                value = $(document.activeElement).text();
                editHeading(id, 'name', value);
                
            }
        }
    }
    //stack items 
    /*
    $(".item-heading").on('click', function() {
        $(this).closest('.item-body').hide();
        $(this).parent().siblings('.item-body').toggleClass('stacked');
    });
    */
    startTime();

    $('#iconlist #dashboard-open').click(() => {
        showSection('dashboard');
        openbackground();
    });
    
    $('#iconlist #settings-open').click(() => {
        $('#settings ifr  ame').attr('src', baseurl +'/user/profile');
        showSection('settings');
        openbackground();
    });

    $('.close ul').click(() => {
        openbackground();
    });
    
    $('.logo').click(() => {
        openbackground();
    });

    $('#home').click(() => {
        openbackground();
    })
    

     $('.dashboard').on('click', '.overview ul li',function(event){
        $('.overview ul li').removeClass('active');
        event.target.classList.add("active");
    })

    $('.overview h2, #openoverview').click(() =>{
        $('.containerInfoAboutProject').removeClass('active');
        $('#overview').toggleClass('hide');
        $('#openoverview').toggleClass('active');
    })
    function openoverview(){
        $('#overview').removeClass('hide');
    }

    $('.dashboard').on('click', '.infoAboutProject', function(){
        $('#overview').addClass('hide');
        $('#openoverview').removeClass('active');
        $(this).parent().parent().parent().siblings('.containerInfoAboutProject').toggleClass('active');
     
    })

    //$('.workspace:nth-child(2)').addClass('active');

    showWorkspace($('.workspace:nth-child(3)').attr('id'));
});


$(document).keydown(function(e) {
// ESCAPE key pressed
if (e.keyCode == 27) {
    if($('.box').hasClass('active')){
    openbackground();
}}
});
