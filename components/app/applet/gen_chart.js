const fs = require('fs');

async function generateChart() {
  const chartConfig = {
    type: 'line',
    data: {
      labels: Array.from({length: 201}, (_, i) => -10 + i * 0.1),
      datasets: [{
        label: 'f(x)',
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        data: Array.from({length: 201}, (_, i) => {
          const x = -10 + i * 0.1;
          // Roots at -5, -2, 2, 5 => f(x) = k(x+5)(x+2)(x-2)(x-5)
          // = k * (x^2 - 25)(x^2 - 4) = k * (x^4 - 29x^2 + 100)
          // If y-intercept is at y=3 => 100k = 3 => k = 0.03
          return 0.03 * (Math.pow(x, 4) - 29 * Math.pow(x, 2) + 100);
        })
      }]
    },
    options: {
      elements: { line: { tension: 0.4 } },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            callback: function(val) { return Number.isInteger(parseFloat(val)) && parseFloat(val) % 5 === 0 ? val : ''; },
            autoSkip: false,
            maxRotation: 0,
            min: -10,
            max: 10
          },
          gridLines: { color: 'black', zeroLineWidth: 2, drawTicks: true }
        }],
        yAxes: [{
          display: true,
          ticks: { display: false, min: -10, max: 20 },
          gridLines: { color: 'black', zeroLineWidth: 2, drawTicks: false }
        }]
      },
      legend: { display: false }
    }
  };

  const url = 'https://quickchart.io/chart?w=500&h=300&c=' + encodeURIComponent(JSON.stringify(chartConfig));
  console.log("Fetching from QuickChart...");
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  console.log('data:image/png;base64,' + base64.substring(0, 100) + '...');
  
  fs.writeFileSync('base64_chart.txt', 'data:image/png;base64,' + base64);
}

generateChart().catch(console.error);
