baseurl = document.baseURI;

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
used = [];
function fetchdata(page){
    used.push(page);
    if(!used.includes(page)){
        $.ajax({
            url: baseurl + "data/"+page,
                type: "get",
                success:function(response){
                    if(response){
                           
                        response.forEach(element => {
                            console.log(element); 
                            var container = `
                            <div class="item row grid-container">
                                <div class="row alc grid-item-1">
                                    <div class="image">
                                        <img src="./img/profile.png" alt="">
                                    </div>        
                                        
                                    <span></span>
                                    <p class="item-description" contenteditable="true">` + element['name'] +`</p>
                                </div>
                                
                                <div class="coments text-normal grid-item-2"></div>
                                
                                <div class="status grid-item-3">
                                    <span class="` + element['status'] + `"></span>
                                </div>
                                
                                <p class="date-added text-normal grid-item-4">April 06</p>
                                
                                <div class="priority grid-item-5">
                                    <span class="` + element['priority'] + `"></span>
                                </div>
                                <button class="btn-1 deleteRecord">
                                    <img src="./img/delete.svg" alt="">
                                </button>
                            </div>   
                          `;
                            $('#'+page + ' .scroll-container > .row .item-body').append(container);
                        });
    
                    }
                }
            });
    }
}

fetchdata(2);

function showWorkspace(page){
    fetchdata(page);
    $('.workspace').removeClass('active');
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
            let _token = $('input[name=_token').val();
            $.ajax({
            url: baseurl + "",
                type: "POST",
                data:{
                    name: name,
                    _token: _token
                },
                success:function(response){
                    if(response){
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




    var item = '<div class="item row grid-container"><div class="row alc grid-item-1"><div class="image"><img src="./img/profile.png" alt=""></div><span></span><p class="item-description" contenteditable="true"></p></div><div class="coments text-normal grid-item-2"></div><div class="status grid-item-3"><span class="unactive"></span></div><p class="date-added text-normal grid-item-4">' + setDate('return') +  '</p><div class="priority grid-item-5"><span class="unactive"></span></div><button class="btn-1 deleteRecord"><img src="./img/delete.svg" alt=""></button></div>';

    //edit text
    $('#dashboard').on('click', '.addelement', function(){
        var cloneitem = $(item).clone();
        place = $(this).parent().parent().siblings('.item-body');
        cloneitem.appendTo(place);
    })

    colorpicker = $('.colorpicker');

    var container = '<div class="items-container row purple-v1"><div class="grid-container"><div class="row"><p class="item-heading" contenteditable="true">name</p><span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M0.697979 1.85245C0.29663 1.21275 0.874335 0.389547 1.70949 0.411098L10.551 0.639248C11.3447 0.659726 11.7799 1.43571 11.3452 2.05511L6.75266 8.5993C6.31797 9.2187 5.32833 9.23267 4.94694 8.62479L0.697979 1.85245Z" fill="white"></path></svg></span><button class="btn-1 addelement"><img src="./img/plus.svg" alt=""></button></div><p class="text-normal">Comments</p><p class="text-normal">Status</p><p class="text-normal">Date</p><p class="text-normal">Priority</p><button class="btn-1 deletecontainer"><img src="./img/trash.svg" alt=""></button></div><div class="item-body"></div></div>';
    $('#dashboard').on('click', '.addcontainer', function(){
        var cloneitem = $(container).clone();
        place = $(this).parent().parent().siblings('.scroll-container');
        cloneitem.appendTo(place);
    })


    //open color picker
    
    $('#dashboard').on('click', '.deleteRecord', function(){
        $(this).parent().remove();
    })

    $('#dashboard').on('click', '.deletecontainer', function(){
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
        $(this).parent().siblings('span').removeClass();
        clas = $(this).attr('class').split(' ')[1];
        $(this).parent().siblings('span').addClass(clas);
    });

    //stack items 
    $(".item-heading").on('click', function() {
        $(this).closest('.item-body').hide();
        $(this).parent().siblings('.item-body').toggleClass('stacked');
    });

    startTime();

    $('#iconlist #dashboard-open').click(() => {
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
        console.log('ok');
    })
});


$(document).keydown(function(e) {
// ESCAPE key pressed
if (e.keyCode == 27) {
    if($('.box').hasClass('active')){
    openbackground();
}}
});
