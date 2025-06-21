document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('lollipopChart').getContext('2d');

    const doughnut10 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Very close', 
              'spoke to them frequently',
               'There was little interaction; I spoke to them now and then',
              'I wasn’t in touch with my family'
              
              ],
            datasets: [{
                data: [39.2, 39.2, 20.9, 0.7],  // Example percentages
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
