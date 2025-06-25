document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('importanceChart4').getContext('2d');

    const labels = [
        '1 - Most important',
        '2',
        '3',
        '4',
        '5 - Least important'
    ];

    const data = [6.7, 8.7, 11.4, 26.0, 47.2];

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Percentage',
                data: data,
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: [
                    '#4C6E58', // muted green
                    '#779CAB', // desaturated blue
                    '#DDBEA9', // warm tan
                    '#B5838D', // dusty rose
                    '#6D6875', // warm gray-purple
                ]// horizontal gradient
            }]
        },
        options: {
            indexAxis: 'y', // horizontal bar chart
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            return `${ctx.parsed.x}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 35,
                    ticks: {
                        callback: val => val + '%'
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // Apply a blue gradient fill
    // const gradient = ctx.createLinearGradient(0, 0, 600, 0);
    // gradient.addColorStop(0, '#5a4fcf');
    // gradient.addColorStop(1, '#bdafff');
    // chart.data.datasets[0].backgroundColor = gradient;
    // chart.update();
});
