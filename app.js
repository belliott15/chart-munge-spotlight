
  // Bar chart showing number of customers by each purchase frequency.

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myBarChart = new Chart(
    document.getElementById('barChart'),
    config
);

  // Line chart showing number of customers by each cool factor.
const lineData = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};
const lineConfig = {
    type: 'line',
    data: data,
    options: {}
};

const myLineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig
);
  // Pie chart showing number of customers by each gender. 
    // Make sure you have enough colors in your chart data to make 
    // the pie chart readable.
const pieData = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(215, 90, 131)',
        borderColor: 'rgb(200, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};
const pieConfig = {
    type: 'pie',
    data: data,
    options: {}
};
  
const mypieChart = new Chart(
    document.getElementById('pieChart'),
    pieConfig
);

