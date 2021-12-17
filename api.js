//just to rotate coin img on every refresh
rotateImg();

//AJAX call for MontlyEmi API
$("#button1").click(function(event) {
    var formData ={
        principalAmount: $("#principalAmount").val(),
        interestRate: $("#interestRate").val(),
        loanDuration: $("#loanDuration").val(),
    };
    $.ajax({
        type: "POST",
        url: "https://emicalc-api.herokuapp.com/home/dailyemi",
        data: formData,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(formData),
        dataType: "json",
        
        success: function(response){

            document.getElementById("ajaxResponse").innerHTML = "";
            var res = response.DailyEmi;
            $("#ajaxResponse").append(res);
            
            // document.getElementById("ajaxResponse").innerHTML = JSON.stringify(response) ;
            // console.log(response);
           
        }
         
    })
     event.preventDefault();
});   

$("#button2").click(function(event) {
    var formData ={
        principalAmount: $("#principalAmount").val(),
        interestRate: $("#interestRate").val(),
        loanDuration: $("#loanDuration").val(),
    };
    $.ajax({
        type: "POST",
        url: "https://emicalc-api.herokuapp.com/home/monthlyemi",
        data: formData,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(formData),
        dataType: "json",


        success: function(response){

            document.getElementById("ajaxResponse").innerHTML = "";
            var res = response.MonthlyEmi;
            $("#ajaxResponse").append(res);
           
        }
        
    })
     event.preventDefault();
});





$("#button3").click(function(event) {
    var formData ={
        principalAmount: $("#principalAmount").val(),
        interestRate: $("#interestRate").val(),
        loanDuration: $("#loanDuration").val(),
    };
    $.ajax({
        type: "POST",
        url: "https://emicalc-api.herokuapp.com/home/continousemi",
        data: formData,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(formData),
        dataType: "json",


        success: function(response){
             document.getElementById("ajaxResponse").innerHTML = "";
            var res = response.ContinousEmi;
            $("#ajaxResponse").append(res);
           
        }
        
    })
     event.preventDefault();
});   

