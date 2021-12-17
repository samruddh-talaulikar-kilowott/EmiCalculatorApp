(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('form-horizontal');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


function validation() {
    var principal = document.getElementById('principalAmount').value;
    var rate = document.getElementById('interestRate').value;
    var duration = document.getElementById('loanDuration').value;

    //if user not entered any input
    if ((principal == "") && (rate == "") && (duration == "")) {
        onError(amount, "Please enter principal amount");
        onError(roi, "Please enter rate of interest");
        onError(time, "Please enter loan duration");
        return false;
    }else{
        onSuccess(amount);
        onSuccess(roi);
        onSuccess(time)
    }

    if ((rate == "") && (duration == "")) {
        onError(roi, "Please enter rate of interest");
        onError(time, "Please enter loan duration");
        return false;
    }else{        
        onSuccess(roi);
        onSuccess(time)
    }



    if ((principal == "") && (duration == "")) {
        onError(amount, "Please enter principal amount");
        onError(time, "Please enter loan duration");
        return false;
    }else{
        onSuccess(amount);
        onSuccess(time)
    }

    if ((principal == "") && (rate == "")) {
        onError(amount, "Please enter principal amount");
        onError(roi, "Please enter rate of interest");
        return false;
    }else{
        onSuccess(amount);
        onSuccess(roi);
    }

    if (principal == "") {
        onError(amount, "Please enter principal amount");
    }else{
        onSuccess(amount);
    }


    if (rate == "") {
        onError(roi, "Please enter rate of interest");
        return false;
    }else{
        onSuccess(roi);
    }


    if (duration == "") {
        onError(time, "Please enter loan duration");
        return false;
    }else{
        onSuccess(time);
    }

    //if user entered invalid input

    if ((principal == 0) && ((rate < 2) || (rate > 30)) && ((duration < 1) || (duration > 15))) {
        onError(amount, "Please enter valid amount");
        onError(roi, "Rate of interest should be greater than 2% or less than 30%");
        onError(time, "loan duration should be greater than 1 year and less than 15 year");
        return false;
    }else{
        onSuccess(amount);
        onSuccess(roi);
        onSuccess(time)
    }

    if (((rate < 2) || (rate > 30)) && ((duration < 1) || (duration > 15))) {
        onError(roi, "Rate of interest should be greater than 2% or less than 30%");
        onError(time, "loan duration should be greater than 1 year and less than 15 year");
        return false;
    }else{
        onSuccess(roi);
        onSuccess(time)
    }

    if ((principal == 0)&&((rate<2)||(rate>30))) {
        onError(amount, "Please enter valid amount");
        onError(roi, "Rate of interest should be greater than 2% or less than 30%");
        return false;
    }else{
        onSuccess(amount);
        onSuccess(roi)
    }

    if ((principal == 0)&&((duration<1)||(duration>15))) {
        onError(amount, "Please enter valid amount");
        onError(time, "loan duration should be greater than 1 year and less than 15 year");
        return false;
    }else{
        onSuccess(amount);
        onSuccess(time)
    }



    if (principal == 0) {
        onError(amount, "Please enter valid amount");
        return false;
    }else{
        onSuccess(amount)
    }


    if ((rate < 2) || (rate > 30)) {
        onError(roi, "Rate of interest should be greater than 2% or less than 30%");
        return false;
    }else{
        onSuccess(roi)
    }


    if ((duration < 1) || (duration >15)) {
       onError(time, "loan duration should be greater than 1 year and less than 15 year");
        return false;
    }
    else{
        onSuccess(time)
    }
    
    
}



function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success")
}


function onError(input, message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success")
}

/*
























*/