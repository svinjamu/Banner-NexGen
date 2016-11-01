/**
 * Created by svinjamu on 08/05/2016.
 */

$(document).ready(function(){

    $("#main_body").fadeIn(2000);
    $("#log_image").fadeIn(6000);
    $("#sson").fadeIn(3000);
    sson_modal_open_validator()
    shrink()
});

//to shrink the nav bar
function shrink() {

    $(window).scroll(function() {
        if ($(document).scrollTop() < 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });

   /* window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            nav = document.querySelector("nav_bar");
        if (distanceY > shrinkOn) {
            classie.add(nav,"smaller");
        } else {
            if (classie.has(nav,"smaller")) {
                classie.remove(nav,"smaller");
            }
        }
    });*/
}

// validating single signon before editing a configuration
function sson_modal_open_validator() {
    $("#sson_edit_button").click(function(){
        if($("input[name='sson_radio_button']:checked").length == 0){
            alert("You have selected " +$("input[name='sson_edit_button']:checked").length +" configurations to edit !!")
        }else {
            var label1_value = $("#sson_radio_label1").text();
            alert("You have selected "+label1_value+" to edit !!");
            $("#sson_edit_modal").modal();
            $("#sson_config_ent_url").val(label1_value);

        }
    });
}

// validating single signon before editing a configuration
function validator() {
    if($("input[name='stud_acc_payment_radiobutton']:checked").length == 0){
        alert("You have selected " +$("input[name='stud_acc_payment_radiobutton']:checked").length +" configurations to edit !!")
    } else{
        $("#sapc_modal").modal();
    }
}

