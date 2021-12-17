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
        document.getElementById('amount').innerHTML = "Please enter principal amount";
        document.getElementById('roi').innerHTML = "Please enter rate of interest";
        document.getElementById('time').innerHTML = "Please enter loan duration";
        return false;
    }

    if ((rate == "") && (duration == "")) {
        document.getElementById('roi').innerHTML = "Please enter rate of interest";
        document.getElementById('time').innerHTML = "Please enter loan duration";
        return false;
    }



    if ((principal == "") && (duration == "")) {
        document.getElementById('amount').innerHTML = "Please enter principal amount";
        document.getElementById('time').innerHTML = "Please enter loan duration";
        return false;
    }

    if ((principal == "") && (rate == "")) {
        document.getElementById('amount').innerHTML = "Please enter principal amount";
        document.getElementById('roi').innerHTML = "Please enter rate of interest";
        return false;
    }

    if (principal == "") {
        document.getElementById('amount').innerHTML = "Please enter principal amount";
    }


    if (rate == "") {
        document.getElementById('roi').innerHTML = "Please enter rate of interest";
        return false;
    }


    if (duration == "") {
        document.getElementById('time').innerHTML = "Please enter loan duration";
        return false;
    }

    //if user entered invalid input

    if ((principal == 0) && ((rate < 2) || (rate > 30)) && ((duration < 1) || (duration > 15))) {
        document.getElementById('amount').innerHTML = "Please enter valid amount";
        document.getElementById('roi').innerHTML = "Rate of interest should be greater than 2% or less than 30%";
        document.getElementById('time').innerHTML = "loan duration should be greater than 1 year and less than 15 year";
        return false;
    }
    if (((rate < 2) || (rate > 30)) && ((duration < 1) || (duration > 15))) {
        document.getElementById('roi').innerHTML = "Rate of interest should be greater than 2% or less than 30%";
        document.getElementById('time').innerHTML = "loan duration should be greater than 1 year and less than 15 year";
        return false;
    }

    if ((principal == 0)&&((rate<2)||(rate>30))) {
        document.getElementById('amount').innerHTML = "Please enter valid amount";
        document.getElementById('roi').innerHTML = "Rate of interest should be greater than 2% or less than 30%";
        return false;
    }

    if ((principal == 0)&&((duration<1)||(duration>15))) {
        document.getElementById('amount').innerHTML = "Please enter valid amount";
        document.getElementById('time').innerHTML = "loan duration should be greater than 1 year and less than 15 year";
        return false;
    }



    if (principal == 0) {
        document.getElementById('amount').innerHTML = "Please enter valid amount";
        return false;
    }


    if ((rate < 2) || (rate > 30)) {
        document.getElementById('roi').innerHTML = "Rate of interest should be greater than 2% or less than 30%";
        return false;
    }


    if ((duration < 1) || (duration >15)) {
        document.getElementById('time').innerHTML = "loan duration should be greater than 1 year and less than 15 year";
        return false;
    }
    
    
}

/*

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success")
}


else{
        onSuccess(amount);
        onSuccess(roi);
        onSuccess(time)
    }

else{        
        onSuccess(roi);
        onSuccess(time)
    }

else{
        onSuccess(amount);
        onSuccess(time)
    }

else{
        onSuccess(amount);
        onSuccess(roi);
    }

else{
        onSuccess(amount);
    }
else{
        onSuccess(roi);
    }
else{
        onSuccess(time);
    }

else{
        onSuccess(amount);
        onSuccess(roi);
        onSuccess(time)
    }

else{
        onSuccess(roi);
        onSuccess(time)
    }
else{
        onSuccess(amount);
        onSuccess(roi)
    }
else{
        onSuccess(amount);
        onSuccess(time)
    }

else{
        onSuccess(amount)
    }

else{
        onSuccess(roi)
    }

else{
        onSuccess(time)
    }

*/