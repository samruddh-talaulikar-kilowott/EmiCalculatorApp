    $("#button1").click(function(event) {
        var formData ={
            principalAmount: $("#principalAmount").val(),
            interestRate: $("#interestRate").val(),
            loanDuration: $("#loanDuration").val(),
        };

       
        $.ajax({
            type: "POST",
            url: "https://emicalc-api.herokuapp.com/monthlyemi",
            // contentType: "application/json; charset=utf-8",
            data : JSON.stringify(formData),
            // data: formData,

            dataType: "json",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
          
        });

      

        //   event.preventDefault();


        
    });


   
