
/********************************************/
/************** Select 2*********************/

function Select2(selector, label = "") {

    $(selector).select2({
        placeholder: label,
        allowClear: true,
        width: 'resolve'
    });

}

function Select2OnChange(selector, dotnetHelper, funcName) {

    $(selector).on('select2:select', function (e) {
        dotnetHelper.invokeMethodAsync(funcName, $(selector).val());
    });

    $(selector).on("select2:clear", function (e) {
        dotnetHelper.invokeMethodAsync(funcName, "");
    });

}


/************** Select 2*********************/
/********************************************/

/************************************************/
/************** Sweet Alert *********************/

function Toast(message, icon = "success", ms = 3000) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: ms,
        //timerProgressBar: true,
        //didOpen: (toast) => {
        //    toast.addEventListener('mouseenter', Swal.stopTimer)
        //    toast.addEventListener('mouseleave', Swal.resumeTimer)
        //}
    })

    Toast.fire({
        icon: icon,
        title: message
    })
}

function Alert(msg, title = "", icon = "success", footer = "") {
    Swal.fire({
        icon: icon,
        title: title,
        text: msg,
        footer: footer
    })
}

/******************** Modal ********************************/
/***********************************************************/

function Modal(id, operation) {
    $("#" + id).modal(operation);
}


/******************* Fake *******************************/
/********************************************************/

//function SetFocusTo() {

//}