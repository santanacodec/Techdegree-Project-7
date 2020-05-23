// line chart
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
        datasets: [{
            label: 'Hourly',
            data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
            backgroundColor: [
                'rgba(226, 227, 246, 0.7)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)'
            ],
            borderColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
            ],
            borderWidth: 1,
            fill: true,
        },
            {
            label: 'Daily',
            data: [210, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200],
            backgroundColor: [
                'rgba(226, 227, 246, 0.7)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)'
            ],
            borderColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
            ],
            borderWidth: 1,
            fill: true,
        },
            {
            label: 'Weekly',
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 2000, 1500, 2000, 2500],
            backgroundColor: [
                'rgba(226, 227, 246, 0.7)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)',
                'rgba(251, 251, 251)'
            ],
            borderColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
            ],
            borderWidth: 1,
            fill: true,
        }, {
                label: 'Monthly', 
                fill: true,
                backgroundColor: [
                    'rgba(226, 227, 246, 0.7)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)',
                    'rgba(251, 251, 251)'
                ],
                borderColor: [
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                    'rgba(115, 119, 191, 1)',
                ],
                data: [1000, 1650, 2500, 2000, 1800, 800, 1000, 1800, 2000, 2500, 3000],
                borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'TRAFFIC'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Bar Chart
var barChart = document.getElementById('myBarChart').getContext('2d');
var myChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '# of Votes',
            data: [50, 75, 150, 100, 200, 175, 75, 250],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'DAILY TRAFFIC'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Doughnut Chart
var doughnutChart = document.getElementById('myDoughnutChart').getContext('2d');
var myChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'MOBILE USERS'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});