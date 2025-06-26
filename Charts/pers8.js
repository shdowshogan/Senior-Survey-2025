document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut8').getContext('2d');

    const doughnut8 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['I have never made out with anyone', 
             
               'Yes, I made out with someone after coming to IITB',
              'Prefer not to answer',
              'Yes, I made out with someone before coming to IITB'
              
              ],
            datasets: [{
                data: [117, 63, 56, 32 ],  // Example percentages
                backgroundColor: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261'], // blue, pink, purple
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
