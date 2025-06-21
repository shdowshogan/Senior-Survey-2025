window.addEventListener('load',function() {
    const ctx = document.getElementById('cheatingChart').getContext('2d');
    const cheatingChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Never',
                'Yes, but I got away without a penalty',
                'Yes, and I had to face repercussions'
            ],
            datasets: [{
                data: [176, 77, 20],
                backgroundColor: [
                    '#36A2EB', // Blue
                    '#FFCE56', // Yellow
                    '#FF6384'  // Red
                ],
                hoverOffset: 10
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Did you cheat on an assignment or exam?'
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });

}
)