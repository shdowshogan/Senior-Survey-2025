document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('importanceChart5').getContext('2d');

    const labels = [
        '1 - Most important',
        '2',
        '3',
        '4',
        '5 - Least important'
    ];

    const data = [6.6, 15.6, 20.2, 26.8, 30.7];

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
                ] // horizontal gradient
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
});
