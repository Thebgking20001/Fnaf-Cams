var batteryHTML5Charging = false;
var batteryHTML5Level = 1;
var batteryHTML5DischargeTime = 0;
var batteryHTML5ChargeTime = 0;

navigator.getBattery().then(function(battery) {
	function updateAllBatteryInfo(){
		updateChargeInfo();
		updateLevelInfo();
		updateChargingInfo();
		updateDischargingInfo();
	}
	updateAllBatteryInfo();
	battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    batteryHTML5Charging = battery.charging;
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
    batteryHTML5Level = battery.level;
  }

  battery.addEventListener('chargingtimechange', function(){
    updateChargingInfo();
  });
  function updateChargingInfo(){
    batteryHTML5ChargeTime = battery.chargingTime;
  }

  battery.addEventListener('dischargingtimechange', function(){
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    batteryHTML5DischargeTime = battery.dischargingTime;
  }
});

function batteryHTML5Get() {
	return [batteryHTML5Charging, batteryHTML5Level, batteryHTML5ChargeTime, batteryHTML5DischargeTime];
}