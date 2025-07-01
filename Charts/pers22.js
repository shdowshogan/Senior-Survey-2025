
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('importanceChart22').getContext('2d');

    const labels = [
       '10+ hours', '9-10 hours', '8-9 hours', '7-8 hours', '6-7 hours', '5-6 hours', '4-5 hours', 'less than 4 hours'
    ];

    const data = [4, 3, 21, 78, 91, 64, 14, 1];

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
                      "#D6CDEA", // Pale Lavender
  // "#FAD4C0", // Pastel Peach
  "#A4B0A1", // Dusty Olive (darker)
  "#F6C6B5", // Muted Coral
  // "#8675A9", // Soft Purple Gray (dark pastel)
  // "#D7C4BB", // Soft Taupe
  // "#59788E", // Dusty Steel Blue (dark pastel)
 
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
                    max: 100, // slightly above highest value (40.5)
                    ticks: {
                        callback: val => val + '%'
                    },
                    grid: {
                        display: false
                    }
                },
               y: {
    ticks: {
        color: '#333', // Make y-axis labels visible on light background
        font: {
            size: 14
        }
    },
    grid: {
        display: false
    }
}

            }
        }
    });
});
