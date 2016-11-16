/**
 * Created by svinjamu on 08/05/2016.
 */

$(document).ready(function(){

    $("#main_body").fadeIn(2000);
    $("#log_image").fadeIn(6000);
    $("#sson").fadeIn(3000);
    sson_modal_open_validator()
    sapc_modal_open_edit_validator()
});

// validating single signon before editing a configuration
function sson_modal_open_validator() {

    //when clicked on sson_add button
    $("#sson_add_button").click(function () {
        alert("You are going to add a configuration");
        $("#sson_edit_modal").modal();
    })

    //when clicked on sson_edit button
    $("#sson_edit_button").click(function(){
        if($("input[name='sson_radio_button']:checked").length == 0){
            alert("You have selected " +$("input[name='sson_edit_button']:checked").length +" configurations to edit !!")
        }else {
            var label1_value = $("#sson_radio_label1").text();
            alert("You have selected "+label1_value+" to edit !!");
            $("#sson_edit_modal").modal();
            $("#sson_config_ent_url").val(label1_value);
            //document.getElementById('sson_config_ent_url').innerText = label1_value;
            $("#sson_config_ent_url").prop('disabled', true);

        }
    });
}

//function validating student account payment configuration
function sapc_modal_open_edit_validator(){
    //action event when open is clicked
    $("#stud_acc_payment_add").click(function () {
        alert("You are going to add a new Student Account Payment Configuration");
        //$("#spac_modal").modal({backdrop: "static"}); already opening is performed inline by Bootstrap
    });

    //action event when edit is clicked
    $("#stud_acc_payment_edit").click(function () {
        if($("input[name='stud_acc_payment_radiobutton']:checked").length == 0){
            alert("You have selected " +$("input[name='stud_acc_payment_radiobutton']:checked").length +" configuration to edit");
        }else {
            //var selected_label = $("input[name='stud_acc_payment_radiobutton']:checked").id;
            alert("You are editing the configuration");
            $("#spac_modal").modal({backdrop: "static"});
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

