    $("#button1").click(function() {
        var formData ={
            principalAmount: $("#principalAmount").val(),
            interestRate: $("#interestRate").val(),
            loanDuration: $("#loanDuration").val(),
        };

        // console.log(formData);
       
        $.ajax({
            type: "POST",
            url: "https://emicalc-api.herokuapp.com/home/monthlyemi",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(formData),
            dataType: "json",
            // headers: { "Accept": "application/json", "Content-Type": "application/json" },
          
        });

      

        //   event.preventDefault();


        
    });


   
