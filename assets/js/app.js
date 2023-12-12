function callthis($this, checkbefore) {
    if ($(window).width() < 1050) {
        var myarray = ($this.attr('class').split(/\s+/));
        console.log(myarray);
        if ($.inArray("ishovered", myarray) !== -1) {
            if (checkbefore) {
                $this.prependTo('.app .before');
            } else {
                $this.insertAfter('.app .after .bars.steps');
            }
            return false;
        }
    }
}

var datePickerCtr = {
    hideOldDays: function () { // hide days for previous month
        var x = $('.calendar-custom .datepicker-days tr td.old');
        if (x.length > 0) {
            x.css('visibility', 'hidden');
            if (x.length === 7) {
                x.parent().hide();
            }
        }
    },
    hideNewDays: function () { // hide days for next month
        var x = $('.calendar-custom .datepicker-days tr td.new');
        if (x.length > 0) {
            x.hide();
        }
    },
    hideOtherMonthDays: function () { // hide days not for current month
        datePickerCtr.hideOldDays();
        datePickerCtr.hideNewDays();
    }
};
$(document).ready(function () {
    $("body").attr('data-view', $(window).width() + ' x ' + $(window).height());
    active_menu(1);
    $(".logo").parent().addClass('logo_link');
    $(".logo").click(function () {
        $(".loader").stop().fadeIn();
        setTimeout(function () {
            window.location.reload();
        }, 500);
    });
    $(".ishovered").click(function () {
        var $this = $(this);
        var checkisafter = false;
        if ($(this).closest('section').hasClass('before')) {
            checkisafter = true;
        }
        callthis($this, checkisafter);
        var myarray = ($this.attr('class').split(/\s+/));
        $(".after .bars.pages").removeClass('is_active').addClass('ishovered');
        if (checkisafter) {
            $(".before .bars.pages").removeClass('is_active').addClass('ishovered');
        }
        $this.removeClass('ishovered');
        $this.addClass('is_active');
        $("body").addClass('runs');
        $(".app").addClass('active');
        if ($.inArray("ishovered", myarray) !== -1) {
            $(".type-selection .label, .type-selection").removeClass('s_active');
            $(".brand-selection").hide();
            $(".after .view-data").hide();
            if (checkisafter) {
                $(".before .view-data").hide();
            }
            active_menu(2);
            view_mobile(1);
            setmobileicons($this.find('.style1 img').attr('src'));
            setTimeout(function () {
                if (checkisafter) {
                    $(".before .in_pages").hide();
                }
                $('.after .in_pages').hide();
                $this.find(".view-data").stop().fadeIn();
                $this.find(".view-data .in_pages.page1").stop().fadeIn();
            }, 700);
        }
    });

    var mapClass = $(".maps");
    var markers = [
        ['SHIV GANGA AUTOMOBILES', 29.2806454, 74.9052815],
        ['AMAN MOTORS', 28.5304793, 77.4431233],
        ['UPPER INDIA TRADING CO. PV. LTD', 22.1741466, 81.3947828],
    ];

    var imges = ['assets/img/bike.svg', 'assets/img/car.svg', 'assets/img/truck-big.svg', 'assets/img/truck.svg'];

    /*
    var htmldata = $('.after .view-data').html();
    $(".after .ishovered").each(function (index) {
        var titles = $(this).find('.short p').html();
        $(this).find(".view-data").remove();
        $(this).append("<div class='view-data'>" + htmldata + "</div>");
        setTimeout(function () {
            mapClass = $(".maps");
            initialize_map(mapClass[index], markers);
            $(".after .ishovered").eq(index).find('.head img').attr('src', imges[index]);
            $(".after .ishovered").eq(index).find('.head p').html(titles);
            $(".after .ishovered").eq(index).find('.label_card img').attr('src', 'assets/img/color' + index + '.svg');
        }, 1000);
    });
    */

    var datesDisabled = ['2020-10-7', '2020-10-20', '2020-10-21', '2020-10-28', '2020-10-29'];
    var datesDisabled_by = ['holiday', 'holiday', '', '', ''];
/*
    $(".calendar-custom").each(function () {
        $(this).datepicker({
            format: 'yyyy-mm-dd',
            weekStart: 1,
            minDate: 0,
            templates: {
                leftArrow: '<img src="../assets/img/left.svg">',
                rightArrow: '<img src="../assets/img/right.svg">',
            },
            immediateUpdates: true,
            todayHighlight: false,
            beforeShowDay: CalenderDayRender,
            /*function (date) {
                /* Commetted by dhiru
                var allDates = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                if (datesDisabled.indexOf(allDates) != -1) {
                    if (datesDisabled_by[datesDisabled.indexOf(allDates)] == 'holiday') {
                        return {
                            classes: 'holiday disabled'
                        };
                    } else {
                        return false;
                    }
                } else {
                    return true;
                }*
 
                var mDay, mMonth;
                if((date.getMonth() + 1) < 10){
                    mMonth = "0"+(date.getMonth() + 1);
                }else{
                    mMonth = (date.getMonth() + 1);
                }
 
                if((date.getDate()) < 10){
                    mDay = "0"+ date.getDate();
                }else{
                    mDay = date.getDate();
                }
 
                var allDates = date.getFullYear() + '-' + mMonth + '-' + mDay;
                return CalenderDayRender(allDates);
            },
            toggleActive: false
        }).on('changeDate', function (ev) {
            //$(".hidebefore").fadeIn(); //commented by dhiru
            CalenderChangeDate(ev.format());
        });
        // }).datepicker("setDate", "0");
    });
*/
    if ($(".calendar-custom").length > 0) {
        var datePicker = $(".calendar-custom").datepicker({
            format: 'yyyy-mm-dd',
            weekStart: 1,
            templates: {
                leftArrow: '<img src="../assets/img/left.svg">',
                rightArrow: '<img src="../assets/img/right.svg">',
            },
            immediateUpdates: true,
            todayHighlight: false,
            beforeShowDay: CalenderDayRender,
            toggleActive: false,
            minViewMode: 0,
            maxViewMode: 0,
            startDate: setdate(),
            endDate: moment(jsArrayAvaiableSlotFromDates[1]).add(0, 'days').toDate()
        }).on("changeMonth", function (e) {
            calender_changeMonth(e.date);
        }).on('changeDate', function (ev) {
            calender_changeDate(ev.format());
        });
        calender_changeMonth(setdate());
    }
    

    $(".megamenu").append("<ul class='topmenu'>" + $('header ul').html() + "</ul>");
    $(".megamenu").append("<div class='bottomdata'><ul class='bottommenu'>" + $('footer ul').html() + "</ul><p>" + $('footer .copyright').html() + "</p></div>");


    $('.owl-carousel.brands').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.owl-carousel.adds').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.owl-carousel.states').owlCarousel({
        loop: false,
        margin: 3,
        nav: true,
        dots: true,
        responsiveClass: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
});

$(window).bind('load', function () {
    setTimeout(function () {
        $(".loader").fadeOut();
    }, 100);
    setTimeout(function () {
        $(".after .in_pages").each(function () {
            var addednumber = $(this).attr('class');
            addednumber = addednumber.replace('in_pages page', '');
            $(this).attr('data-id', addednumber);
        });
        $("img").attr('draggable', 'false');
        $(".steps ul li a").append('<p><img src="assets/img/bike.svg"></p>');
        $("footer").prepend($(".backbtn").html());
    }, 100);
    setInterval(function () {
        $(".calendar-custom table tr td").each(function () {
            $(this).css('height', $(this).outerWidth());
        });
    }, 50);
    setheight();

    var newvidth = $(window).width();
    if (newvidth < 1050) {
        if ($(".steps .backbtn").attr('data-act') == "page6") {
            if ($(".iscoupyes").html()) {
                $(".rightside").append("<div class='clearfix'>" + $(".iscoupyes").html() + '</div>');
                $(".iscoupyes").hide().remove();
            }
        }
    }

    $("body").attr('id', $(".steps .backbtn").attr('data-act'));
});


function setmobileicons($icon) {
    $(".steps ul li a img").attr('src', $icon);
}


var currentwidth = $(window).width();
$(window).on('resize', function () {
    var newvidth = $(window).width();
    if (currentwidth < 1050) {
        if (newvidth > 1050) {
            window.location.reload();
        }
    }
    if (currentwidth > 1050) {
        if (newvidth < 1050) {
            window.location.reload();
        }
    }
    setheight();
});
/*
$(document).on('click', '.f_type', function () {
    active_menu(1);
    $("footer").addClass('act1').removeClass('act2');
    $("section.after").css('opacity', '0');
    $("section.before").css('transition', 'none');
    $("section.before").fadeOut(300, function () {
        $(".app").removeClass('active');
        $("section.after").css('display', 'table');
        setTimeout(function () {
            $("section.after").css('opacity', '1');
            $("section.before").css('transition', 'opacity .5s');
            $("body").removeClass('runs');
        }, 300);
    });
});
*/

$(document).on('click', '.brand-selection .item a, .f_type', function () {
    $(".brand-selection .item a, .f_type").removeClass('actives');
    $(this).addClass('actives');
    return false;
});

$(document).on('click', '.top .arrow', function () {
   return Expand(this);
});

$(document).ready( function() {
    $('.expand').click(function(){
        return Expand(this);
    });
});

function Expand(obj)
{
    var pobj =$(obj).parent().parent();
    if(pobj.hasClass('is_view'))
    {
        pobj.removeClass('is_view');
        return false;
    }

    var $this = $(obj);

    var DealerAffixationid = jQuery(obj).attr('id');

        if (DealerAffixationid == '' || DealerAffixationid == null) {
            alert('Please Select Your Dealer');
            return false;
    }
    //$this.closest('.dealer').find('.subdata .fg2').remove();
    //$this.closest('.dealer').find('.subdata .fg3').remove();
    //$this.closest('.dealer').find('.subdata .waiting').remove();
    //$this.closest('.dealer').find('.subdata').prepend('<p class="waiting"><img src="/assets/img/load.svg"></p>'); // path ok? n
    
    //jQuery.ajax({
    //    type: "GET",
    //    url: "api/Get/Earliest_DateandSlot?Affixationid=" + DealerAffixationid,  // can we make it transparent  // need trnasparent image we don't have transparent gif
    //    // can you provide the same ok
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        $this.closest('.dealer').find('.subdata .waiting').remove();
    //        data = response;
             
    //        if (data.Status == "1") {
                   
    //            $this.closest('.dealer').find('.subdata .fg2').remove();
    //            $this.closest('.dealer').find('.subdata .fg3').remove();
    //            //$('.subdata').find('.fg3').remove();
    //            // $('.subdata').find('.ticks').append(data);
    //            $this.closest('.dealer').find('.subdata .ticks').append(data.ResponseData);
                $this.closest('.dealer').find('.subdata .DealerClick').show();
                 
    //        }
    //        else if (data.Status == "0")
    //        {
    //            $this.closest('.dealer').find('.subdata .DealerClick').hide();
    //            if (data.Msg == "Not Availabe") {
    //                $this.closest('.dealer').find('.subdata .fg2').remove();
    //                $this.closest('.dealer').find('.subdata .fg3').remove();
    //                //$('.subdata').find('.fg3').remove();
    //                // $('.subdata').find('.ticks').append(data);
    //                $this.closest('.dealer').find('.subdata .ticks').append(data.ResponseData);
    //            }
    //            else
    //            {
    //                $this.closest('.dealer').find('.subdata .DealerClick').hide();
    //                alert(data.Msg);

    //            }

                         
    //        }
    //        else
    //        {
    //            $this.closest('.dealer').find('.subdata .DealerClick').hide();
    //            alert(data.Msg);
    //        }


    //    },
    //    failure: function (response) {
    //        $this.closest('.dealer').find('.subdata .DealerClick').hide();
    //        alert(response);
    //    }
    //});

  

    //$(obj).parent().parent().addClass('is_view');
    pobj.addClass('is_view');
    return false;
}

$(document).on('click', '.subdata .arrow', function () {
    $(this).parent().parent().removeClass('is_view');
    return false;
});

$(document).on('click', 'a.gobacks', function () {
    $("section.after").fadeOut(300);
    return true;
});

$(document).on('click', '.page5_sec .bars', function () {
    $('.page5_sec .bars').removeClass('is_actives');
    var radioList = $(this).find('input[name="vehicle_Category"]');
    if (radioList.length === 1) {
        radioList.prop("checked", true);
    }

    $(this).addClass('is_actives');
    // return false;
});

$(document).on('click', '.brand-selection .label', function () {
    $('.is_active').find('.in_pages.page1').hide();
    $('.is_active').find('.in_pages.page2').stop().fadeIn();
    active_menu(3);
    view_mobile(2);
});
$(document).on('click', '.list-data div', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page4').stop().fadeIn();
    active_menu(5);
    view_mobile(4);
});
$(document).on('click', '.isforward', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page5').stop().fadeIn();
    active_menu(5);
    view_mobile(5);
});
$(document).on('click', '.isforwardotp', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page6').stop().fadeIn();
    active_menu(5);
    view_mobile(6);
});
$(document).on('click', '.isforwarddate', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page7').stop().fadeIn();
    setheight();
    active_menu(5);
    view_mobile(7);
});
$(document).on('click', '.isforwardsummary', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page8').stop().fadeIn();
    active_menu(6);
    view_mobile(8);
});
$(document).on('click', '.isforwardpay', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page9').stop().fadeIn();
    active_menu(7);
    view_mobile(9);
});
$(document).on('click', '.isforwardprint', function () {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page10').stop().fadeIn();
    active_menu(8);
    view_mobile(10);
});
$(document).on('click', '.printoption', function () {
    window.print();
});
$(document).on('click', '.fastag', function () {
    $(this).toggleClass('active');
    return false;
});
$(document).on('click', '.tabs span', function () {
    $(".tabview").stop().hide();
    $("." + $(this).data('view')).stop().fadeIn();
    return false;
});
$(document).on('click', '.menubutton', function () {
    window.scrollTo(0, 0);
    $(this).toggleClass('active');
    $("body").toggleClass('menu');
    $(".megamenu").stop().slideToggle();
});

$(document).on('click', '.goback', function () {
    var $active = $(this).closest('.in_pages').data('id');
    if ($(this).data('active')) {
        active_menu($(this).data('active'));
    } else {
        active_menu($active);
    }
    if ($active == 1) {
        $(".app").removeClass('active');
        $("body").removeClass('runs');
        $(".app .after .bars.pages").removeClass('is_active').addClass('ishovered');
        $(".app .after").find(".view-data").hide();
        if ($(window).width() < 1050) {
            $("body").addClass('ismobile animations');
            $(".after .color5").insertAfter('.app .after .bars.steps');
            $(".after .color4").insertAfter('.app .after .bars.steps');
            $(".after .color3").insertAfter('.app .after .bars.steps');
            $(".after .color2").insertAfter('.app .after .bars.steps');
            setTimeout(function () {
                $("body").removeClass('ismobile');
            }, 100);
            setTimeout(function () {
                $("body").removeClass('animations');
            }, 500);
        }
    } else if ($active == 'm8') {
        $(".app").removeClass('active');
        $("body").removeClass('runs');
        $(".app .before .bars.pages").removeClass('is_active').addClass('ishovered');
        $(".app .before").find(".view-data").hide();
        if ($(window).width() < 1050) {
            $("body").addClass('ismobile animations');
            $(".color5").insertAfter('.app .before .bars.steps');
            $(".color4").insertAfter('.app .before .bars.steps');
            setTimeout(function () {
                $("body").removeClass('ismobile');
            }, 100);
            setTimeout(function () {
                $("body").removeClass('animations');
            }, 500);
        }
    } else {
        $(".is_active .in_pages.page" + $active).hide();
        $(".is_active .in_pages.page" + ($active - 1)).stop().fadeIn();
    }
    return false;
});
$(document).on('click', "footer li a, header li a, .megamenu li a", function () {
    // alert('Page under development....');
    // return false;
});
$(document).on('click', ".control select, .control textarea, .control input[type='file'], .control input[type='text']", function () {
    $(this).focus();
});
$(document).on('click', ".tab-content table a", function () {
    return false;
});
$(document).on('click', ".control .radio", function () {
    $(".radio").addClass('is_deactive');
    $(this).find('input').prop('checked', true);
    $(this).removeClass('is_deactive');
    $(".inner_subpage").hide();
    $(".isv_" + $(this).find('input').val()).fadeIn();
    return false;
});
$(document).on('click', ".gstno label", function () {
    $(this).toggleClass('active');
    return false;
});
$(document).on('click', ".type-selection .label", function () {
    $('.type-selection .label').removeClass('s_active');
    $(this).addClass('s_active');
    $(this).parent().addClass('s_active');
   // $(".brand-selection").hide().fadeIn();
    return false;
});

function setheight() {
    var height = window.innerHeight;
    $(".app").css('height', (height) - 170);    //135

    $(".maps").css('height', (height) - 350);
    $(".megamenu").css('top', $("header").outerHeight);

    $(".datepicker table tr td").each(function () {
        $(this).css('height', $(this).outerWidth());
    });


    if ($(window).width() < 1050) {
        $(".brand-selection").css('width', $(window).width() - 20);
        $(".app .before .bars").css('height', ($(window).height() / 2) - 70);
        $(".app .before .bars .short").css('padding-top', ($(window).height() / 4) - 100);
    }
}

function active_menu(num = '') {
    $('.steps ul li').each(function (i) {
        $(this).addClass('is_page' + (i + 1));
    });
    var pageactive = $(".steps .backbtn").attr('data-act');
    if (!pageactive) {
        pageactive = '';
    }
    pageactive = parseInt(pageactive.replace('page', ''));
    if (pageactive > 16) {
        pageactive = pageactive - 16;
    }

    if ($(window).width() < 1050) {
        var classes = ".steps li.is_page" + pageactive;
        $(classes).addClass('active');
    } else {
        for (var i = 1; i <= pageactive; i++) {
            var classes = ".steps li.is_page" + i;
            console.log(classes);
            $(classes).addClass('active');
        }
    }

    // var classes = ".steps li.is_" + $(".steps .backbtn").attr('data-act');
    // $(classes).addClass('active');
}

function view_mobile(num = '') {
    /*
    if ($(window).width() < 1050) {
        $('html, body').stop().animate({
            scrollTop: $(".steps").offset().top
        }, 500);
        $(".is_active").find('.in_pages.page' + (num)).css('display', 'flex').css('flex-direction', 'column');
    }
    */
}

function checkBounds(map, allowedBounds) {
    if (!allowedBounds.contains(map.getCenter())) {
        var C = map.getCenter();
        var X = C.lng();
        var Y = C.lat();
        var AmaxX = allowedBounds.getNorthEast().lng();
        var AmaxY = allowedBounds.getNorthEast().lat();
        var AminX = allowedBounds.getSouthWest().lng();
        var AminY = allowedBounds.getSouthWest().lat();
        if (X < AminX) {
            X = AminX;
        }
        if (X > AmaxX) {
            X = AmaxX;
        }
        if (Y < AminY) {
            Y = AminY;
        }
        if (Y > AmaxY) {
            Y = AmaxY;
        }
        map.setCenter(new google.maps.LatLng(Y, X));
    }
}

function initialize_map(mapClass, markers) {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        disableDefaultUI: false,
        minZoom: 2,
        gestureHandling: "greedy",
        styles: [{
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#444444"}, {"visibility": "off"}]
        }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#cccccc"}]}, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#eeeeee"}, {"visibility": "on"}]}]
    };
    map = new google.maps.Map(mapClass, mapOptions);
    // map.setTilt(45);

    google.maps.event.addListenerOnce(map, 'tilesloaded', function () {
        allowedBounds = map.getBounds();
        google.maps.event.addListener(map, 'center_changed', function () {
            checkBounds(map, allowedBounds);
        });
    });

    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < markers.length; i++) {
        var icon = {
            url: "assets/img/fav.png", // url
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };

        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
            title: markers[i][0]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                // alert(markers[i][0]);
                nextscreen();
                // showInfo(this.position);
            }
        })(marker, i));
        map.fitBounds(bounds);

        google.maps.event.addListener(map, 'click', function (event) {
            // showInfo(event.latLng);
            nextscreen();
        });
    }
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(5);
        google.maps.event.removeListener(boundsListener);
    });
}

function nextscreen() {
    $('.is_active').find('.in_pages').stop().hide();
    $('.is_active').find('.in_pages.page3').stop().fadeIn();
    active_menu(4);
    view_mobile(3);

    $('.is_active .list-data div').removeAttr('style');
    $('.is_active .list-data').each(function () {
        var highestBox = 0;
        $(this).find('div').each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $(this).find('div').height(highestBox);
    });
}
