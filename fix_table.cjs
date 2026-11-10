const fs = require('fs');

const path = './src/data/questions_est1_2021_may.ts';
let content = fs.readFileSync(path, 'utf8');

const tableHtml = `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Average Closing Price ($)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="border border-gray-400 px-2 py-1">2020</td><td class="border border-gray-400 px-2 py-1">1,771.9</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2019</td><td class="border border-gray-400 px-2 py-1">1,393.34</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2018</td><td class="border border-gray-400 px-2 py-1">1,268.93</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2017</td><td class="border border-gray-400 px-2 py-1">1,251.92</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2016</td><td class="border border-gray-400 px-2 py-1">1,158.86</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2015</td><td class="border border-gray-400 px-2 py-1">1,266.06</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2014</td><td class="border border-gray-400 px-2 py-1">1,409.51</td></tr>
    <tr><td class="border border-gray-400 px-2 py-1">2013</td><td class="border border-gray-400 px-2 py-1">1,668.86</td></tr>
  </tbody>
</table>`;

// Fix Q37 (from Q17)
content = content.replace(
  /"What is the mean of the average closing price of the last 5 years according to the given table\? [^"]+"/,
  `"What is the mean of the average closing price of the last 5 years according to the given table?",\n    html: \`${tableHtml}\``
);

const ticketTableHtml = `<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Male (Avg)</th>
      <th class="border border-gray-400 px-2 py-1">Female (Avg)</th>
      <th class="border border-gray-400 px-2 py-1">Child (Avg)</th>
      <th class="border border-gray-400 px-2 py-1">Male (Season)</th>
      <th class="border border-gray-400 px-2 py-1">Female (Season)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2018</td>
      <td class="border border-gray-400 px-2 py-1">4521</td>
      <td class="border border-gray-400 px-2 py-1">1254</td>
      <td class="border border-gray-400 px-2 py-1">759</td>
      <td class="border border-gray-400 px-2 py-1">1122</td>
      <td class="border border-gray-400 px-2 py-1">780</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2019</td>
      <td class="border border-gray-400 px-2 py-1">4668</td>
      <td class="border border-gray-400 px-2 py-1">1102</td>
      <td class="border border-gray-400 px-2 py-1">884</td>
      <td class="border border-gray-400 px-2 py-1">1088</td>
      <td class="border border-gray-400 px-2 py-1">794</td>
    </tr>
  </tbody>
</table>
<table class="table-auto border-collapse border border-gray-400 w-full max-w-xs mb-4 text-center">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-400 px-2 py-1">Year</th>
      <th class="border border-gray-400 px-2 py-1">Male ($)</th>
      <th class="border border-gray-400 px-2 py-1">Female ($)</th>
      <th class="border border-gray-400 px-2 py-1">Child ($)</th>
      <th class="border border-gray-400 px-2 py-1">Male (Season $)</th>
      <th class="border border-gray-400 px-2 py-1">Female (Season $)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2018</td>
      <td class="border border-gray-400 px-2 py-1">72336</td>
      <td class="border border-gray-400 px-2 py-1">16552.8</td>
      <td class="border border-gray-400 px-2 py-1">4402.2</td>
      <td class="border border-gray-400 px-2 py-1">78540</td>
      <td class="border border-gray-400 px-2 py-1">47970</td>
    </tr>
    <tr>
      <td class="border border-gray-400 px-2 py-1">2019</td>
      <td class="border border-gray-400 px-2 py-1">79822.8</td>
      <td class="border border-gray-400 px-2 py-1">15428</td>
      <td class="border border-gray-400 px-2 py-1">4420</td>
      <td class="border border-gray-400 px-2 py-1">80512</td>
      <td class="border border-gray-400 px-2 py-1">47640</td>
    </tr>
  </tbody>
</table>`;

content = content.replace(
  /"What was the seasonal ticket price for a male person in 2018\? How much did it decrease or increase in 2019\?"/,
  `"What was the seasonal ticket price for a male person in 2018? How much did it decrease or increase in 2019?",\n    html: \`${ticketTableHtml}\``
);

fs.writeFileSync(path, content);
console.log("Tables updated");
