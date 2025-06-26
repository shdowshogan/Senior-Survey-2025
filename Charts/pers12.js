document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut12').getContext('2d');

    const doughnut8 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['I ate in the mess irrespective of my liking', 
              
               'I always found an excuse to order food',
              'I ate in a canteen almost every day',
              'I ate in the mess because I liked the food'
              
              ],
            datasets: [{
                data: [136, 71, 32, 32],  // Example percentages
                backgroundColor: ['#779CAB', // desaturated blue
          '#B5838D', // dusty rose
          '#DDBEA9', // warm tan
           '#6D6875'
                ],
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
