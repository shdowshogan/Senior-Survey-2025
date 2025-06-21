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
                data: [50.2, 26.2, 11.8, 11.8],  // Example percentages
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
