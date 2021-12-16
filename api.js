    // $("#button1").click(function() {
    //     var formData ={
    //         principalAmount: $("#principalAmount").val(),
    //         interestRate: $("#interestRate").val(),
    //         loanDuration: $("#loanDuration").val(),
    //     };

    //     // console.log(formData);
       
    //     $.ajax({
    //         type: "POST",
    //         url: "https://emicalc-api.herokuapp.com/home/monthlyemi",
    //         contentType: "application/json; charset=utf-8",
    //         data : JSON.stringify(formData),
    //         dataType: "json",
    //         // headers: { "Accept": "application/json", "Content-Type": "application/json" },
          
    //     });

      

    //     //   event.preventDefault();


        
    // });

//AJAX call for MontlyEmi API
$("#button1").click(function(event) {
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
        // encode: true,
        //  success: function(response) {
        //      var myjson = JSON.stringify(response,null,4);
        //      var x = window.open();
        //      x.document.open();
        //      x.document.write('<html><body><pre>'+ myjson + '</pre></body><html>');
        //      x.document.close();
        //     console.log(myjson);
        //  }
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
        url: "https://emicalc-api.herokuapp.com/home/dailyemi",
        data: formData,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(formData),
        dataType: "json",
        // encode: true,
        //  success: function(response) {
        //      var myjson = JSON.stringify(response,null,4);
        //      var x = window.open();
        //      x.document.open();
        //      x.document.write('<html><body><pre>'+ myjson + '</pre></body><html>');
        //      x.document.close();
        //     console.log(myjson);
        //  }
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
        // encode: true,
        //  success: function(response) {
        //      var myjson = JSON.stringify(response,null,4);
        //      var x = window.open();
        //      x.document.open();
        //      x.document.write('<html><body><pre>'+ myjson + '</pre></body><html>');
        //      x.document.close();
        //     console.log(myjson);
        //  }
    })
     event.preventDefault();
});   

