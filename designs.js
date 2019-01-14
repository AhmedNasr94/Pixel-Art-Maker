/* global variables */
let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

function DrawTable() {
	for (let r = 0; r < height.value; r++) {
		const row = canvas.insertRow(r);
		for (let c = 0; c < width.value; c++) {
			const cell = row.insertCell(c);
			cell.addEventListener("click", colorcell);
		}
	}
}

function colorcell() {
	this.setAttribute("style", `background-color: ${color.value}`);
}

color.addEventListener("click", function() {});
