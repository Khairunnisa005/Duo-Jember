// Data for the line chart
const data = [1, 5, 28, 12, 25, 5, 20, 10];

// Function to draw the line chart
function drawLineChart() {
  const canvas = document.getElementById("lineChart");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define chart dimensions
    const chartWidth = canvas.width - 100;
    const chartHeight = canvas.height - 50;

    // Draw vertical label
    ctx.save();
    ctx.translate(10, chartHeight / 1);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Jumlah", 0, 0);
    ctx.restore();

    // Draw horizontal label
    ctx.textAlign = "center";
    ctx.fillText("Tanggal", chartWidth / 1, chartHeight + 40);

    // Draw vertical lines at the left side
    const valueStep = chartHeight / 5;
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
      const y = chartHeight - i * valueStep;
      ctx.moveTo(50, y);
      ctx.lineTo(45, y);
      ctx.stroke();

      const label = i * (70 / 5);
      ctx.fillText(label, 40, y + 5);
    }

    // Draw horizontal lines at the bottom with labels 1 to 8
    const bottomValueStep = chartWidth / 8; // Step size for the bottom lines
    ctx.beginPath();
    for (let i = 1; i <= 8; i++) {
      const x = i * bottomValueStep + 50; // Calculate x position for the line
      const yStart = chartHeight; // Starting y position for the line
      const yEnd = chartHeight + 10; // Ending y position for the line
      ctx.moveTo(x, yStart);
      ctx.lineTo(x, yEnd);
      ctx.stroke();

      // Add text labels 1 to 8 next to the lines
      ctx.textAlign = "center";
      ctx.fillText(i, x, yEnd + 10);
    }

    // Draw vertical line on the left side
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(50, chartHeight);
    ctx.strokeStyle = "#000"; // Change stroke style to black
    ctx.stroke();

    // Draw horizontal line at the bottom
    ctx.beginPath();
    ctx.moveTo(50, chartHeight);
    ctx.lineTo(canvas.width, chartHeight);
    ctx.stroke();

    // Draw data line
    const stepSize = chartWidth / (data.length - 1);
    ctx.beginPath();
    ctx.moveTo(50, chartHeight - data[0] * (chartHeight / 30));
    for (let i = 1; i < data.length; i++) {
      const x = i * stepSize + 50;
      const y = chartHeight - data[i] * (chartHeight / 30);
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

// Call the function to draw the line chart
drawLineChart();
