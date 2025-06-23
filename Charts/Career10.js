document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut10').getContext('2d');

    const doughnut10 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['I will probably be in the top 25%', 
              'Somewhere in the middle (50%) - A steady paycheck is all I care about',
               'No clue',
              "I'm going to be richer than (almost) everyone",
              'Most of my batchmates will have an income higher than me (Inner peace >>)'
              ],
            datasets: [{
                data: [35.7, 23.5, 18.0, 12.1, 10.7],  // Example percentages
                backgroundColor: ['#2196f3', '#e91e63', '#9c27b0'], // blue, pink, purple
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            cutout: '55%', // donut thickness
            layout: {
    // padding: {
    //   right: 0  // 👈 Increase this to avoid label clipping
    // }
  },
            plugins: {
                legend: {
                    display:true,
                    position: 'right',
                    labels: {
                        boxWidth: 25,
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.parsed}%`;
                        }
                    }
                },
                title: {
                    display: true,
                    
                    font: {
                        size: 16
                    },
                    padding: {
                        bottom: 10
                    }
                }
            }
        }
    });
});
