var carBatteryInput = document.querySelector("#carBattery");
var elecCostInput = document.querySelector("#electricityCost");
var currencyNameInput = document.querySelector("#currency").value;

var consumptionSummaryInput = document.querySelector("#consumptionSummary");

var goButton = document.querySelector("#goButton");

goButton.addEventListener("click", function(){
    var batteryKW = parseFloat(carBatteryInput.value);
    var costPerKWh = parseFloat(elecCostInput.value);
    var costPerCharge = batteryKW * costPerKWh;

    consumptionSummaryInput.textContent = "A full charge costs " + costPerCharge + " " + currencyNameInput;

    $('#example').modal('show')
});

