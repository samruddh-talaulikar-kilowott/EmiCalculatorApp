    $("#button1").click(function(event) {
        var formData ={
            principalAmount: $("#principalAmount").val(),
            interestRate: $("#interestRate").val(),
            loanDuration: $("#loanDuration").val(),
        };

       
        $.ajax({
            type: "POST",
            url: "https://emicalc-api.herokuapp.com/home/monthlyemi",
            // contentType: "application/json; charset=utf-8",
            data : JSON.stringify(formData),
            // data: formData,

            dataType: "json",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
          
        });

      

        //   event.preventDefault();


        
    });


   
// document.forms["ApiForm"].addEventListener("submit", e => {
//          e.preventDefault();
//          const form = document.forms["ApiForm"];
//          var api_url = "https://localhost:7092/api/Emi/CalculateDailyEmi";
//          let response = fetch(api_url, {
//         method: "POST",
//         headers: { "Accept": "application/json", "Content-Type": "application/json" },
//         body: JSON.stringify({
//             principal: form.elements["principal"].value,
//             interestRateInPercentage: form.elements["interest"].value,
//             loanDurationInYearCount: form.elements["duration"].value
//         })
//     });
//     response.then(res =>
//             res.json()).then(d => {
//                 console.log(d)
//                 show(d);
//             })
// });
// function show(d){
// let emi = d.emiPayment;
//     document.getElementById("Emi").innerHTML = emi;  
// }
     
