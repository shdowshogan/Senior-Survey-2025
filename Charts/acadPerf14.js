window.onload = function() {
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
                '#FFCE56',  // Yellow
                '#36A2EB',  // Blue
                '#FF6384'   // Red
            ],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Did you ever witness someone violating the academic honour code?'
            },
            legend: {
                position: 'right'
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
}