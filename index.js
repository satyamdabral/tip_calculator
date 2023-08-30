var tiplabel = document.getElementById("tiplabel");
var calculate = document.getElementById("calcbtn");
calculate.addEventListener('click', () => {
    var billamount = parseFloat(document.getElementById("Amount").value);
    var serviceQuality = parseFloat(document.getElementById("quality").value);
    var numPeople = parseInt(document.getElementById("totalPeople").value);
    var tipAmount = (billamount * serviceQuality) / numPeople;
    document.getElementById("totaltip").value = "RS " + tipAmount.toFixed(2) + "!";
    tiplabel.style.display = "block";
});
