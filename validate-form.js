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


    if (principal == "") {
        document.getElementById('amount').innerHTML = "Please enter principal amount";
        return false;
    }
    if (principal == 0) {
        document.getElementById('amount').innerHTML = "Please enter valid amount";
        return false;
    }

    if (rate == "") {
        document.getElementById('roi').innerHTML = "Please enter rate of interest";
        return false;
    }
    if ((rate<2)||(rate>30)) {
        document.getElementById('roi').innerHTML = "Rate of interest should be greater than 2% or less than 30%";
        return false;
    }


    if (duration == "") {
        document.getElementById('time').innerHTML = "Please enter loan duration";
        return false;
    }
    if ((duration<1)||(duration>=10)) {
        document.getElementById('time').innerHTML = "loan duration should be greater than 1 year and less than 10 year";
        return false;
    }
}