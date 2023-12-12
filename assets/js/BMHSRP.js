function isNumberKey(evt) { // Numbers only
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


//jQuery(document).on('click', "#HSRP", function () {
//    var status = jQuery(this).attr('id');

//   // $("#MainContent_hdnVehicleClass").val(status);

//    jQuery.ajax({
//        type: "GET",
//        url: "api/Get/OrderType?SessionValue=" + status,
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (response) {
//            data = response;
//            alert(data);
//        },
//        failure: function (response) {
//            alert(response);
//        }
//    });
//});

//$(document).ready(function () {
//    $('.bars').click(function () {
        

//        var status = jQuery(this).attr('id');
//        //alert(status);
//        // $("#MainContent_hdnVehicleClass").val(status);

//        var ImagePath = $('#' + status).find('.style1 img').map(function () { return this.src; }).get();
//       // alert(ImagePath);
//        jQuery.ajax({
//            type: "GET",
//            url: "api/Get/OrderType?SessionValue=" + status + "&OrderTypeImagePath=" + ImagePath,
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (response) {
//                data = response;
//               // alert(data);
//                window.location.href = "plate/VehicleMake.aspx";

//            },
//            failure: function (response) {
//                alert(response);
//            }
//        });
//    });
//});


//$(document).ready(function () {
//    $('#CheckAvailability').click(function () {

//        var pincode = $('#txtpincode').val();
//       // var status = $(this).attr('id');
//       // alert(pincode);
//        // $("#MainContent_hdnVehicleClass").val(status);

//        $.ajax({
//            type: "GET",
//            url: "api/Get/CheckAvailability?SessionValue=" + pincode,
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (response) {
//                data = response;
//                alert(data);
//                if (data == "Available") {
//                    $('#DivCheckAvailability').hide();
//                    $('#DivDeliveryAvailabe').show();
//                    $('#txtdeliverypincode').val(pincode);


//                } else {
//                    $('#DivOR').hide();
//                    $('#DivUseMyLocation').hide();
//                    $('#CheckAvailabilityMsg').show();
//                    $('#btnDealerAppointment').show();

//                }
              
                

//            },
//            failure: function (response) {
              
//                alert(response);
//            }
//        });
//    });
//});



//$(document).ready(function () {
//    $('#btnHomeDeliveryNext').click(function () {


//        //var status = jQuery(this).attr('id');
//        //alert(status);
       
//        var Deliverypincode = $('#txtpincode').val();
//        var DeliveryAddress1 = $('#txtdeliveryaddress1').val();
//        var DeliveryAddress2 = $('#txtdeliveryaddress2').val();
//        var deliveryCity = $('#txtdeliveryCity').val();
//        var deliveryState = $('#txtdeliveryState').val();
//        var DeliveryLandmark = $('#txtDeliveryLandmark').val();
       
//        jQuery.ajax({
//            type: "GET",
//            url: "api/Get/DeliveryInfo?Pincode=" + Deliverypincode + "&Address1=" + DeliveryAddress1 + "&Address2=" + DeliveryAddress2 + "&city=" + deliveryCity + "&State=" + deliveryState + "&Landmark=" + DeliveryLandmark,
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (response) {
//                data = response;
//                //alert(data);
               

//            },
//            failure: function (response) {
//                alert(response);
//            }
//        });
//    });
//});

//$(document).ready(function () {
//    $('.type').click(function () {


//        var status = jQuery(this).attr('id');
//        alert(status);
//        // $("#MainContent_hdnVehicleClass").val(status);

//        jQuery.ajax({
//            type: "GET",
//            url: "api/Get/SetSessionVehicleTypeID?SessionValue=" + status,
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (response) {
//                data = response;
//                //alert(data);
//                $('.brands').append(data);

//            },
//            failure: function (response) {
//                alert(response);
//            }
//        });
//    });
//});