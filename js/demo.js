
$(document).ready(function(){


	// A select input field so we can limit our options
	$("#editme3").editInPlace({
		callback: function(unused, enteredText) { return enteredText; },
		// url: "./server.php",
		field_type: "select",
		select_options: "Change me to this, No way:no"
	});

	
});
