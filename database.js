var db_key = '14zvHC8wa4w1lWgNISOiOWPmHEsKCiR5Ab9mQuTxlR-0';
var RECEIVE_URL = 'https://spreadsheets.google.com/feeds/list/14zvHC8wa4w1lWgNISOiOWPmHEsKCiR5Ab9mQuTxlR-0/1/public/basic?alt=json';
var SUBMIT_URL = 'https://script.google.com/macros/s/AKfycbwaYFBAsmmVJqUTKxrjTSHxNYb4TJNzEEPer4EXYlwmSbqA3nI/exec';

var RECEIVE_URL_USR = 'https://spreadsheets.google.com/feeds/list/1msMHb18JcFMfVmmoiFRyyj3rE74Zglot1SxpD0r9C0I/1/public/basic?alt=json';

var usr;

$(document).ready(function() {
	$.ajax({
		url: RECEIVE_URL,
		success: function(data) {
			//console.log(data)
			readDataAndAppend(data);
		}
	})

	$.ajax({
		url: RECEIVE_URL_USR,
		success: function(data) {
			//console.log(data)
			usr = readData(data);
			appendUser(usr);
			//console.log(usr);
		}
	})

	// Submitting data
	$("#submit_form").submit(function (event) {
		event.preventDefault();

		var x = $('.Checkbox:checked').map(function() { return this.value; }).get().join('; ');
		document.getElementById("payeeField").value = x;
		var data = $(this).serialize();

		$.ajax({
			url: SUBMIT_URL,
			type: "POST",
			data: data,
			success: function() {
				var x = document.getElementById("snackbar");
				x.innerHTML = "Submitted!";
				x.className = "show";
				document.getElementById("submit_form").reset();
				setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
			},
			error: function() {
				var x = document.getElementById("snackbar");
				x.innerHTML = "Failed to submit!";
				x.className = "show";
				setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
			}
		});
	})
})


function readData(data) {
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
	//console.log(allData);
	return allData;
}


function readDataAndAppend(data) {
	var allData = readData(data);
	var cells = data.feed.entry;

	/*for (var i = 0; i < cells.length; i++) {

		var rowObj = {};
		rowObj.timestamp = cells[i].title.$t;
		var rowCols = cells[i].content.$t.split(',');
		for (var j = 0; j < rowCols.length; j++) {
			var keyval = rowCols[j].split(':');
			rowObj[keyval[0].trim()] = keyval[1].trim();
		}
		allData.push(rowObj);
	}*/

	//console.log(allData);
	
	// Showing all data on display.html

	for (var i = 0; i < cells.length; i++) {
		var obj = allData[i];
		var name = obj.name;
		var amount = obj.amount;
		var desc = obj.description;
		var payee = obj.payee;
		var a = payee.split(";");

		var addRow = "<tr> <td>" + name + "</td><td>" + amount + "</td><td>" + desc + "</td><td>" + a + "</td></tr>";
		$("#show_section").append(addRow)
	}
}

function appendUser(data) {
	for (var i = 0; i < data.length; i++) {
		var obj = data[i];
		var usrname = obj.username;

		var addPayer = "<option>" + usrname + "</option>";
		$("#payer").append(addPayer);

		var addPayee = '<label class="checkbox-inline"><input class="Checkbox" type="checkbox" value="' + usrname + '">' + usrname + '</label>';
		$("#payee").append(addPayee);
	}
}
