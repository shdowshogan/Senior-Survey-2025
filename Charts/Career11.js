document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut11').getContext('2d');

    const doughnut10 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['I am not in a relationship', 
              'Going strong in a long distance relationship and have figured it out',
               'We are still figuring it out',
              'We are going to the same city and moving in together :)',
              'We are getting married soon',
              'We are breaking it off'
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
