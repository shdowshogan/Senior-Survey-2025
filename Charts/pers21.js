document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut21').getContext('2d');

    const doughnut8 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['H3', 'H2', 'H15', 'H6', 'H5', 'H9', 'H10', 'H17', 'H18', 'Tansa', 'H14', 'H12', 'H13', 'H11', 'H4'],
            datasets: [{
                data: [13.5, 11.7,11.7,11.3,11.0,9.2,5.7,5.3,5.0,3.5,3.5,3.5,3.2,1.4,0.4],  // Example percentages
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
