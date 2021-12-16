    $("#button1").click(function(event) {
        var formData ={
            principalAmount: $("#principalAmount").val(),
            interestRate: $("#interestRate").val(),
            loanDuration: $("#loanDuration").val(),
        };

       
        $.ajax({
            type: "POST",
            url: "https://emicalc-api.herokuapp.com/home/monthlyemi",
            contentType: "application/json; charset=utf-8",
            data: formData,
            dataType: "json",
          
        });

      

        //   event.preventDefault();


        
    });
