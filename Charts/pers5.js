document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut5').getContext('2d');

    const doughnut5 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Straight', 
              'Prefer not to answer',
               'Bisexual',
              'Other',
              'Asexual'
              
              ],
            datasets: [{
                data: [92.8, 2.9, 2.2, 0.7, 0.7, 0.7],  // Example percentages
                backgroundColor: ['#2196f3', '#e91e63', '#9c27b0'], // blue, pink, purple
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            cutout: '65%', // donut thickness
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        padding: 20,
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
