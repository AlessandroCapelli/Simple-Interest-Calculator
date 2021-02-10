// compute function
function compute()
{
    // retrieve elements
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    // check params
    if(parseFloat(principal) <= 0 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    // calculate interest
    else {
        interest = principal * years * rate / 100;

        var tempY = new Date();
        tempY = tempY.getFullYear();
        tempY = tempY + parseInt(years);
        
        document.getElementById("result").innerHTML = "<div class='result'>If you deposit " + principal + "<br>at an interest rate of " + rate + "%.<br>You will receive an amount of " + interest + ",<br>in the year " + tempY + "<\div>";
    }
}

// update rate label function
function updateRateLabel() {
    rate = document.getElementById("rate").value;

    document.getElementById("rateLabel").innerHTML = rate + " %";
}
