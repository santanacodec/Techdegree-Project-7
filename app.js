var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Weekly',
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 2000, 1500, 2000],
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