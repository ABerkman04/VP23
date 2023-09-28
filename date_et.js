exports.dateNowET = function(){
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	let timeNow = new Date();
	return timeNow.getDate() + "." + "." + monthNameET[timeNow.getMonth] + "." + timeNow.getFullYear();
	
}

//monthNameET[0]
// monthNamesET[monthNameET()]
//console.log(Date());
//console.log("Täna on " + dateNow + "." + (monthNow + 1) + "." + yearNow);