var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Data for the chart
var data = [10, 20, 30, 40];
var colors = ["#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"];

// Calculate the total of all data points
var total = 0;
for (var i = 0; i < data.length; i++) {
    total += data[i];
}

// Set the center point of the chart
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Set the radius of the chart
var radius = Math.min(centerX, centerY);

// Draw the chart
var startAngle = 0;
for (var i = 0; i < data.length; i++) {
    // Calculate the end angle of the current data point
    var endAngle = startAngle + (data[i] / total) * (Math.PI * 2);

    // Draw the segment
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();

    // Update the start angle for the next data point
    startAngle = endAngle;
}
