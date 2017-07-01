var key = '1msMHb18JcFMfVmmoiFRyyj3rE74Zglot1SxpD0r9C0I';
var RECEIVE_URL = 'https://spreadsheets.google.com/feeds/list/1msMHb18JcFMfVmmoiFRyyj3rE74Zglot1SxpD0r9C0I/1/public/basic?alt=json';
var SUBMIT_URL = 'https://script.google.com/macros/s/AKfycbzbpNEMemZzfXLAywajExyPycnboJKXkrwhpqluE1TwZNTfCwA/exec';

$(document).ready(function() {
	$.ajax({
		url: RECEIVE_URL,
		success: function(data) {
			//console.log(data)
			doThis(data);
		}
	})

	// Submitting data
	$("#submit_user_form").submit(function (event) {
		event.preventDefault();
		var data = $(this).serialize();
		//console.log(data);
		$.ajax({
			url: SUBMIT_URL,
			type: "POST",
			data: data
		})
	})
})

function doThis(data) {
	var allData = [];
	var cells = data.feed.entry;
	console.log(cells);
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