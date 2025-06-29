window.addEventListener('load', function() {
    const ctx = document.getElementById('witnessChart').getContext('2d');
    const witnessPolarChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: [
            'Yes, but I did not report it',
            'No',
            'Yes, and I reported it'
        ],
        datasets: [{
            label: 'Responses',
            data: [190, 68, 12],
            backgroundColor: [
                '#4C6E58', // muted green
                '#779CAB', // desaturated blue
                '#DDBEA9', // warm tan
                '#B5838D', // dusty rose
                '#6D6875', // warm gray-purple
                '#A3C4BC', // soft teal
                '#E5989B'   // Red
            ],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Did you ever witness someone violating the academic honour code?'
            },
            legend: {
                position: 'top'
            }
        },
        scales: {
            r: {
                ticks: {
                    stepSize: 50
                },
                grid: {
                    circular: true
                }
            }
        }
    }
});
})