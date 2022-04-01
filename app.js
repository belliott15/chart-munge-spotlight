
  // Bar chart showing number of customers by each purchase frequency.

import { coolFactor, customerGender, purchaseFrequency } from './data-utils.js';

const countMap = purchaseFrequency();
const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [{
        label: 'Purchase Frequency',
        backgroundColor: ('purple'),
        borderColor: ('aqua'),
        data: Object.values(countMap),
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

//eslint-disable-next-line
const myBarChart = new Chart(
    document.getElementById('barChart'),
    config
);

  // Line chart showing number of customers by each cool factor.
const coolCount = coolFactor();
const coolLables = Object.keys(coolCount);

const lineData = {
    labels: coolLables,
    datasets: [{
        label: 'Cool Factor per Customer',
        backgroundColor: ('forestgreen'),
        borderColor: 'aqua',
        data: Object.values(coolCount),
    }]
};
const lineConfig = {
    type: 'line',
    data: lineData,
};
//eslint-disable-next-line
const myLineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig
);
  // Pie chart showing number of customers by each gender. 
    // Make sure you have enough colors in your chart data to make 
    // the pie chart readable.
const genderOfCustomer = customerGender();
const pieLables = Object.keys(genderOfCustomer);

const pieData = {
    labels: pieLables,
    datasets: [{
        label: 'Customers By Gender',
        backgroundColor: ['beige', 'orange', 'yellow', 'green', 'blue',
            'indigo', 'violet', 'red'],
        borderColor: 'rgb(200, 99, 132)',
        data: Object.values(genderOfCustomer),
    }]
};
const pieConfig = {
    type: 'pie',
    data: pieData,
};
//eslint-disable-next-line
const mypieChart = new Chart(
    document.getElementById('pieChart'),
    pieConfig
);

purchaseFrequency();