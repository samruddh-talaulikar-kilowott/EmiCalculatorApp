$(document).ready(function() {
    $("#button2").click(function(event) {
        var formData ={
            principalAmount: $("#principalAmount").val(),
            interestRate: $("#interestRate").val(),
            loanDuration: $("#loanDuration").val(),
        };

       
        $.ajax({
            type: "POST",
            url: "https://emicalc-api.herokuapp.com/home/monthlyemi",
            data: JSON.stringify(formData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            // encode: false,
            //  success: function(response) {
            //      var myjson = JSON.stringify(response,null,4);
            //      var x = window.open();
            //      x.document.open();
            //      x.document.write('<html><body><pre>'+ myjson + '</pre></body><html>');
            //      x.document.close();
                 
            //     console.log(myjson);
            //  }
            
        });

      

        //   event.preventDefault();


        
    });
});
