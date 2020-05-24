// line chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'WEEKLY',
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000, 2500],
            lineTension: 0,
            backgroundColor: [
                'rgba(115, 119, 191, 0.3)'
            ],
            pointBackgroundColor: [
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
                'rgba(251, 251, 251)',
            ],
            pointBorderColor: [
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
            ],
            pointRadius: 4,
            borderColor: [
                'rgba(115, 119, 191)'
            ],
            borderWidth: 1
        }]
    },
    options: {
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
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)'
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
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: '# of Votes',
            data: [35, 25, 90],
            backgroundColor: [
                'rgba(129, 201, 143)',
                'rgba(116, 177, 191)',
                'rgba(115, 119, 191)',
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