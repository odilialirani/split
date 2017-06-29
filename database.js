var db_key = '14zvHC8wa4w1lWgNISOiOWPmHEsKCiR5Ab9mQuTxlR-0';
var RECEIVE_URL = 'https://spreadsheets.google.com/feeds/list/14zvHC8wa4w1lWgNISOiOWPmHEsKCiR5Ab9mQuTxlR-0/1/public/basic?alt=json';
var SUBMIT_URL = 'https://script.google.com/macros/s/AKfycbwaYFBAsmmVJqUTKxrjTSHxNYb4TJNzEEPer4EXYlwmSbqA3nI/exec';

$(document).ready(function() {
	$.ajax({
		url: RECEIVE_URL,
		success: function(data) {
			console.log(data)
			readDataAndAppend(data);
		}
	})

	// Submitting data
	$("#submit_form").submit(function (event) {
		event.preventDefault();
		var data = $(this).serialize();
		

		$.ajax({
			url: SUBMIT_URL,
			type: "POST",
			data: data
		});
        
        // Redirect to profile
        
	})
})

function readDataAndAppend(data) {
	var allData = [];
	var cells = data.feed.entry;

	for (var i = 0; i < cells.length; i++) {

		var rowObj = {};
		rowObj.timestamp = cells[i].title.$t;
		var rowCols = cells[i].content.$t.split(',');
		for (var j = 0; j < rowCols.length; j++) {
			var keyval = rowCols[j].split(':');
			rowObj[keyval[0].trim()] = keyval[1].trim();
		}
		allData.push(rowObj);
	}

	console.log(allData);
	
	// Showing all data on display.html

	for (var i = 0; i < cells.length; i++) {
		var obj = allData[i];
		var name = obj.name;
		var amount = obj.amount;
		var desc = obj.description;
		
		var addRow = "<tr> <td>" + name + "</td><td>" + amount + "</td><td>" + desc + "</td></tr>";
		$("#show_section").append(addRow)
	}
}