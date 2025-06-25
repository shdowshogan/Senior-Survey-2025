document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('importanceChart3').getContext('2d');

    const labels = [
        '1 - Most important',
        '2',
        '3',
        '4',
        '5 - Least important'
    ];

    const data = [18.9, 36.3, 22.4, 13.1, 9.3];

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
                ]
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
                    max: 40,
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
});
