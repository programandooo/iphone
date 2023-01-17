// Made by Robin Savemark

function background() {
	var background = ["http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_005.jpg", "http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_002.jpg", "http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_001.jpg", "http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_010.jpg"];
	var $screen = $("#screen");
	var random = Math.floor(Math.random() * background.length);
	$screen.css({"background-image": "url(" + background[random] + ")"});
};

function internet() {
	var array = ["4G", "<i class='fa fa-wifi'></i>"];
	
	var $internet = $("#internet");
	var random = Math.floor(Math.random() * array.length);
	$internet.html(array[random]);
};

function battery() {
	var percent = ["48%", "97%", "98%", "100%", "50%", "53%", "70%", "69%", "33%", "28%", "21%"];
	var $battery = $("#battery");
	var randomPercent = Math.floor(Math.random() * percent.length);
	
	$battery.html(percent[randomPercent]);
	
	if (percent[randomPercent] === "97%" || percent[randomPercent] ===  "98%" || percent[randomPercent] ===  "100%") {
		$battery.append(" <i class='fa fa-battery-full'></i>");
	} else if (percent[randomPercent] === "48%" || percent[randomPercent] === "50%" || percent[randomPercent] ===  "53%") {
		$battery.append(" <i class='fa fa-battery-half'></i>");
	} else if (percent[randomPercent] === "70%" || percent[randomPercent] === "69%") {
		$battery.append(" <i class='fa fa-battery-three-quarters'></i>");
	} else if (percent[randomPercent] === "33%" || percent[randomPercent] === "28%" || percent[randomPercent] === "21%") {
		$battery.append(" <i class='fa fa-battery-quarter'></i>");
	}
};

function date() {
	var date = new Date();
	var today = new Array(7);
	var month = new Array(12);

	today[0] = "Sunday";
	today[1] = "Monday";
	today[2] = "Tuesday";
	today[3] = "Wednesday";
	today[4] = "Thursday";
	today[5] = "Friday";
	today[6] = "Saturday";

	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";

	todayIs = today[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()];

	$("#date").html(todayIs);
};

function time() {
	var today = new Date();
	var hour = today.getHours();
	var min = today.getMinutes();

	if (hour.toString().length == 1) {
		hour = "0" + hour;
	}

	if (min.toString().length == 1) {
		min = "0" + min;
	}

	$("#time").html(hour + ':' + min);
};

background();
internet();
battery();
date();
time();

$(function() {
	var home = $("#home");
	var text = $(".iphone_screen-text");
	
	home.on("click touchstart", function () {
		background();
		internet();
		battery();
		date();
		time();
		if (text.hasClass("unlock")) {
			text.removeClass("unlock");
		} else {
			text.addClass("unlock");
		}
		setTimeout(function () {
			text.removeClass("unlock");
		}, 800);
	});
});